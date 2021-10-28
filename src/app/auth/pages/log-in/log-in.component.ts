import { AutenticacionService } from './../../services/autenticacion.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import auth from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  @ViewChild('errorMessage', {static: false}) errorMessage: any;

  group!: FormGroup;

  name: any = "";

  email = "";

  password = "";

  constructor(private autenticacion: AngularFireAuth, private router: Router, private autenticationService: AutenticacionService) {

  }

  ngOnInit(): void {
    this.group = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  async loginWhitEmail(){
    const messageError = this.errorMessage.nativeElement;
    this.autenticationService.SignIn(this.group.value.email, this.group.value.password, messageError, this.name);
  }

  loginWhitGoogle(){
    this.autenticacion.signInWithPopup(new auth.auth.GoogleAuthProvider)
      .then(res => {
        console.log("Esta es tu cuenta", res.user?.displayName);
        this.router.navigate(['memes']);
        this.name = res.user?.displayName;
      })
      .catch(err => {
        console.log("Algo salio mal :/", err);
      });
  }

  get Name(){return this.group.get('name');}
  get Email(){return this.group.get('email');}
  get Password(){return this.group.get('password');}

}
