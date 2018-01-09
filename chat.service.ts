import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message.model';
import * firebase from 'firebase/app';

import { AuthService } from './services/auth.service';


@Injectable()
export class ChatService {
    user: aziz;
 chatMessage: FirebaseListObservable<ChatMessage[]>;
    chaMessages: chatMessages;
    userName: Observable<string>;
  constructor(
      private db: AngularFireDatabase,
      private afAuth: AngularFireAuth

      ) {
 // this.afAuth.authState._subscribe(Auth =>{
  //    if(auth !== undefined && auth !==null){

      //    this.user= auth;
      }


  });

  }

    envoyerMessage(msg: string){

        const timestamp= this.getTimeStamp();
       // const email= this.user.email;
        const email= 'ridjalolah@gmail.com ';
        this.ChatMessage= this.getMessages();
        this.ChatMessage.push({

          messag: msg,
            timeSent: timeStamp,
            //userName: this.userName,
            userName: test-user,
            email: email
        });

        console.log('called envoyerMessage()!');

    }

    getMessage(): FirebaseListObservable<ChatMessage[]>{

    console.log('caling getMessage...');

        return  this.db.list('message',{
            query : {

                limitToLast: 25,
                orderByKey: true
            }

})
    }

    getTimeStamp(){

        const now= new Date();
        const date= now.getUTCFullYear() +'/'+
            (now.getUTCMonth() +1) +'/'+
            now.getUTCDate();
        const time= now.getUTCHours() +'/'+
            now.getUTCMinutes()  +'/'+
            now.getUTCSeconds();

        return(date + '' +  time);


    }
}
