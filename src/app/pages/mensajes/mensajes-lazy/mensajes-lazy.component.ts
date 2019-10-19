import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Mensaje } from 'src/app/models/mensaje/mensaje';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mensajes-lazy',
  templateUrl: './mensajes-lazy.component.html',
  styleUrls: ['./mensajes-lazy.component.css']
})
export class MensajesLazyComponent implements OnChanges {
  @Input() public mensajes: Array<Mensaje>;
  @Output() public enviarMensaje = new EventEmitter<Mensaje>();
  public form;

  // tslint:disable-next-line: variable-name
  constructor(public authServ: AuthService) { }

  ngOnChanges() {
    // console.log(this.mensajes);
    if (this.mensajes !== undefined) {
      this.form = new FormGroup({
        mensaje: new FormControl('', [Validators.required]),
        emisor: new FormControl(this.authServ.user.key, Validators.required),
      });
    }
  }

  public enviar() {
    this.enviarMensaje.emit(this.form.value);
  }
}
