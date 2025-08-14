import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { NosotrosPageComponent } from './pages/nosotros-page/nosotros-page.component';
import { SuscripcionPageComponent } from './pages/suscripcion-page/suscripcion-page.component';

import { LoginComponent } from './components/usuarios-components/login/login.component';
import { RegistroUsuarios } from './components/usuarios-components/registro-usuarios/registro-usuarios';
import { loginCanMatchGuard } from './guards/login-can-match.guard';
import { registroUsuarioGuard } from './guards/registro-usuario.guard';
import { authGuard, adminGuard, clienteGuard } from './guards/auth.guard';
import { ServiciosPagesComponent } from './pages/servicios-pages/servicios-pages.component';
import { ServiciosActualizarComponent } from './components/servicios-component/servicios-actualizar/servicios-actualizar.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contactanos', component: ContactUsPageComponent },
  { path: 'nosotros', component: NosotrosPageComponent },
  { path: 'suscripcion', component: SuscripcionPageComponent },
  { path: 'login', component: LoginComponent, canMatch: [loginCanMatchGuard] },
  {
    path: 'registrar-usuario',
    component: RegistroUsuarios,
    canDeactivate: [registroUsuarioGuard],
  },
  {path: 'servicios', component:ServiciosPagesComponent},
  {path:'servicios-actualizar/:id', component:ServiciosActualizarComponent}
];
