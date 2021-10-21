import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMemesComponent } from './list-memes/list-memes.component';
import { SubirMemesComponent } from './subir-memes/subir-memes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list-memes', component: ListMemesComponent},
      { path: 'subir-meme', component: SubirMemesComponent},
      {path: '**', redirectTo: 'list-memes'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemesRoutingModule { }
