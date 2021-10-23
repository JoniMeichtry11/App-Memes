import { MemesModel } from '../models/MemesModel';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class MemesService {

  url = "Esto es el primer texto uwu";

  description = "";

  constructor(private firebaseF: AngularFirestore, private storage: AngularFireStorage, private router: Router) { }

  // Storage

  async setMeme(_file: any, _form: any){
    if(_file){

      this.description = _form;

      console.log("este es el arhivo", _file);

      console.log("esta es la descripcion", this.description);

      const filePath = `memes/${_file.name}`;
      const snap = await this.storage.upload(filePath, _file);
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
      description: this.description
    };

    console.log(this.url);

    this.guardarMeme(MEME);
  }

  // FireStore

  guardarMeme(MEME: MemesModel): Promise<any>{

    return this.firebaseF.collection(`meme`).add(MEME)

    .then(() => {
      console.log('Meme en imagen subido');
      this.router.navigate(['/memes/list-memes']);
    }, error => {
       console.log(error);
    })
  }

  obtenerMeme(): any{
    const memes = this.firebaseF.collection(`meme`).snapshotChanges()
    return memes;
  }

  

}
