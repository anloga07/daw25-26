import { Routes } from '@angular/router';
import {About} from './pages/about/about';
import { Productos } from './pages/productos/productos';
import { Contacto } from './pages/contacto/contacto';
import { Home } from './pages/home/home';
import { Practicas } from './pages/practicas/practicas';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'nosotros', component: About},
    {path: 'productos', component: Productos},
    {path: 'contacto', component: Contacto},
    {path: 'practicas', component: Practicas },
    {path: '**', redirectTo: ''} //redireccionamos a la raiz si se especivica
                                   //una ruta erronea

];
