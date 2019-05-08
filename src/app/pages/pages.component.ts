
import { Component, OnInit } from '@angular/core';

declare function init_plugins();  // Funcion creada por mi en custom.js
                                  // Para llamar cualquier script fuera de angular en un archivo de JavaScript

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();  // Funcion puesta por nosotros en custom.js
  }

}
