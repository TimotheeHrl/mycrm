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
  receivedMessages: ChatMessage[] = [];
  // @ts-ignore, to suppress warning related to being undefined
  private topicSubscription: Subscription;
  public messagesFromGeneralChat!: MessageI[] | null;
  constructor(
    private rxStompService: RxStompService,
    public formBuilder: FormBuilder,
    private chatService: ChatService
  ) {
    this.chatService.messageGeneral$.subscribe(
      (data) => (this.messagesFromGeneralChat = data)
    );
  }
  checkoutForm = this.formBuilder.group({
    message: "",
  });

  ngOnInit() {
    this.topicSubscription = this.rxStompService
      .watch("/chat/messages")
      .subscribe((message: IMessage) => {
        const chatMessage: ChatMessage = JSON.parse(message.body);
        this.receivedMessages.push(chatMessage);
      });

    console.log(this.messagesFromGeneralChat);
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }

  onSubmit() {
    const token = getTokenFunc();
    console.log(token);
    //add token to message
    const messageText = (document.getElementById("message") as HTMLInputElement)
      .value;
    this.rxStompService.publish({
      destination: "/app/sendmsg",
      body: JSON.stringify(messageText),
      headers: { token: getTokenFunc() },
    });
    this.checkoutForm.reset();
  }
}
