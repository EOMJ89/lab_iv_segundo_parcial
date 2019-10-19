import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { diccionario } from 'src/app/models/diccionario';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Materia } from 'src/app/models/materia/materia';
import { Usuario } from 'src/app/models/usuario/usuario';
import { Inscripcion } from 'src/app/models/inscripcion/inscripcion';

@Component({
  selector: 'app-listado-alumnos-container',
  templateUrl: './listado-alumnos-container.component.html',
  styleUrls: ['./listado-alumnos-container.component.css']
})
export class ListadoAlumnosContainerComponent implements OnInit {
  public listado: Array<Usuario>;

  // tslint:disable-next-line: variable-name
  constructor(private _firebaseServ: FirebaseService, private _authServ: AuthService) { }

  ngOnInit() {
    this._firebaseServ.obtenerDocumentosFiltro(diccionario.db.materias, 'profesorCargo', this._authServ.user.key)
      .then((materias: Array<Materia>) => {
        this.buscarAlumnos(materias).then(listado => {
          this.listado = listado;
        });
      });
  }

  private async buscarAlumnos(materias: Array<Materia>) {
    const listaAlumnos = new Array<Usuario>();

    for (const materiaA of materias) {
      // tslint:disable-next-line: max-line-length
      const listaMateria: Array<Inscripcion> = await this._firebaseServ.obtenerDocumentosFiltro(diccionario.db.inscripciones, 'materia', materiaA.key);

      for (const inscripcion of listaMateria) {
        // tslint:disable-next-line: max-line-length
        const alumnoInscripto: Usuario = (await this._firebaseServ.obtenerDocumentoUID(diccionario.db.usuarios, inscripcion.alumno)).data() as Usuario;

        if (alumnoInscripto !== undefined) {
          alumnoInscripto.key = inscripcion.alumno;
          if (this.verificarAlumno(listaAlumnos, alumnoInscripto)) {
            listaAlumnos.push(alumnoInscripto);
          }
        }
      }
    }

    return listaAlumnos;
  }

  private verificarAlumno(listaAlumnos: Array<Usuario>, usuario: Usuario) {
    let auxReturn = true;

    for (const alumnoA of listaAlumnos) {
      if (alumnoA.mail === usuario.mail) {
        auxReturn = false;
      }
    }

    return auxReturn;
  }
}
