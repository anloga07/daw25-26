import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-interpolacion',
  imports: [FormsModule],
  templateUrl: './interpolacion.html',
  styleUrl: './interpolacion.css',
})
export class Interpolacion {
// Interpolación
nombre: string = 'Ana';
// Property binding
isDisabled: boolean = false;
imagenUrl: string = 'https://picsum.photos/id/237/200/300';
// Event binding
contador: number = 0;
incrementar() {
  if (this.contador===9)
      this.contador=0;
    else
      this.contador++;
}
decrementar(){
  if (this.contador===0)
      this.contador=9;
    else
      this.contador--;

}
// Two-way binding
mensaje: string = '';
}
