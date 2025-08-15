import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NosotrosPageComponent } from './pages/nosotros-page/nosotros-page.component';
import { SuscripcionPageComponent } from './pages/suscripcion-page/suscripcion-page.component';
import { LoginComponent } from './components/usuarios-components/login/login.component';
import { RegistroUsuarios } from './components/usuarios-components/registro-usuarios/registro-usuarios';
import { loginCanMatchGuard } from './guards/login-can-match.guard';
import { registroUsuarioGuard } from './guards/registro-usuario.guard';
import { ServiciosPagesComponent } from './pages/servicios-pages/servicios-pages.component';
import { ServiciosListaComponent } from './pages/servicios-lista-page/servicios-lista.component';
import { ServiciosAdminPageComponent } from './pages/servicios-admin-page/servicios-admin-page.component';
import { ServiciosActualizarComponent } from './components/servicios-component/servicios-actualizar/servicios-actualizar.component';

import { ClientesListaComponent } from './pages/clientes-lista/clientes-lista.component';
import { ClientesActualizarComponent } from './pages/clientes-actualizar/clientes-actualizar.component';
import { PanelClienteComponentComponent } from './pages/panel-cliente-component/panel-cliente-component.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'nosotros', component: NosotrosPageComponent },
  { path: 'suscripcion/:id', component: SuscripcionPageComponent },

  { path: 'login', component: LoginComponent, canMatch: [loginCanMatchGuard] },
  {
    path: 'registrar-usuario',
    component: RegistroUsuarios,
    canDeactivate: [registroUsuarioGuard],
  },

  { path: 'login', component: LoginComponent, canMatch: [loginCanMatchGuard] },
  {
    path: 'registrar-usuario',
    component: RegistroUsuarios,
    canDeactivate: [registroUsuarioGuard],
  },
  { path: 'servicios', component: ServiciosPagesComponent },
  { path: 'servicios-actualizar/:id', component: ServiciosActualizarComponent },
  { path: 'servicios-registro', component: ServiciosAdminPageComponent },
  { path: 'servicios-lista', component: ServiciosListaComponent },

  { path: 'lista-clientes', component: ClientesListaComponent },
  { path: 'actualizar-cliente/:id', component: ClientesActualizarComponent },
  { path: 'panel-cliente/:id', component: PanelClienteComponentComponent },
  { path: 'contactos', component: ContactUsPageComponent },
];
