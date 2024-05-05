import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MessageService } from './_messageService/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private messageService: MessageService)
  {

  }

  ngOnInit(): void {
    this.messageService.createConnection()
  }
  title = 'SignalRTutorial';
}
