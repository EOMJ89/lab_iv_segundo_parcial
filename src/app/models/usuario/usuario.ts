export class Usuario {
    public key: string;
    public mail: string;
    public clave: string;
    public tipo: string;

    constructor(key?: string, mail?: string, clave?: string, tipo?: string) {
        this.key = key;
        this.mail = mail;
        this.clave = clave;
        this.tipo = tipo;
    }
}
