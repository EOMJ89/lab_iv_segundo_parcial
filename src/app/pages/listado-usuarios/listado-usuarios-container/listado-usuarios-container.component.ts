import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { Subscription } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { diccionario } from 'src/app/models/diccionario';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listado-usuarios-container',
  templateUrl: './listado-usuarios-container.component.html',
  styleUrls: ['./listado-usuarios-container.component.css']
})
export class ListadoUsuariosContainerComponent implements OnInit, OnDestroy {
  public usuarios: Array<Usuario>;
  // tslint:disable-next-line: variable-name
  private _usuariosObs: Subscription;

  // tslint:disable-next-line: variable-name
  constructor(private _firebaseServ: FirebaseService) { }

  ngOnInit() {
    this.mostrar('todo');
  }

  ngOnDestroy() {
    this.destruirObservable();
  }

  private destruirObservable() {
    if (this._usuariosObs) {
      this._usuariosObs.unsubscribe();
    }
  }

  private obtenerListado() {
    return this._firebaseServ.obtenerDocumentosTodos(diccionario.db.usuarios)
      .pipe(
        map(retorno => {
          return retorno.map(a => {
            const data: Usuario = a.payload.doc.data() as Usuario;
            data.key = a.payload.doc.id;
            return data;
          });
        })
      );
  }

  public mostrar(filtro: string) {
    // console.log('Mostraré solo los tipo', filtro);
    this.destruirObservable();
    this._usuariosObs = this.obtenerListado().subscribe((usuarios: Array<Usuario>) => {
      this.usuarios = usuarios;

      if (filtro !== 'todo') {
        this.usuarios = this.usuarios.filter((f: Usuario) => {
          // console.log(f.tipo === filtro);
          return f.tipo === filtro;
        });
      }
      // console.log('En subscribe', this.usuarios);
    });
  }
}
