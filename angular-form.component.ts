import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';
@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit {
    message: String;

  constructor(private chat: ChatService) {
  }

  ngOnInit() {
      }

  Envoyer(){
      this.chat.envoyerMessage(this.message);
      this.message='';

  }

    handSubmit(event){
         if(event.code === 13){

             this.Envoyer();
         }
    }

}
