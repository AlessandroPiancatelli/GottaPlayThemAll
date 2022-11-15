import { Component, OnInit, Input } from '@angular/core';
import { Videogame } from 'src/app/models/videogame.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-videogame-card',
  templateUrl: './videogame-card.component.html',
  styleUrls: ['./videogame-card.component.scss']
})
export class VideogameCardComponent implements OnInit {
  culo = this.activatedRoute.snapshot.paramMap.get('platform');
  @Input() videogames: Videogame[];

  constructor(private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.OnGetOrigin();
  }

  OnGetOrigin(){
    console.log(this.culo);
  }
}
