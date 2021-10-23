import { Observable } from "rxjs";

export class MemesModel {
  id?: string;
  file?: string;
  description?: string;

  constructor(file: string, meme_id: string, description: string){
    this.file = file;
    this.description = description;
  }
}


