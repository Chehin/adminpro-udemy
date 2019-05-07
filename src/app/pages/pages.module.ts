import { NgModule } from "@angular/core";

import { PagesComponent } from './pages.component';

import { FormsModule } from '@angular/forms';

// ng2-charts

import { ChartsModule } from 'ng2-charts';

// grafico dona

import { GraficoDonaComponent  } from '../components/grafico-dona/grafico-dona.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.route';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
//import { IncrementadorComponent}



@NgModule({
    declarations: [
        PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent
    ],
    exports: [    // Para ser accesados desde fuera de este modulo
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    GraficoDonaComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
        //GraficoDonaComponent
    ]
})

export class PagesModule {
}