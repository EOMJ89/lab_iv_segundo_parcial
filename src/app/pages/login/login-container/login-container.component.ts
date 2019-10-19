import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent {
  // tslint:disable-next-line: variable-name
  private _mensaje = '';

  // tslint:disable-next-line: variable-name
  constructor(private _authServ: AuthService, private _router: Router) { }

  public loguear(event: { mail: string, clave: string }) {
    // console.log('Event en Container', event);
    this._authServ.logIn(event)
      .then(() => {
        this._router.navigate(['home-alumno']);
      })
      .catch((err) => {
        // console.log('Error en Container Component', err);
        this.mostrarMensaje(err.code);
      });
  }

  private elegirMensaje(codigo: string) {
    let mensaje = '';
    switch (codigo) {
      case 'auth/user-disabled': {
        mensaje = 'Usuario inhabilitado.';
        break;
      }
      case 'auth/user-not-found': {
        mensaje = 'Usuario inexistente.';
        break;
      }
      case 'auth/wrong-password': {
        mensaje = 'Contraseña incorrecta.';
        break;
      }
      case 'auth/too-many-requests': {
        mensaje = 'Espere unos minutos y reintente.';
        break;
      }
      default: {
        mensaje = 'Hay problemas técnicos.';
        break;
      }
    }

    return mensaje;
  }

  private mostrarMensaje(codigo: string) {
    this._mensaje = this.elegirMensaje(codigo);
    setTimeout(() => { this._mensaje = ''; }, 2000);
  }
}
