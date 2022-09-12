import { Component, OnDestroy, OnInit } from "@angular/core";
import { IMessage } from "@stomp/stompjs";
import { Subscription } from "rxjs";
import { getTokenFunc } from "../../authServices/getTokenFunc";
import { MessageI as ChatMessage } from "../../interfaces/message-i";
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
  constructor(private rxStompService: RxStompService) {}

  ngOnInit() {
    this.topicSubscription = this.rxStompService
      .watch("/chat/messages")
      .subscribe((message: IMessage) => {
        const chatMessage: ChatMessage = JSON.parse(message.body);
        this.receivedMessages.push(chatMessage);
      });
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }

  onSendMessage() {
    const token = getTokenFunc();
    console.log(token);
    //add token to message
    const messageText = `Message generated at ${new Date()}`;
    const message: ChatMessage = {
      text: messageText,
      username: "",
      avatar: "https://angular.io/assets/images/logos/angular/angular.png",
    };
    this.rxStompService.publish({
      destination: "/app/sendmsg",
      body: JSON.stringify(message),
      headers: { token: getTokenFunc() },
    });
  }
}
