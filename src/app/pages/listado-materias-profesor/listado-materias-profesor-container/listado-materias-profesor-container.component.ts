import { Component, OnInit, OnDestroy } from '@angular/core';
import { Materia } from 'src/app/models/materia/materia';
import { Subscription } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Inscripcion } from 'src/app/models/inscripcion/inscripcion';
import { diccionario } from 'src/app/models/diccionario';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listado-materias-profesor-container',
  templateUrl: './listado-materias-profesor-container.component.html',
  styleUrls: ['./listado-materias-profesor-container.component.css']
})
export class ListadoMateriasProfesorContainerComponent implements OnInit {
  public materias: Array<Materia>;

  // tslint:disable-next-line: variable-name
  constructor(private _firebaseServ: FirebaseService, private _authServ: AuthService) { }

  ngOnInit() {
    this._firebaseServ.obtenerDocumentosFiltro(diccionario.db.materias, 'profesorCargo', this._authServ.user.key)
      .then((materias: Array<Materia>) => {
        this.materias = materias;
      });
  }
}
