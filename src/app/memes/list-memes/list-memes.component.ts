import { Component, OnInit } from '@angular/core';
import { MemesService } from 'src/app/services/memes.service';
import { AutenticacionService } from 'src/app/auth/services/autenticacion.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-list-memes',
  templateUrl: './list-memes.component.html',
  styleUrls: ['./list-memes.component.css']
})
export class ListMemesComponent implements OnInit {

  public opacidad = 0;

  public listMemes: any[] = [];

  constructor(private memeService: MemesService, public autentication: AutenticacionService, private loadingService: LoadingService) {}

  ngOnInit(){
    this.loadingService.cargarSpinner();

    this.memeService.obtenerMeme()
    .subscribe((data: any) => {
      this.listMemes = [];
      data.forEach((element: any) => {
        this.listMemes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
        
      });

      setTimeout(() => {
        this.loadingService.cerrarSpinner();
      }, 1000);

      setTimeout(() => {
        this.opacidad = 1
      }, 3000);

    });
  }
  // ⏬ Por el momento no lo necesito ⏬

  // desLogueo(){
  //   this.autentication.SignOut();
  // }

}
