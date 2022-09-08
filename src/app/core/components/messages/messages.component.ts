import { Component, OnDestroy, OnInit } from "@angular/core";
import { Message } from "@stomp/stompjs";
import { Subscription } from "rxjs";
import { Message as ChatMessage } from "../../models/message";
import { RxStompService } from "../../stomp/rx-stomp.service";
@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"],
})
export class MessagesComponent implements OnInit, OnDestroy {
  receivedMessages: string[] = [];
  // @ts-ignore, to suppress warning related to being undefined
  private topicSubscription: Subscription;

  constructor(private rxStompService: RxStompService) {}

  ngOnInit() {
    this.topicSubscription = this.rxStompService
      .watch("/chat/messages")
      .subscribe((message: Message) => {
        this.receivedMessages.push(message.body);
      });
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }

  onSendMessage() {
    const messageText = `Message generated at ${new Date()}`;
    const message: ChatMessage = {
      text: messageText,
      username: "Angular",
      avatar: "https://angular.io/assets/images/logos/angular/angular.png",
    };

    this.rxStompService.publish({
      destination: "/app/sendmsg",
      body: JSON.stringify(message),
    });
  }
}
