import { Routes } from '@angular/router';
import {About} from './pages/about/about';
import { Productos } from './pages/productos/productos';
import { Contacto } from './pages/contacto/contacto';
import { Home } from './pages/home/home';
import { Practicas } from './pages/practicas/practicas';
import { Informatica } from './pages/informatica/informatica';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'amaterial', component: About},
    {path: 'moviles', component: Productos},
    {path: 'contacto', component: Contacto},
    {path: 'practicas', component: Practicas },
    {path: 'informatica', component:Informatica },

    {path: '**', redirectTo: ''} //redireccionamos a la raiz si se especivica
                                   //una ruta erronea

];
