import { MemesModel } from '../models/MemesModel';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

// Servicio dedicado a subir y traer memes a Firestore y Fire Storage

export class MemesService {

  usuario: any;

  url = "Esto es el primer texto uwu";

  description = "";

  loader: any;

  constructor(private firebaseF: AngularFirestore, private storage: AngularFireStorage, private router: Router) { }

  // Storage

  async setMeme(_file: any, _form: any, usuario: any){
    if(_file){

      this.description = _form;

      this.usuario = usuario;

      const filePath = `memes/${_file.name}`;
      const snap = await this.storage.upload(filePath, _file, this.usuario);
      this.getUrl(snap);
    } else {
      console.log("Falto enviar la foto :/");
    }
  }

  async getUrl(snap: firebase.storage.UploadTaskSnapshot): Promise<void> {
    const URL = await snap.ref.getDownloadURL();
    this.url = URL;//store the URL

    const MEME: MemesModel = {
      file: this.url,
      description: this.description,
      usuario: this.usuario,
      fechaCreacion: new Date()
    };
    this.guardarMeme(MEME);
  }

  // FireStore

  guardarMeme(MEME: MemesModel): Promise<any>{

    return this.firebaseF.collection(`meme`).add(MEME)

    .then(() => {
      console.log('Meme subido con exito uwu');
      this.router.navigate(['/memes/list-memes']);
    }, error => {
       console.log(error);
    })
  }

  obtenerMeme(): any{
    const memes = this.firebaseF.collection(`meme`, ref => ref.orderBy('fechaCreacion', 'desc')).snapshotChanges();
    return memes;
  }

  // PreCarga

  preLoader(loader: any){
    loader.style.opacity = "0";
  }

}
