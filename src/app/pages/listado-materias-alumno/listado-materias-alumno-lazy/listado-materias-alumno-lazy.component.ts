import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Materia } from 'src/app/models/materia/materia';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-listado-materias-alumno-lazy',
  templateUrl: './listado-materias-alumno-lazy.component.html',
  styleUrls: ['./listado-materias-alumno-lazy.component.css']
})
export class ListadoMateriasAlumnoLazyComponent implements OnChanges {
  @Input() public materias: Array<any>;

  constructor(public authServ: AuthService) {}

  ngOnChanges() {
    // console.log(this.materias);
  }
}
