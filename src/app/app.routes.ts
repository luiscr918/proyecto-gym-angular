import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { NosotrosPageComponent } from './pages/nosotros-page/nosotros-page.component';
import { SuscripcionPageComponent } from './pages/suscripcion-page/suscripcion-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'productos', component: ProductsPageComponent },
  { path: 'nosotros', component: NosotrosPageComponent },
  { path: 'suscripcion', component: SuscripcionPageComponent },
];
