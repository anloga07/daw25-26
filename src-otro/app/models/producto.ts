interface Caracteristica {
  nombre: string;
  valor: string;
}

export interface Movil {
    id: number;
  nombre: string;
  precio: number;
  categoria: string;
  marca: string;
  caracteristicas: Caracteristica[];
  fechaLanzamiento: Date;

}

export interface Componente {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  categoria: string;
  imagen: string;
  valoracion: number;
  enOferta: boolean;
  descuento?: number;
  nuevo: boolean;
}
