import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { diccionario } from 'src/app/models/diccionario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-container',
  templateUrl: './registro-container.component.html',
  styleUrls: ['./registro-container.component.css']
})
export class RegistroContainerComponent {
  // tslint:disable-next-line: variable-name
  constructor(private _authServ: AuthService, private _firebaseServ: FirebaseService, private _router: Router) { }

  public registrar(event: Usuario) {
    // console.log('Event en Container', event);

    this._firebaseServ.agregarDocumento(diccionario.db.usuarios, { mail: event.mail, tipo: event.tipo })
      .then((result) => {
        if (result) {
          this._authServ.crear(event.mail, event.clave)
            .then((user) => {
              // console.log('Registro completo');
              this._router.navigate(['login']);
            })
            .catch((err) => {
              console.log('Error en Container Component', err);
            });
        }
      })
      .catch((err) => {
        console.log('Error en Container Component', err);
      });
  }
}
