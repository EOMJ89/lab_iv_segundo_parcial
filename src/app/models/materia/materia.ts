export class Materia {
    /**Dar de alta una materia con los siguientes datos (validar los datos):
     * i. Nombre.
     * ii. Cuatrimestre.
     * iii. Cupos.
     * iv. Profesor a cargo.
     */
    public key: string;
    public nombre: string;
    public cuatrimestre: number;
    public cupos: number;
    public profesorCargo: string; // Key de firebase de profesor

    constructor(key?: string, nombre?: string, cuatrimestre?: number, cupos?: number, profesorCargo?: string) {
        this.key = key;
        this.nombre = nombre;
        this.cuatrimestre = cuatrimestre;
        this.cupos = cupos;
        this.profesorCargo = profesorCargo;
    }
}
