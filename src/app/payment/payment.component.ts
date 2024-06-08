import { Component } from '@angular/core';
import {GooglePayButtonModule} from '@google-pay/button-angular';
@Component({
  standalone: true,
  imports: [GooglePayButtonModule],
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  buttonWidth = 240
  
  paymentRequest : google.payments.api.PaymentDataRequest ={

    apiVersion: 2,
    
    apiVersionMinor: 0,
    
    allowedPaymentMethods: [
    
    
    {
    
    type: 'CARD',
    parameters: {
    
    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
    
    allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
    
    },
    tokenizationSpecification:{
    type: "PAYMENT_GATEWAY",
    parameters: {
    gateway: "example",
    gatewayMerchantId: "exampleGatewayMerchantId"
      }
    }
  }
  ],
  merchantInfo: {

    merchantId: "12345678901234567890",
    
    merchantName: "Demo Merchant"
    
    },
    transactionInfo: {

      totalPriceStatus: "FINAL",
      
      totalPriceLabel: "Total",
      
      totalPrice: "100.00",
      
      currencyCode: "USD",
      
      countryCode: "US"
      
}
}
onLoadPaymentData(event:any){
console.log(event,">>Data");
}
}
