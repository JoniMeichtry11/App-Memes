import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MemesModel } from 'src/app/models/MemesModel';
import { MemesService } from 'src/app/services/memes.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-memes',
  templateUrl: './list-memes.component.html',
  styleUrls: ['./list-memes.component.css']
})
export class ListMemesComponent implements OnInit {

  public listMemes: any[] = [];

  constructor(private memeService: MemesService, private storage: AngularFireStorage, private router: Router) {}

  ngOnInit(){
    this.memeService.obtenerMeme()
    .subscribe((data: any) => {
      this.listMemes = [];
      data.forEach((element: any) => {
        this.listMemes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })

      });

      console.log(this.listMemes);

      this.meme();

    });



  }

  meme(){
    console.log(this.listMemes);
  }

}
