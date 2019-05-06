import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';


//import { RegisterComponent } from './register.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';




const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: LoginComponent },
    { path: '**', component: NopagefoundComponent},
];


export const APP_ROUTER = RouterModule.forRoot(appRoutes, { useHash: true });