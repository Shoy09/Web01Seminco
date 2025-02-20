import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { HomeComponent } from './Components/home/home.component';
import { EstadosComponent } from './Components/estados/estados.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { 
    path: 'Dashboard', 
    component: PrincipalComponent, // El layout principal con el menú
    children: [ 
      { path: 'Home', component: HomeComponent }, 
      { path: 'estados', component: EstadosComponent }, 
    ] 
  },

  { path: '**', redirectTo: '/login' } // Ruta de fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
