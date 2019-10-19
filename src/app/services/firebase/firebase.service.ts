import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // tslint:disable-next-line: variable-name
  constructor(private _db: AngularFirestore) { }

  public agregarDocumento(database: string, documento: any) {
    return this._db.collection(database).add(documento)
      .then((result: DocumentReference) => {
        return result.id;
      });
  }

  public obtenerDocumento(database: string, campoComparacion: string, valorComparacion: string) {
    return this._db.collection(database).ref.where(campoComparacion, '==', valorComparacion).get().then((documento) => {
      if (documento.docs.length > 0) {
        const auxReturn = documento.docs[0].data();
        auxReturn.key = documento.docs[0].id;
        return auxReturn;
      } else {
        return null;
      }
    }).catch(err => {
      console.log('Error en Servicio', err);
      return null;
    });
  }

  public obtenerDocumentosFiltro(database: string, campoComparacion: string, valorComparacion: string) {
    return this._db.collection(database).ref.where(campoComparacion, '==', valorComparacion).get().then((documento) => {
      const auxReturn: Array<any> = new Array<any>();
      for (const doc of documento.docs) {
        const auxDoc = doc.data();
        auxDoc.key = doc.id;
        auxReturn.push(auxDoc);
      }

      return auxReturn;
    });
  }

  public obtenerDocumentosTodos(database: string) {
    return this._db.collection(database).snapshotChanges();
  }

  public obtenerDocumentoUID(database: string, iud: string) {
    return this._db.collection(database).doc(iud).get().toPromise();
  }

  public actualizarDocumento(database: string, key: string, datos: any) {
    return this._db.collection(database).doc(key).ref.update(datos)
      .then(() => {
        // console.log('Documento actualizado');
      })
      .catch(err => {
        console.log('Error en Servicio', err);
      });
  }
}
