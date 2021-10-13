import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StarWarsService } from '../star-wars.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;
  // @Output() sideAssigned = new EventEmitter<{ name: string, side: string }>();
  swService: StarWarsService;

  constructor(swService : StarWarsService) { 
    this.swService = swService;
  }

  ngOnInit(): void {
  }

  onAssign(side) {
    // this.character.side = side;
    // this.sideAssigned.emit({ name: this.character.name, side: side });
    // const swService = new StarWarsService();
    this.swService.onSideChosen({ name: this.character.name, side: side })
  }
 
}
