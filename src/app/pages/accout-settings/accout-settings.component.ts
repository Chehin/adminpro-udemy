import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';
//import { templateRefExtractor } from '@angular/core/src/render3';
//import { link } from 'fs';


@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document ,
                public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string ,link: any) {
    console.log(link);

    this.aplicarCheck(link);  // De aqui le paso 'link' por que es por donde primero entra

    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link: any){
    
    // Arreglo de selectores
    let selectores: any = document.getElementsByClassName('selector');  // Para obtener 'selector' en el .html
        
    // Ciclo para barrer los selectores
    for (let ref of selectores ){
      ref.classList.remove('working');  // Remueve una clase que coincida con 'working' (esto es en vanilla JavaScript o Javascript puro)
    }

    link.classList.add('working');  // Agregamos la clase 'working'

  }

  colocarCheck(){
    let selectores: any = document.getElementsByClassName('selector');  // Para obtener 'selector' en el .html

    let tema = this._ajustes.ajustes.tema;

    for (let ref of selectores ){
      if( ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }

  }

}
