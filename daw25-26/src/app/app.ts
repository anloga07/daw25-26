import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { About } from './pages/about/about';
import { Productos } from './pages/productos/productos';
import { Contacto } from './pages/contacto/contacto';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Home ,About,Productos,Contacto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('daw25-26'); 
}
