import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Personaje { name: string }

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private personajesColeccion: AngularFirestoreCollection<Personaje>;
  personajes: Observable<Personaje[]>;

  constructor(private afs: AngularFirestore){
    this.personajesColeccion = afs.collection<Usuario>('personajes');
    this.personajes = this.personajesColeccion.snapshotChanges().pipe(
      map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Personaje;
      const id = a.payload.doc.id;
      return { id, ...data };
      }))
   );
  }

  obtenerPersonajes(){
    return this.personajes;
  }

}
