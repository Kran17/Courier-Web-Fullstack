import { Component, OnInit } from '@angular/core';
import { DeliveryService, Delivery } from '../delivery.service';

@Component({
  selector: 'app-view-delivery',
  templateUrl: './view-delivery.component.html',
  styleUrls: ['./view-delivery.component.css']
})
export class ViewDeliveryComponent implements OnInit {
  deliveries: Delivery[] = [];

  constructor(private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.fetchDeliveries();
  }

  fetchDeliveries(): void {
    this.deliveryService.getDeliveries().subscribe(
      (data: Delivery[]) => {
        this.deliveries = data;
      },
      (error) => {
        console.error('Error fetching deliveries:', error);
      }
    );
  }
}
