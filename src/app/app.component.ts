import { Component } from '@angular/core';
// Firebase
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  personajes: Observable<any[]>;

  constructor(firestore: AngularFirestore){
    this.personajes = firestore.collection('personajes').valueChanges();
  }


}
