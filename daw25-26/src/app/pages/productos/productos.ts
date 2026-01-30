import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
     title = 'Nuestros productos';
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
  }
}
