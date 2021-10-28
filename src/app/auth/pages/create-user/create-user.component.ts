import { AutenticacionService } from './../../services/autenticacion.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  group!: FormGroup;

  constructor(private autenticacion: AutenticacionService) {

  }

  ngOnInit(): void {
    this.group = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  crearUsuario(){
    this.autenticacion.SignUp(this.group.value.name, this.group.value.email, this.group.value.password);
  }

  get name(){return this.group.get('name');}
  get email(){return this.group.get('email');}
  get password(){return this.group.get('password');}

}
