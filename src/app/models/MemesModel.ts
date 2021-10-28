export class MemesModel {
  id?: string;
  file?: string;
  description?: string;
  usuario?: string;
  fechaCreacion?: any;

  constructor(file: string, description: string, usuario: string, fechaCreacion: any){
    this.file = file;
    this.description = description;
    this.usuario = usuario;
    this.fechaCreacion = fechaCreacion;
  }
}


