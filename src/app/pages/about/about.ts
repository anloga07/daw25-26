import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';



export interface Alumno {
nombre: string;
nota: number;
}

const ELEMENT_DATA: Alumno[] = [
{ nombre: 'Ana', nota: 8.5 },
{ nombre: 'Luis', nota: 7.2 },
{ nombre: 'Marta', nota: 9.1 }
];

@Component({
  selector: 'app-about',
  standalone:true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,

    
],
  templateUrl: './about.html',
  styleUrl: './about.css',
  
})
export class About {


  
  displayedColumns: string[] = ['nombre', 'nota'];
dataSource = ELEMENT_DATA;

}


