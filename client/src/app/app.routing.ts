import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthGuard } from './shard/auth.guard';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';


const appRoutes: Routes = [
    { path: 'bookStore', component: HomeComponent },
    { path: 'bookStore/products', component: ProductsComponent },
    { path: 'bookStore/myCart', component: CartComponent, canActivate: [AuthGuard] },
    { path: 'bookStore/home', component: HomeComponent },
    {
      path: 'bookStore/account', component: AccountComponent, children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
      ]
    },
    { path: 'bookStore/productsDetails', component: ProductsDetailsComponent },
    { path: 'bookStore/productPreview', component: ProductPreviewComponent },
    { path: '**', redirectTo: '/bookStore/home' },
  
  ];
export const routing = RouterModule.forRoot(appRoutes);