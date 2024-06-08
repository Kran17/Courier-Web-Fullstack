import { Component } from '@angular/core';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.css']
})
export class AddDeliveryComponent {
  delivery = {
    sender_name: '',
    sender_address: '',
    receiver_name: '',
    receiver_address: '',
    packagename: '',
    package_description: '',
    package_weight: 0,
    package_length: 0,
    package_width: 0,
    package_height: 0,
    service_type: 'standard',
    price: 0
  };
  submitted = false;

  calculatePrice() {
    const packageWeight = this.delivery.package_weight;
    const rates = [
      { maxWeight: 1, price: 500 },
      { maxWeight: 5, price: 750 },
      { maxWeight: 10, price: 1000 }
    ];

    let deliveryCharge = 0;
    for (const rate of rates) {
      if (packageWeight <= rate.maxWeight) {
        deliveryCharge = rate.price;
        break;
      }
    }
    this.delivery.price = deliveryCharge;
  }

  onSubmit() {
    // Here you would typically handle form submission to the server
    console.log('Delivery added:', this.delivery);
    this.submitted = true;

    // Reset form after submission
    this.delivery = {
      sender_name: '',
      sender_address: '',
      receiver_name: '',
      receiver_address: '',
      packagename: '',
      package_description: '',
      package_weight: 0,
      package_length: 0,
      package_width: 0,
      package_height: 0,
      service_type: 'standard',
      price: 0
    };

    // Hide success message after a delay
    setTimeout(() => this.submitted = false, 3000);
  }
}
