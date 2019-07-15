import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
//import { PagesComponent } from './pages.component';
//import { breadcrumbsComponent } from './dashboard/dashboard.component';
//import { Graficas1Component } from './graficas1/graficas1.component';
//import { ProgressComponent } from './progress/progress.component';
@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ]
})
export class SharedModule {
}
