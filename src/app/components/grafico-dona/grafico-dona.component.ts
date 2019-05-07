import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  progreso1: number = 20;  // Se puede poner sin el 'number' , se hizo un cambio en el 'tslint.json' para que no aparezca ese 'error'
  progreso2: number = 30;

  @Input() labels: string[];

 

  constructor() { 
    console.log('DonasLabel vale',this.labels);
  }

  ngOnInit() {
  }

  

}
