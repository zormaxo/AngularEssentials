import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() items;
  @Output() itemAdded = new EventEmitter<string>();
  newItem = '';

  constructor() { }

  ngOnInit() {
  }

  omer() {
    return false;
  }

  onAddItem() {
    this.itemAdded.emit(this.newItem);
  }

  // onAddItem() {
  //   this.items.push(this.newItem);
  //   console.log(this.items);
  // }

}
