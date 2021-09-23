import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDemoComponent } from './material/material-demo/material-demo.component';
import { HomeComponent } from './home/home.component';

// Rutas de mi aplicacion

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'image-gallery',
    component: MaterialDemoComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
