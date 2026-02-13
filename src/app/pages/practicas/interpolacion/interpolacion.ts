import { Component, signal } from '@angular/core';
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
isDisabled: boolean = true;
imagenUrl: string = 'https://picsum.photos/id/237/200/300';
// Event binding
contador =signal(0);
incrementar() {
  if (this.contador()===9)
      this.contador.update(valor=>0);
    else
      this.contador.update(valor=>valor + 1);;
}
decrementar(){
  if (this.contador()===0)
      this.contador.update(valor=>9);
    else
      this.contador.update(valor=>valor - 1);;

}
// Two-way binding
mensaje: string = '';
 
}
