import { Component, OnInit, Input } from '@angular/core';
import { Videogame } from 'src/app/models/videogame.model';
@Component({
  selector: 'app-videogame-card',
  templateUrl: './videogame-card.component.html',
  styleUrls: ['./videogame-card.component.scss']
})
export class VideogameCardComponent implements OnInit {

  @Input() videogames: Videogame[];

  constructor() { }

  ngOnInit(): void {
  }

}
