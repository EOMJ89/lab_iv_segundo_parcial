import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { diccionario } from 'src/app/models/diccionario';
import { Materia } from 'src/app/models/materia/materia';
import { Usuario } from 'src/app/models/usuario/usuario';

@Component({
  selector: 'app-modificar-materia-container',
  templateUrl: './modificar-materia-container.component.html',
  styleUrls: ['./modificar-materia-container.component.css']
})
export class ModificarMateriaContainerComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _mensaje = '';
  public profesores: Array<Usuario>;
  public materia: Materia;
  // tslint:disable-next-line: variable-name
  constructor(private _activatedRoute: ActivatedRoute, private _firebaseServ: FirebaseService, private _router: Router) { }

  async ngOnInit() {
    const key: string = this._activatedRoute.snapshot.paramMap.get('id');
    // console.log(key, this._activatedRoute.snapshot.paramMap);

    const materia = (await this._firebaseServ.obtenerDocumentoUID(diccionario.db.materias, key)).data() as Materia;
    if (materia !== undefined) {
      this.materia = materia;
      this.materia.key = key;

      this._firebaseServ.obtenerDocumentosFiltro(diccionario.db.usuarios, 'tipo', diccionario.tipos.profesor).then((documentos) => {
        // console.log(documentos);
        this.profesores = documentos as Array<Usuario>;
      });
    } else {
      this._router.navigate(['home-admin']);
    }
  }

  public modificar(event: Materia) {
    // console.log('Event en modificar', event);
    const materia = {
      nombre: event.nombre,
      cuatrimestre: event.cuatrimestre,
      cupos: event.cupos,
      profesorCargo: event.profesorCargo
    } as Materia;

    this._firebaseServ.actualizarDocumento(diccionario.db.materias, event.key, materia)
      .then((result) => {
        this._router.navigate(['home-admin']);
      })
      .catch((err) => {
        this.mostrarMensaje('Error al agregar a la base de datos.');
        console.log('Error en Container Component', err);
      });
  }

  private mostrarMensaje(mensaje: string) {
    this._mensaje = mensaje;
    setTimeout(() => { this._mensaje = ''; }, 5000);
  }
}
