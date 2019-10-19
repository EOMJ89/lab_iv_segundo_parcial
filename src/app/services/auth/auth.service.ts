import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase';
import { environment } from 'src/environments/environment';
import { FirebaseService } from '../firebase/firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Usuario } from 'src/app/models/usuario/usuario';
import { diccionario } from 'src/app/models/diccionario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line: variable-name
  private _secondaryApp = initializeApp(environment.firebaseConfig, 'SecondaryApp');
  public user: Usuario = null;

  // tslint:disable-next-line: variable-name
  constructor(private _auth: AngularFireAuth, private _firebaseServ: FirebaseService) {
    if (localStorage.getItem('userApplication_exam')) {
      this.user = JSON.parse(localStorage.getItem('userApplication_exam')) as Usuario;
    } else {
      this.user = null;
      this.logOff();
    }
  }

  public logIn(credenciales: { mail: string, clave: string }) {
    return this._auth.auth.signInWithEmailAndPassword(credenciales.mail, credenciales.clave)
      .then(async (user) => {
        this.user = await this._firebaseServ.obtenerDocumento(diccionario.db.usuarios, 'mail', user.user.email) as Usuario;
        this.user.clave = null;
        localStorage.setItem('userApplication_exam', JSON.stringify(this.user));
      });
  }

  public logOff() {
    return this._auth.auth.signOut()
      .then(() => {
        localStorage.removeItem('userApplication_exam');
        this.user = null;
      })
      .catch((err) => {
        console.log('Error en Servicio', err);
      });
  }

  public crear(correo: string, clave: string) {
    return this._secondaryApp.auth().createUserWithEmailAndPassword(correo, clave)
      .then((user) => {
        this._secondaryApp.auth().signOut();
        return user;
      })
      .catch((err) => {
        console.log('Error en Servicio', err);
      });
  }
}
