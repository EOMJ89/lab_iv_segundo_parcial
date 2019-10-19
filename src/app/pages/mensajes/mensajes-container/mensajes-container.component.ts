import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mensaje } from 'src/app/models/mensaje/mensaje';

@Component({
  selector: 'app-mensajes-container',
  templateUrl: './mensajes-container.component.html',
  styleUrls: ['./mensajes-container.component.css']
})
export class MensajesContainerComponent implements OnInit, OnDestroy {
  public mensajes: Array<Mensaje>;
  // tslint:disable-next-line: variable-name
  private _mensajeObs: Subscription;
  // tslint:disable-next-line: variable-name
  private _database: string;

  // tslint:disable-next-line: variable-name
  constructor(private _activatedRoute: ActivatedRoute, private _firebaseServ: FirebaseService) { }

  ngOnInit() {
    const profesorKey: string = this._activatedRoute.snapshot.paramMap.get('profesor');
    const alumnoKey: string = this._activatedRoute.snapshot.paramMap.get('alumno');
    this._database = profesorKey + '-' + alumnoKey;

    this._mensajeObs = this.obtenerListado().subscribe((mensajes: Array<Mensaje>) => {
      this.mensajes = mensajes.sort(this.ordenarPorFecha);
      // console.log('En subscribe', mensajes);
    });
  }

  ngOnDestroy() {
    if (this._mensajeObs) {
      this._mensajeObs.unsubscribe();
    }
  }

  private obtenerListado() {
    return this._firebaseServ.obtenerDocumentosTodos(this._database)
      .pipe(
        map(retorno => {
          return retorno.map(a => {
            const data: Mensaje = a.payload.doc.data() as Mensaje;
            data.key = a.payload.doc.id;
            return data;
          });
        })
      );
  }

  public enviarMensaje(event: Mensaje) {
    event.fecha = new Date().getTime();
    // console.log('Envió el mensaje:', event);
    this._firebaseServ.agregarDocumento(this._database, event).then((value) => {
      // console.log('key del nuevo mensaje', value);
    });
  }

  private ordenarPorFecha(a: Mensaje, b: Mensaje): number {
    const fechaA = new Date(a.fecha).getTime();
    const fechaB = new Date(b.fecha).getTime();

    if (fechaA > fechaB) { return 1; }
    if (fechaA < fechaB) { return -1; }
    return 0;
  }
}
