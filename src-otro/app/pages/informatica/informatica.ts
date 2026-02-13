import { Component } from '@angular/core';
import { Componente } from '../../models/producto';

@Component({
  selector: 'app-informatica',
  imports: [],
  templateUrl: './informatica.html',
  styleUrl: './informatica.css',
})
export class Informatica {
title = 'Sistema de Productos';
  
  producto: Componente[] = [{
      id: 1,
      nombre: 'Ratón Gaming Logitech',
      precio: 49.99,
      stock: 15,
      categoria: 'Periféricos',
      imagen: 'https://via.placeholder.com/150',
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
      imagen: 'https://via.placeholder.com/150',
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
      imagen: 'https://via.placeholder.com/150',
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
      imagen: 'https://via.placeholder.com/150',
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
      imagen: 'https://via.placeholder.com/150',
      valoracion: 4.4,
      enOferta: true,
      descuento: 15,
      nuevo: false
    }
  ];


  mostrarDetalles = false;
  usuarioLogeado = true;
  esAdmin = false;
  
  calcularPrecioFinal(): number {
    if (this.producto[0].enOferta && this.producto[0].descuento) {
      return this.producto[0].precio * (1 - this.producto[0].descuento / 100);
    }
    return this.producto[0].precio;
  }
  
  toggleDetalles(): void {
    this.mostrarDetalles = !this.mostrarDetalles;
  }
   
    productosVacios: Componente[] = [];

}





