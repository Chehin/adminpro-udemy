import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 20;  // Se puede poner sin el 'number' , se hizo un cambio en el 'tslint.json' para que no aparezca ese 'error'
  progreso2: number = 30;
  
  constructor() { }

  ngOnInit() {
  }

 /* actualizar(event: number){
    console.log('Evento: ', event);
    this.progreso1 = event;
  }*/
}
