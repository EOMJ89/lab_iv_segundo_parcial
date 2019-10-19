import { Component, OnInit, OnChanges, EventEmitter, Input, Output } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Materia } from 'src/app/models/materia/materia';

@Component({
  selector: 'app-inscripcion-lazy',
  templateUrl: './inscripcion-lazy.component.html',
  styleUrls: ['./inscripcion-lazy.component.css']
})
export class InscripcionLazyComponent implements OnChanges {
  @Output() public enviarFormulario = new EventEmitter<string>();
  @Input() public materias: Array<Materia>;
  public form: FormGroup;

  ngOnChanges() {
    if (!this.form && this.materias !== undefined) {
      this.form = new FormGroup({
        materia: new FormControl('', Validators.required),
      });
    }
  }

  public registrar() {
    this.enviarFormulario.emit(this.form.value);
  }

}
