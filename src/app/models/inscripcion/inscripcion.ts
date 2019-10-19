export class Inscripcion {
    public key: string;
    public materia: string;
    public alumno: string;

    constructor(key?: string, materia?: string, alumno?: string) {
        this.key = key;
        this.materia = materia;
        this.alumno = alumno;
    }
}
