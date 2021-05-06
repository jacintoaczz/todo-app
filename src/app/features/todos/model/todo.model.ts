import { v4 as uuidv4 } from 'uuid';

export class Todo {
  public id: string;
  public texto: string;
  public completado: boolean;

  constructor(texto: string) {
    // Primer caracter siempre en mayuscula.
    this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
    this.completado = false;

    this.id = uuidv4();
  }
}
