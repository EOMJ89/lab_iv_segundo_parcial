import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Materia } from 'src/app/models/materia/materia';

@Component({
  selector: 'app-listado-materias-lazy',
  templateUrl: './listado-materias-lazy.component.html',
  styleUrls: ['./listado-materias-lazy.component.css']
})
export class ListadoMateriasLazyComponent implements OnInit, OnChanges {
  @Input() public materias: Array<Materia>;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log('En Changes', this.materias);
  }

}
