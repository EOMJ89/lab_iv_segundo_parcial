import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { Materia } from 'src/app/models/materia/materia';
import { diccionario } from 'src/app/models/diccionario';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario/usuario';

@Component({
  selector: 'app-listado-materias-container',
  templateUrl: './listado-materias-container.component.html',
  styleUrls: ['./listado-materias-container.component.css']
})
export class ListadoMateriasContainerComponent implements OnInit, OnDestroy {
  public materias: Array<Materia>;
  // tslint:disable-next-line: variable-name
  private _materiasObs: Subscription;

  // tslint:disable-next-line: variable-name
  constructor(private _firebaseServ: FirebaseService) { }

  ngOnInit() {
    this._materiasObs = this.obtenerListado().subscribe(async (materias: Array<Materia>) => {
      this.materias = await this.manageList(materias);
      // console.log('En subscribe', materias);
    });
  }

  ngOnDestroy() {
    if (this._materiasObs) {
      this._materiasObs.unsubscribe();
    }
  }

  private obtenerListado() {
    return this._firebaseServ.obtenerDocumentosTodos(diccionario.db.materias)
      .pipe(
        map(retorno => {
          return retorno.map(a => {
            const data: Materia = a.payload.doc.data() as Materia;
            data.key = a.payload.doc.id;
            return data;
          });
        })
      );
  }

  private async manageList(materias: Array<Materia>) {
    const lista = new Array<Materia>();
    for (const materiaA of materias) {
      const profesor = ((await this._firebaseServ.obtenerDocumentoUID(diccionario.db.usuarios, materiaA.profesorCargo))
        .data()) as Usuario;

      if (profesor !== undefined) {
        const materiaB = materiaA;
        materiaB.profesorCargo = profesor.mail;

        lista.push(materiaB);
      }
      // console.log(profesor);
    }

    return lista;
  }
}
