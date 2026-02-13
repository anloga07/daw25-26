import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-about',
  imports: [
MatButtonModule,
MatCardModule,
MatInputModule,
MatFormFieldModule,
MatTableModule


  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
