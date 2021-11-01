import { AutenticacionService } from './../../auth/services/autenticacion.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemesService } from 'src/app/services/memes.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-subir-memes',
  templateUrl: './subir-memes.component.html',
  styleUrls: ['./subir-memes.component.css']
})
export class SubirMemesComponent implements OnInit{

  @ViewChild('preview', {static: false}) preview: any;

  form: FormGroup;

  usuario: any;

  file = "";

  loading = false;

  datos = {
    "notification": {
      "title": "Nuevo meme recibido :D",
      "body": "El usuario a subido un nuevo meme"
    },
    "to":"cUerN-8k1jQePZmlfh_XaS:APA91bEj2P5I-GzVuaZYjYIuo8OM3dI1BWFBH6_3QeN5xxOUnjObKG0qWeC1WeRkpFgcE2xM4cB04M49Blm1-3uoNAiY0Te0WjTZYjQXL-q3aDoduZQSCqc_MrwP0QDPYrszIZ5rkvJg"
  }

  constructor(private fb: FormBuilder, private _memeService: MemesService, private autentication: AutenticacionService, private loadingService: LoadingService) {
    this.form = this.fb.group({
      file: [''],
      description: ['']
    })
  }

  ngOnInit(){

    // El nombre de usuario

    this.autentication.userData$.subscribe(user => {
      this.usuario = user.displayName;
      console.log("Este es el usuario", this.usuario);
    })
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

    this.loadingService.cargarSpinner();

    // Referencias

    this.loading = true;

    this.form = this.form.value.description;

    const memeServicio = this._memeService;

    // Storage

    enviarMeme(this.file, this.form, this.usuario)

    function enviarMeme(file: string, form: FormGroup, usuario: any){
      memeServicio.setMeme(file, form, usuario);
    }

  }

}
