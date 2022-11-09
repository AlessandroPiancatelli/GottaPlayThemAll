import { Injectable } from '@angular/core';
import { Videogame } from '../models/videogame.model';
import { VIDEOGAMES } from '../mock/videogames.mock';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  constructor() { }
  getVideogames(): Observable<Videogame[]>{
    return of (VIDEOGAMES);
  }
}
