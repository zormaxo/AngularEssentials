import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  characters = [];
  loadedSide = "all";
  subscription;

  // @Input() characters;
  // @Output() sideAssigned = new EventEmitter<{ name: string, side: string }>();

  constructor(private activatedRoute: ActivatedRoute, private swService: StarWarsService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.characters = this.swService.getCharacters(params.side);
        this.loadedSide = params.side;
      }
    );
    this.subscription = this.swService.charactersChanged.subscribe(
      () => this.characters = this.swService.getCharacters(this.loadedSide)
    )
  }

  // onSideAssigned(charInfo) {
  //   this.sideAssigned.emit(charInfo);
  // }
}
