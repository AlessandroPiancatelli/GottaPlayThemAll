import { VideogameService } from '../../services/videogame.service';
import { Component, OnInit } from '@angular/core';
import { Videogame } from 'src/app/models/videogame.model';
@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.scss']
})
export class VideogamesComponent implements OnInit {
  videogiochi: Videogame[] = [];

  constructor(private videogameService: VideogameService) { }

  ngOnInit(): void {
    this.videogameService.getVideogames().subscribe({
      next: (res) => {
        this.videogiochi = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
