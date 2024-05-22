import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', loadComponent: () => import('./about/about.component').then(c => c.AboutComponent) },
    { path: 'not-found', loadComponent: () => import('./not-found/not-found.component').then(c => c.NotFoundComponent) },
    { path: '**', loadComponent: () => import('./not-found/not-found.component').then(c => c.NotFoundComponent) }
];
