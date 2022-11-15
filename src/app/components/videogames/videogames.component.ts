import { VideogameService } from '../../services/videogame.service';
import { Component, OnInit } from '@angular/core';
import { Videogame } from 'src/app/models/videogame.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.scss']
})
export class VideogamesComponent implements OnInit {
  videogiochi: Videogame[] = [];
  culo:string;
  constructor(private videogameService: VideogameService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.videogameService.getVideogames().subscribe({
      next: (res) => {
        this.videogiochi = res;
      },
      error: (err) => {
        console.error(err);
      }
    }),
    this.activatedRoute.params.subscribe((urlParams) => {
      this.culo = urlParams['platform'];
    })

  }

}
