import { Component, OnInit, ViewChild } from '@angular/core';
// import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-subir-memes',
  templateUrl: './subir-memes.component.html',
  styleUrls: ['./subir-memes.component.css']
})
export class SubirMemesComponent implements OnInit{

  @ViewChild('preview', {static: false}) preview: any;
  @ViewChild('deleteParrafo', {static: false}) deleteParrafo: any;
  @ViewChild('deleteInput', {static: false}) deleteInput: any;

  // constructor(private storage: AngularFireStorage) { }

  ngOnInit(){
  }

  url="";

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

    const deleteP = this.deleteParrafo.nativeElement;
    deleteP.style.display = 'none';

    const deleteI = this.deleteInput.nativeElement;
    deleteI.style.display = 'none';

    //Guardo imagenes en Base de Datos

    // const id = Math.random().toString(36).substring(2);
    // const file = event.target.files[0];
    // const filePath = `memes/meme_${id}`
    // const ref = this.storage.ref(filePath);
    // const task = ref.put(file);
  }
}
