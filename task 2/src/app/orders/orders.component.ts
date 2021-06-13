import { Component, OnInit } from '@angular/core';
import { Order } from './order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders = [
    new Order('Order 1', 'Category 1', 156),
    new Order('Order 2', 'Category 2', 442),
    new Order('Order 3', 'Category 3', 514),
    new Order('Order 4', 'Category 4', 877),
    new Order('Order 5', 'Category 5', 215),
    new Order('Order 6', 'Category 6', 323),
    new Order('Order 7', 'Category 7', 852),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
