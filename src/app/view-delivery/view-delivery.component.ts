import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-delivery',
  templateUrl: './view-delivery.component.html',
  styleUrls: ['./view-delivery.component.css']
})
export class ViewDeliveryComponent implements OnInit {
  deliveries = [
    { name: 'Package 1', date: '2024-06-01' },
    { name: 'Package 2', date: '2024-06-02' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
