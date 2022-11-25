import { VideogameService } from './../../services/videogame.service';
import { Component, OnInit, Input } from '@angular/core';
import { Videogame } from 'src/app/models/videogame.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-videogame-card',
  templateUrl: './videogame-card.component.html',
  styleUrls: ['./videogame-card.component.scss']
})
export class VideogameCardComponent implements OnInit {
  videogames : Videogame[] ;
  page = 1;
  videogamesPerPagina = 4;
  pagingNumber = 0;
  @Input() origine:string;

  constructor(private activatedRoute: ActivatedRoute, private videogameService: VideogameService) { }

  ngOnInit(): void {
    if(this.origine=='all')
    {
      this.videogameService.getVideogames().subscribe({
        next: (res) => {
          this.videogames = res;
          },
        error: (err) => {
          console.error(err);
          }
        }),
      console.log(this.origine)
    } else {
    this.videogameService.getVideogames().subscribe({
      next: (res) => {
        res = res.filter((elem)=> elem.platform===this.origine);
        this.videogames = res;
        },
      error: (err) => {
        console.error(err);
        }
      }),
    console.log(this.origine)
    }
    this.pagine();
  }

  OnGetOrigin(){

  }

  pagine(){
    let tot;
    if (this.videogames){
      tot = this.videogames.length
    }

    this.page = 1;
    this.pagingNumber = 0;
    this.pagingNumber = Math.ceil(this.videogames?.length/ this.videogamesPerPagina / 4)
  }
}
