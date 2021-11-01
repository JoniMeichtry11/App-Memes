import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { LoadingService } from 'src/app/services/loading.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  public userData$: Observable<any>;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router, private loadingService: LoadingService) {
    this.userData$ = angularFireAuth.authState;
  }

     /* Sign up */
  SignUp(name: string, email: string, password: string) {
    this.loadingService.cargarSpinner();
    this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        user.user?.updateProfile({
          displayName: name
        });
        this.loadingService.cerrarSpinner();
        this.router.navigate(['../auth']);
      })
      .catch(error => {
        console.log('Ocurrio algo . . . :', error.message);
      });
  }

  /* Sign in */
  async SignIn(email: string, password: string, messageError: any, name: any) {
    this.loadingService.cargarSpinner();
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      this.loadingService.cerrarSpinner();
      this.router.navigate(['memes']);
      name = res.user?.displayName;
    })
    .catch(res =>{
      console.log("Ocurrio algo ...?", res);
      this.loadingService.cerrarSpinner();
      messageError.style.display = 'block';
    })
  }

  //   /* Sign out */
  // SignOut() {
  //   this.angularFireAuth.signOut();
  //   console.log("estas deslogueado");
  // }
}
