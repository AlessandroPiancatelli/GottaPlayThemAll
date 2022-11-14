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

  getVideogame(id:number): Observable<Videogame | undefined>{
    const videogame = VIDEOGAMES.find(videogame => videogame._id === id);
    return of (videogame)
  }
}
