import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {  // Debe corresponder con la interface
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'  // Nombre del tema
  };

  constructor(@Inject(DOCUMENT) private _document) { 
    this.cargarAjustes(); // Para que cargue esta funcion cada vez que actualizo
  }

  guardarAjustes() {
    //console.log('Guardado en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));  // El localStorage solo acepta string, ahi que pasarla con la funcion JSON.stringify
  }

  cargarAjustes(){  // Proceso inverso de guardarAjustes

    if(localStorage.getItem('ajustes')){  // Es posible que los ajustes no existan
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));  // Con JSON.parse paso de un 'string(Jason)' a el 'objeto' de JavaScript
    
      this.aplicarTema( this.ajustes.tema );
    
    }else{
      //console.log('Usando valores por defecto');
      this.aplicarTema( this.ajustes.tema );
    }
  }

  aplicarTema(tema: string){
  
    // El codigo de abajo fue extraido de accout-settings


    let url = `assets/css/colors/${ tema }.css`;
    
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;  // Este codigo es para grabar
    this.ajustes.temaUrl = url;

    this.guardarAjustes();  // Para grabar los datos

  }

}


interface Ajustes {  // para saber que tema esta seleccionado
  temaUrl: string;
  tema: string;
}