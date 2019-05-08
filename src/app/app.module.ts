import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTER } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';


// Temporal
import { FormsModule } from '@angular/forms';

// Servicios
//import { SettingsService } from './services/settings/settings.service';

import { ServiceModule } from './services/service.module';


APP_ROUTER

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';
//import { IncrementadorComponent } from './components/incrementador/incrementador.component';
//import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
 //   GraficoDonaComponent
 //   IncrementadorComponent
  //  RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTER,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }