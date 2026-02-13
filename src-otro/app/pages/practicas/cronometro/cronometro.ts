import { Component, Input, Signal, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  imports: [],
  templateUrl: './cronometro.html',
  styleUrl: './cronometro.css',
})
export class Cronometro {

segundo= signal(0);
multiplo10= signal(0);
@Input({ required: false }) inicio!: WritableSignal<number>; //el padre mandará este valor

ngOnInit() {
   
    setInterval(() => {
      this.segundo.update(v=>v +1);
      if (this.segundo() % 10 == 0)  //si es multiplo de 10 actualizo la señal multiplo10
        this.inicio.update(v=>this.segundo());
    }, 1000);
  }


}
