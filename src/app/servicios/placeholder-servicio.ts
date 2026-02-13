import { Injectable } from '@angular/core';
import { placeholder } from '../models/placeholder';

@Injectable({
  providedIn: 'root',
})
export class PlaceholderServicio {

  constructor() { }

  /**
   * Devuelve una promesa con el array de comentarios.
   * Se usa fetch nativo para no depender de RxJS/HttpClient.
   */
  async retornar(): Promise<placeholder[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    return res.json() as Promise<placeholder[]>;
  }
   
}
