import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Videogame } from 'src/app/models/videogame.model';
import { VideogameService } from 'src/app/services/videogame.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  videogioco:Videogame;
  constructor(
    private videogameService:VideogameService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
 ) { }

  ngOnInit(): void {
    this.OnGetVideogame();
  }

  OnGetVideogame(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));
    this.videogameService.getVideogame(id).subscribe({
      next: (res) => {
        this.videogioco = res;
        //console.log(this.videogioco)
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
