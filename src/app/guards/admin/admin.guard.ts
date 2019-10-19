import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { diccionario } from 'src/app/models/diccionario';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  // tslint:disable-next-line: variable-name
  constructor(private _authServ: AuthService, private _router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let auxReturn = false;

    switch (this._authServ.user.tipo) {
      case diccionario.tipos.admin: {
        auxReturn = true;
        break;
      }
      case diccionario.tipos.alumno: {
        this._router.navigate(['home-alumno']);
        break;
      }
      default: {
        this._router.navigate(['home-profesor']);
        break;
      }
    }

    return auxReturn;
  }
}
