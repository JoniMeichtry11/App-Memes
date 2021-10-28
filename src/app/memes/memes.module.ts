import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireStorageModule } from '@angular/fire/storage';

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
    MemesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule
  ]
})
export class MemesModule { }
