export class Mensaje {
    public key: string;
    public emisor: string;
    public mensaje: string;
    public fecha: number;

    constructor(key?: string, emisor?: string, mensaje?: string, fecha?: number) {
        this.key = key;
        this.emisor = emisor;
        this.mensaje = mensaje;
        this.fecha = fecha;
    }
}
