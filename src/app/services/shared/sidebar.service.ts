import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [ // Arreglo de objetos
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',  // Viene del html
      submenu: [  // Ver pages.route.ts , en children de pagesRoutes
        { titulo: 'Dashboard', url: '/dashboard'},
        { titulo: 'ProgressBar', url: '/progress'},
        { titulo: 'Graficas', url: '/graficas1'}
      ]
    }
  ];

  constructor() { }
}
