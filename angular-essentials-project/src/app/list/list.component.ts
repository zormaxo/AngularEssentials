import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters = [];

  // @Input() characters;
  // @Output() sideAssigned = new EventEmitter<{ name: string, side: string }>();

  constructor(private activatedRoute: ActivatedRoute, private swService: StarWarsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.characters = this.swService.getCharacters(params.side)
      }
    );
  }

  // onSideAssigned(charInfo) {
  //   this.sideAssigned.emit(charInfo);
  // }
}
