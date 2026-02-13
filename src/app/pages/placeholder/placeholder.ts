import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { placeholder } from '../../models/placeholder';
import { PlaceholderServicio} from '../../servicios/placeholder-servicio';

@Component({
  selector: 'app-placeholder',
  imports: [],
  templateUrl: './placeholder.html',
  styleUrl: './placeholder.css',
})
export class PlaceHolder {
  title = "LIBROS EN STOCK";
  // guardamos los datos en un signal en lugar de un array normal
  place: WritableSignal<placeholder[]> = signal<placeholder[]>([]);

  constructor(private miPlaceHolderService: PlaceholderServicio) {
    this.loadData();
  }

  private async loadData() {
    try {
      const datos = await this.miPlaceHolderService.retornar();
      this.place.set(datos);
    } catch (err) {
      console.error('error cargando datos', err);
    }
  }
}

