import { Component } from '@angular/core';
import {random}  from "lodash";

// declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // -------------------UserComponent-----------------------
  rootName = 'Ömer';

  onNameChanged(newName) {
    this.rootName = newName;
  }

  // -------------------CartComponent-----------------------
  rootItems = ['Apples', 'Bananas', 'Cherries'];

  onItemWasAdded(newItem) {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }

  // -------------------CartComponent-----------------------
  number = 0;

  onIncrease() {
    this.number *= this.number;
    this.number = random(1, 10);
  }
}
