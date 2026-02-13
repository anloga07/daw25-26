import { Injectable } from '@angular/core';
import { Componente } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class Productos_Service {
  constructor(){};
  
  retornar(): Componente[] {
    const producto: Componente[] = [{
        id: 1,
        nombre: 'Ratón Gaming Logitech',
        precio: 49.99,
        stock: 15,
        categoria: 'Periféricos',
        imagen: 'https://placehold.co/150',
        valoracion: 4.5,
        enOferta: true,
        descuento: 15,
        nuevo: false
  
      },
      {
        id: 2,
        nombre: 'Teclado Mecánico Corsair',
        precio: 129.99,
        stock: 8,
        categoria: 'Periféricos',
        imagen: 'https://placehold.co/150',
        valoracion: 4.8,
        enOferta: true,
        descuento: 15,
        nuevo: false
  
      },
      {
        id: 3,
        nombre: 'Monitor 27" LG UltraWide',
        precio: 299.99,
        stock: 0,
        categoria: 'Monitores',
        imagen: 'https://placehold.co/150',
        valoracion: 4.6,
        enOferta: true,
        descuento: 15,
        nuevo: false
      },
      {
        id: 4,
        nombre: 'Auriculares HyperX Cloud',
        precio: 79.99,
        stock: 20,
        categoria: 'Audio',
        imagen: 'https://placehold.co/150',
        valoracion: 4.7,
        enOferta: true,
        descuento: 15,
        nuevo: false
      },
      {
        id: 5,
        nombre: 'Webcam Logitech C920',
        precio: 89.99,
        stock: 5,
        categoria: 'Accesorios',
        imagen: 'https://placehold.co/150',
        valoracion: 4.4,
        enOferta: true,
        descuento: 15,
        nuevo: false
      }
    ];
    return producto;
  }
}

  

