import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemesModel } from 'src/app/models/MemesModel';
import { MemesService } from 'src/app/services/memes.service';
import { Router } from "@angular/router";
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-subir-memes',
  templateUrl: './subir-memes.component.html',
  styleUrls: ['./subir-memes.component.css']
})
export class SubirMemesComponent implements OnInit{

  @ViewChild('preview', {static: false}) preview: any;

  form: FormGroup;

  file = "";

  loading = false;

  constructor(private firebase: AngularFirestore, private fb: FormBuilder, private _memeService: MemesService, private router: Router, private storage: AngularFireStorage) {
    this.form = this.fb.group({
      file: [''],
      description: ['']
    })
  }

  ngOnInit(){
  }

  url="";

  // Preview de meme :D

  onselectFile(event:any){
    if(event.target.files){
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event:any)=>{
        this.url=event.target.result;
      }
    }

    // Cambios en el Dom

    const previewImg = this.preview.nativeElement;
    previewImg.style.display = 'flex';
  }

  subirMeme(event: any) {
      this.file = event.target.files[0];
      return this.file;
  }

  crearMeme(){

    // Referencias

    this.loading = true;

    this.form = this.form.value.description;

    const memeServicio = this._memeService;

    // Storage

    enviarMeme(this.file, this.form)

    function enviarMeme(file: string, form: FormGroup){
      memeServicio.setMeme(file, form);
    }

    // FireStore

  }

  // subirFireStore(){

  //   const MEME: MemesModel = {
  //     file: "",
  //     description: this.form.value.description
  //   };

  //   this._memeService.guardarMeme(MEME)
  //     .then(() => {
  //         console.log('Meme en imagen subido');
  //         this.router.navigate(['/memes/list-memes']);
  //       }, error => {
  //         console.log(error);
  //     })
  // }

}
