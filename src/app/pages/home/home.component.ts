import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  foodDatas: any;
  homeSteps: any;
  ngOnInit(): void {
    this.foodDatas = this.service.foodDetails;
    this.homeSteps = this.service.steps;
  }

}
