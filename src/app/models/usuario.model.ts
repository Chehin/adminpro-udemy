
export class Usuario {    // Clase para manejar los datos de usuario

    constructor(    // Importa el orden

    public nombre: string,
    public email: string,
    public password: string,
    public img?: string,    // El '?' es para decir que es opcional
    public role?: string,
    public google?: boolean,
    public _id?: string
) {}

}
