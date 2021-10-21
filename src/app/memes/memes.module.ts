import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemesRoutingModule } from './memes-routing.module';
import { ListMemesComponent } from './list-memes/list-memes.component';
import { SubirMemesComponent } from './subir-memes/subir-memes.component';


@NgModule({
  declarations: [
    ListMemesComponent,
    SubirMemesComponent
  ],
  imports: [
    CommonModule,
    MemesRoutingModule
  ]
})
export class MemesModule { }
