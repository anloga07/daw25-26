import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule], //para llamar a las páginas sin tener que recargar
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
