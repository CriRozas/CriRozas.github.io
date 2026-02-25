import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/hero/hero').then(m => m.Hero)},
    { path: 'experiencia', loadComponent: () => import('./components/autoridad/autoridad').then(m => m.Autoridad) },
    { path: 'galeria', loadComponent: () => import('./components/experiencia/experiencia').then(m => m.Experiencia) },
    { path: 'fisioterapia', loadComponent: () => import('./components/servicios-fisioterapia/servicios-fisioterapia').then(m => m.ServiciosFisioterapia) },
    { path: 'psicologia', loadComponent: () => import('./components/servicios-psicologia/servicios-psicologia').then(m => m.ServiciosPsicologia) },
    { path: 'precios', loadComponent: () => import('./components/precios/precios').then(m => m.Precios) },
    { path: 'diferenciales', loadComponent: () => import('./components/diferenciales/diferenciales').then(m => m.Diferenciales) },
    { path: 'contacto', loadComponent: () => import('./components/contacto/contacto').then(m => m.Contacto) },
    { path: 'entrena', loadComponent: () => import('./components/entrena/entrena').then(m => m.Entrena) },
    { path: '**', redirectTo: '' }
];