import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../auth/services/autenticacion.service';
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authSvc: AutenticacionService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authSvc.userData$.pipe(
      map( user => {
        if(user){
          // Si el usuario existe lo redirecciono a la vista de memes
          this.router.navigate(['../memes'])
          return false;
        }
        // Si el usuario No existe le permito estar en la "Home page" y en la "Auth page"
        return true;
      })
    )
  }
}
