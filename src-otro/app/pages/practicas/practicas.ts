import { Component, signal, OnInit  } from '@angular/core';
import { Interpolacion } from './interpolacion/interpolacion';
import { Dado } from './dado/dado';
import { MatButton } from '@angular/material/button';
import { Cronometro } from './cronometro/cronometro';
 
@Component({
  selector: 'app-practicas',
  imports: [Interpolacion,Dado, MatButton, Cronometro],
  templateUrl: './practicas.html',
  styleUrl: './practicas.css',
})
export class Practicas {

  dado1= signal(0);
  dado2= signal(1);
  dado3= signal(2);
  mensaje=signal("");
  isDisabled = signal(false);


   retornarAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
  }

  tirar (){
      this.dado1.update(valor=>this.retornarAleatorio());
      this.dado2.update(valor=>this.retornarAleatorio());
      this.dado3.update(valor=>this.retornarAleatorio());  

 if (this.dado1()==this.dado2() && this.dado1()==this.dado3())
    {  
    this.mensaje.set("Has ganado");
 setTimeout(() => {
  console.log("Retrasado por 5 segundos.");
  this.isDisabled.set(false);  // reactivar botón después de 5 segundos

}, 5000);
   this.isDisabled.set(true);
    }
    else
      this.mensaje.set("SIGUE TIRANDO");



  }
  
 
}




