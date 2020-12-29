import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages = [
    {
      side : 'left',
      msg : 'Hello'
    },
    {
      side : 'right',
      msg : 'Hii'
    },
    {
      side : 'left',
      msg : 'Are you nearby ?'
    },
    {
      side : 'right',
      msg : 'I will be there in few mins'
    },
    {
      side : 'left',
      msg : 'Ok, I am waiting at vinmark Store'
    },
    {
      side : 'right',
      msg : 'Sorry I am stuck in traffic. Please give me a moment.'
    }
  ];
  plt;

  constructor() {
    this.plt = localStorage.getItem('platform');
  }

  ngOnInit() {
  }

}
