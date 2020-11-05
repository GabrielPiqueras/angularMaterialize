import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public posts: {
      id: string;
      titlePost: string;
      contentPost: string;
      imagePost: string;
  }[] = [
    {
      id: '1',
      titlePost: 'Gon',
      contentPost: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      imagePost: 'https://morningpicker.com/wp-content/uploads/2020/05/Screenshot-2020-05-15-at-3.49.45-PM.png'
    },
    {
      id: '2',
      titlePost: 'Hisoka',
      contentPost: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      imagePost: 'https://poptaim.com/wp-content/uploads/2020/06/4wz6-900x600.jpg'
    },
    {
      id: '3',
      titlePost: 'Kurapika',
      contentPost: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      imagePost: 'https://s1.dmcdn.net/v/Mj7p81S7iQTrrGItP/x1080'
    },
    {
      id: '4',
      titlePost: 'Killua',
      contentPost: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      imagePost: 'https://i.pinimg.com/564x/86/b3/91/86b391c7396f3783908b81d7199646d0.jpg'
    }
  ]
  constructor() {

  }

  ngOnInit(): void {
  }

}
