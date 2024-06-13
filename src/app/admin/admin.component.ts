import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../delivery.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  deliveries: any[] = [];
  selectedDelivery: any;

  constructor(private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.loadDeliveries();
  }

  loadDeliveries() {
    this.deliveryService.getDeliveries().subscribe(data => {
      this.deliveries = data;
    });
  }

  deleteDelivery(id: string) {
    this.deliveryService.deleteDelivery(id).subscribe(() => {
      this.loadDeliveries();
    });
  }

  editDelivery(delivery: any) {
    this.selectedDelivery = { ...delivery };
  }

  updateDelivery() {
    if (this.selectedDelivery && this.selectedDelivery._id) {
      this.deliveryService.updateDelivery(this.selectedDelivery._id, this.selectedDelivery).subscribe(() => {
        this.loadDeliveries();
        this.selectedDelivery = null;
      });
    }
  }
}
