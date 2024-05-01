import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  datePick(date:string){
    console.log(date)
  }
}
