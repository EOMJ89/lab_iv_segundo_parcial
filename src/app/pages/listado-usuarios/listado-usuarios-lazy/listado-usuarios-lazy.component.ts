import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';

@Component({
  selector: 'app-listado-usuarios-lazy',
  templateUrl: './listado-usuarios-lazy.component.html',
  styleUrls: ['./listado-usuarios-lazy.component.css']
})
export class ListadoUsuariosLazyComponent implements OnInit, OnChanges {
  @Input() public usuarios: Array<Usuario>;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log('En Changes', this.usuarios);
  }

}
