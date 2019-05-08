import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Creo el contructor para que se cargue el tema cada vez que accedo o actualizo la pagina
  constructor (public _ajustes: SettingsService ){  // Injeccion del servicio para que se dispare el constructor de settings.service.ts

  }
}
