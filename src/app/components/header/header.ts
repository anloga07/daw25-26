import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule], //para llamar a las páginas sin tener que recargar
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  public catalogOpen = false;

  toggleCatalog(event: Event) {
    event.preventDefault();
    this.catalogOpen = !this.catalogOpen;
  }

  closeCatalog() {
    this.catalogOpen = false;
  }
}
