import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-listado-alumnos-lazy',
  templateUrl: './listado-alumnos-lazy.component.html',
  styleUrls: ['./listado-alumnos-lazy.component.css']
})
export class ListadoAlumnosLazyComponent implements OnChanges {
  @Input() public usuarios: Array<Usuario>;

  constructor(public authServ: AuthService) { }

  ngOnChanges() {
    // console.log(this.usuarios);
  }
}
