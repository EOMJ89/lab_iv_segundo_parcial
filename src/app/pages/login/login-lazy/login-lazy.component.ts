import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-lazy',
  templateUrl: './login-lazy.component.html',
  styleUrls: ['./login-lazy.component.css']
})
export class LoginLazyComponent implements OnInit {
  @Output() public enviarFormulario = new EventEmitter<{ mail: string, clave: string }>();
  public form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]),
      clave: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  public loguear() {
    this.enviarFormulario.emit(this.form.value);
  }
}
