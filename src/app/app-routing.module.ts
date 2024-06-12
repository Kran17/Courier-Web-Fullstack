import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddDeliveryComponent } from './add-delivery/add-delivery.component';
import { ViewDeliveryComponent } from './view-delivery/view-delivery.component';
import {PaymentComponent} from './payment/payment.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  //{path :'home', component: HomeComponent},
  { path: 'add-delivery', component: AddDeliveryComponent },
  { path: 'view-delivery', component: ViewDeliveryComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
