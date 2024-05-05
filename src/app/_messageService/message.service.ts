import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  huburl=environment.hubUrl;
  hubConnection?:HubConnection;
  constructor() { }


  createConnection()
  {
    this.hubConnection=new HubConnectionBuilder().withUrl(this.huburl).withAutomaticReconnect().build();

    this.hubConnection.start().catch((e)=>{console.log(e)})

    this.hubConnection.on("ReceiveMessage",(message)=>{console.log(message)});
  }

}
