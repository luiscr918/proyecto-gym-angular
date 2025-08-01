import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductDatailsComponent } from './components/product-components/product-datails/product-datails.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { RegistroProductoComponent } from './components/product-components/registro-producto/registro-producto.component';
import { ProductActualizarComponent } from './components/product-components/product-actualizar/product-actualizar.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'productos', component: ProductsPageComponent },

  { path: 'productos/:id', component: ProductDatailsComponent },
  { path: 'contactanos', component: ContactUsPageComponent },
  { path: 'agregar-producto', component: RegistroProductoComponent },

  { path: 'products/:id', component: ProductActualizarComponent },
];
