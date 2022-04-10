import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
  getDetailId: any;
  detailData: any;
  ngOnInit(): void {
    this.getDetailId = this.param.snapshot.paramMap.get('id');
    // console.log(this.getDetailId);
    if(this.getDetailId) {
      this.detailData = this.service.foodDetails.filter((value)=>{
        return value.id == this.getDetailId;
        // if(value.id=this.getDetailId){
        //   return value;
        // }
      }) 
    }
    console.log(this.detailData);
  }

}
