import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';
import { ChatMessage } from '../models/chat-message.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
 @Input() chatMessage : this.chatMessage;
    userEmail:string;
    userName: string;
    messageContent: string;
    timeStamp: Date= new Date();


    constructor(chat: chatMessage : this.chatMessage) {
}
this.userEmail=chatMessage.Email;
this.userName=chatMessage.userName;
this.messageContent=chatMessage.messageContent;
this.timeStamp=chatMessage.timeSent;

ngOnInit() {
  }

}
