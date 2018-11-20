import { Component, OnInit } from '@angular/core';
import {Order} from "../model/order";
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[];
  selectedOrder;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe(data => {
        this.orders = data;
      }
    );
  }

  onSelect(order: Order){
    this.selectedOrder = order;
  }

  delete(order: Order){
    this.orderService.delete(order).subscribe();
  }
}
