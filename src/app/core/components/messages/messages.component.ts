import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { IMessage } from "@stomp/stompjs";
import { Subscription } from "rxjs";
import { getTokenFunc } from "../../authServices/getTokenFunc";
import { MessageI as ChatMessage, MessageI } from "../../interfaces/message-i";
import { ChatService } from "../../services/chat.service";
import { RxStompService } from "../../stomp/rx-stomp.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"],
})
export class MessagesComponent implements OnInit, OnDestroy {
  // @ts-ignore, to suppress warning related to being undefined
  private topicSubscription: Subscription;
  public messagesFromGeneralChat!: MessageI[];
  public expanded: boolean = false;
  public lastMessage!: MessageI | null;
  public hasUnreadMessage: boolean = false;
  public scrollY = 0;
  public messagesFromGeneralChatReverse!: MessageI[];

  constructor(
    private rxStompService: RxStompService,
    public formBuilder: FormBuilder,
    private chatService: ChatService
  ) {
    this.chatService.messageGeneral$.subscribe(
      (data) => (this.messagesFromGeneralChat = data.reverse())
    );

    this.lastMessage = this.messagesFromGeneralChat[1];
  }
  checkoutForm = this.formBuilder.group({
    message: "",
  });

  setHasNewUnReadMessage() {
    if (!this.expanded) {
      this.hasUnreadMessage = true;
    }
  }

  ngOnInit() {
    this.topicSubscription = this.rxStompService
      .watch("/chat/messages")
      .subscribe((message: IMessage) => {
        const chatMessage: ChatMessage = JSON.parse(message.body);
        this.messagesFromGeneralChat?.unshift(chatMessage);

        this.lastMessage = chatMessage;
        this.setHasNewUnReadMessage();
      });
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }
  public displayMessage() {
    this.expanded = !this.expanded;
    this.hasUnreadMessage = false;
    if (this.expanded) {
      this.hasUnreadMessage = false;
    }
  }
  // if key enter is pressed, send message
  onKeydownEnter(event: any) {
    console.log(event.target.value);
    if (event.key === "Enter") {
      this.onSubmit();
    }
  }

  private filterMessage(messageText: string) {
    // remove "" caracters
    //messageText.replace(/"/g, "");
    return messageText.replace(/(\r\n|\n|\r)/gm, "");
  }
  onSubmit() {
    const token = getTokenFunc();
    console.log(token);
    //add token to message
    const messageText = (document.getElementById("message") as HTMLInputElement)
      .value;
    let filteredMessage = this.filterMessage(messageText);
    this.rxStompService.publish({
      destination: "/app/sendmsg",
      body: JSON.stringify(filteredMessage),
      headers: { token: getTokenFunc() },
    });
    this.checkoutForm.reset();
  }
}
