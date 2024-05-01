import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PieChartComponent } from './components/dashboard/pie-chart/pie-chart.component';
import { BubbleChartComponent } from './components/dashboard/bubble-chart/bubble-chart.component';
import { BarChartComponent } from './components/dashboard/bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PieChartComponent,
    BubbleChartComponent,
    BarChartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
