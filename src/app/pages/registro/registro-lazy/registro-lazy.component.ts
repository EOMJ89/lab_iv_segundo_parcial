import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario/usuario';
import { diccionario } from 'src/app/models/diccionario';

@Component({
  selector: 'app-registro-lazy',
  templateUrl: './registro-lazy.component.html',
  styleUrls: ['./registro-lazy.component.css']
})
export class RegistroLazyComponent implements OnInit {
  @Output() public enviarFormulario = new EventEmitter<Usuario>();
  public form: FormGroup;
  public tipos;

  ngOnInit() {
    this.tipos = new Array<string>(
      diccionario.tipos.alumno,
      diccionario.tipos.admin,
      diccionario.tipos.profesor
    );

    this.form = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]),
      clave: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      tipo: new FormControl(this.tipos[0], [Validators.required])
    });

    /* this.form.valueChanges.subscribe(() => {
      console.log(this.form);
    }); */
  }

  public registrar() {
    this.enviarFormulario.emit(this.form.value);
  }
}
