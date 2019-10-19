import { Component, OnInit, OnDestroy } from '@angular/core';
import { Materia } from 'src/app/models/materia/materia';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { diccionario } from 'src/app/models/diccionario';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { Inscripcion } from 'src/app/models/inscripcion/inscripcion';

@Component({
  selector: 'app-inscripcion-container',
  templateUrl: './inscripcion-container.component.html',
  styleUrls: ['./inscripcion-container.component.css']
})
export class InscripcionContainerComponent implements OnInit, OnDestroy {
  public materias: Array<Materia>;
  // tslint:disable-next-line: variable-name
  private _materiasObs: Subscription;
  // tslint:disable-next-line: variable-name
  private _mensaje = '';

  // tslint:disable-next-line: variable-name
  constructor(private _firebaseServ: FirebaseService, private _authServ: AuthService, private _router: Router) { }

  ngOnInit() {
    this.obtenerListado().subscribe((documentos) => {
      // console.log('Materias', documentos);
      this.materias = documentos;
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

  public async  inscribir(event: { materia: string }) {
    // console.log(event);


    if (await this.verificarInscripto(event.materia)) {
      if (await this.verificarCupo(event.materia)) {
        const inscripcion: Inscripcion = { materia: event.materia, alumno: this._authServ.user.key } as Inscripcion;

        this._firebaseServ.agregarDocumento(diccionario.db.inscripciones, inscripcion)
          .then((result) => {
            this._router.navigate(['home-alumno']);
          })
          .catch((err) => {
            this.mostrarMensaje('Error al agregar a la base de datos.');
            console.log('Error en Container Component', err);
          });
      } else {
        this.mostrarMensaje('No hay cupo disponible.');
      }
    } else {
      this.mostrarMensaje('No se puede reinscribir a una materia.');
    }
  }

  private async verificarInscripto(materia: string) {
    const inscripciones = await this._firebaseServ.obtenerDocumentosFiltro(diccionario.db.inscripciones, 'alumno', this._authServ.user.key);
    let auxReturn = true;
    for (const inscripcionA of inscripciones) {
      if (inscripcionA.materia === materia) {
        auxReturn = false;
      }
    }

    return auxReturn;
  }

  private async verificarCupo(materia: string) {
    const materiaDoc = ((await this._firebaseServ.obtenerDocumentoUID(diccionario.db.materias, materia))
      .data()) as Materia;
    let auxReturn = false;

    if (materiaDoc !== undefined) {
      // tslint:disable-next-line: max-line-length
      const inscripciones: Array<Inscripcion> = await this._firebaseServ.obtenerDocumentosFiltro(diccionario.db.inscripciones, 'materia', materia);
      console.log(inscripciones.length, materiaDoc.cupos);
      if (inscripciones.length < materiaDoc.cupos) {
        auxReturn = true;
      }
    }

    return auxReturn;
  }

  private mostrarMensaje(mensaje: string) {
    this._mensaje = mensaje;
    setTimeout(() => { this._mensaje = ''; }, 5000);
  }
}
