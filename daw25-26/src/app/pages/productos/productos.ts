import { Component } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
    /*  title = 'Nuestros productos';    //Primera parte del ejercicio: Mostrar un solo producto. Sin interfaces
     // Propiedades de producto
     nombreProducto = 'Portátil Gaming MSI';
     precio = 1299.99;
     stock = 15;
     disponible = true;
     descripcion = 'Portátil de alto rendimiento con procesador Intel i7 y tarjeta gráfica RTX 4060';
     // Método para calcular precio con IVA
     calcularPrecioConIVA(): number {
        return this.precio * 1.21;
     }
     // Método para obtener estado de stock
     obtenerEstadoStock(): string {
        if (this.stock > 10) {
            return 'Stock alto';
     } else if (this.stock > 0) {
         return 'Últimas unidades';
     } else {
        return 'Agotado';
     }
  } */
     
  title = 'Catálogo de Productos'; //interpolacion con array de objetos
  
  producto: Producto[] =[{
     id: 1,
    nombre: 'iPhone 15 Pro',
    precio: 1199,
    categoria: 'Smartphones',
    marca: 'Apple',
    caracteristicas: [
      { nombre: 'Pantalla', valor: '6.1 pulgadas OLED' },
      { nombre: 'Procesador', valor: 'A17 Pro' },
      { nombre: 'Cámara', valor: 'Triple 48MP + 12MP + 12MP' },
      { nombre: 'Almacenamiento', valor: '256GB' }
    ],
    fechaLanzamiento: new Date('2023-09-22')
  },
  {
    id: 1,
    nombre: 'iPhone 13 Pro',
    precio: 800,
    categoria: 'Smartphones',
    marca: 'Apple',
    caracteristicas: [
      { nombre: 'Pantalla', valor: '6.1 pulgadas OLED' },
      { nombre: 'Procesador', valor: 'A17 Pro' },
      { nombre: 'Cámara', valor: 'Triple 48MP + 12MP + 12MP' },
      { nombre: 'Almacenamiento', valor: '256GB' }
    ],
    fechaLanzamiento: new Date('2023-09-22')
  },{
    id: 1,
    nombre: 'iPhone 10',
    precio: 500,
    categoria: 'Smartphones',
    marca: 'Apple',
    caracteristicas: [
      { nombre: 'Pantalla', valor: '6.1 pulgadas OLED' },
      { nombre: 'Procesador', valor: 'A17 Pro' },
      { nombre: 'Cámara', valor: 'Triple 48MP + 12MP + 12MP' },
      { nombre: 'Almacenamiento', valor: '256GB' }
    ],
    fechaLanzamiento: new Date('2023-09-22')
  },{
    id: 1,
    nombre: 'iPhone 1',
    precio: 50,
    categoria: 'Smartphones',
    marca: 'Apple',
    caracteristicas: [
      { nombre: 'Pantalla', valor: '6.1 pulgadas OLED' },
      { nombre: 'Procesador', valor: 'A17 Pro' },
      { nombre: 'Cámara', valor: 'Triple 48MP + 12MP + 12MP' },
      { nombre: 'Almacenamiento', valor: '256GB' }
    ],
    fechaLanzamiento: new Date('2023-09-22')
  }

  ]
  empresa = {
    nombre: 'TechStore España',
    cif: 'B12345678',
    telefono: '+34 900 123 456',
    email: 'info@techstore.es'
  };
  
  obtenerAnosEnMercado(): number {
    const hoy = new Date();
    const años = hoy.getFullYear() - this.producto[0].fechaLanzamiento.getFullYear();
    return años;
  }
  
  formatearFecha(fecha: Date): string {
    return fecha.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

}
