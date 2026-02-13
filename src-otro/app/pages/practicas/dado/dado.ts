import { Component, Input, Signal, WritableSignal, signal } from '@angular/core';
 

@Component({
  selector: 'app-dado',
  imports: [ ],
  templateUrl: './dado.html',
  styleUrl: './dado.css',
})
export class Dado {

 

@Input({ required: true }) valor!: Signal<number>; //para comunicar con el padre en modo lectura





}