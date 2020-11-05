import { Component, OnInit } from '@angular/core';

// Rutas con parámetros
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post:{
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string;
  }={
    id: '1',
    titlePost: 'Hisoka',
    contentPost: 'Hisoka Morow (ヒソカ モロウ, Hisoka Morou) es un Cazador',
    imagePost: 'https://poptaim.com/wp-content/uploads/2020/06/4wz6-900x600.jpg'
  }
  constructor(private ruta:ActivatedRoute){

  }

  ngOnInit(){
    this.post.id = this.ruta.snapshot.params.id;
  }

}
