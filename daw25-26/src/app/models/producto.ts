interface Caracteristica {
  nombre: string;
  valor: string;
}

export interface Producto {
    id: number;
  nombre: string;
  precio: number;
  categoria: string;
  marca: string;
  caracteristicas: Caracteristica[];
  fechaLanzamiento: Date;

}

