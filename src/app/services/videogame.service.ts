import { Injectable } from '@angular/core';
import { Videogame } from '../models/videogame.model';
import { VIDEOGAMES } from '../mock/videogames.mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {
  apiBaseUrl="/api/videogames";
  constructor(private http:HttpClient) { }
  getVideogames(): Observable<Videogame[]>{
    // return of (VIDEOGAMES);
    return this.http.get<Videogame[]>(`${this.apiBaseUrl}/`)
  }

  getVideogame(id:number): Observable<Videogame | undefined>{
    return this.http.get<Videogame>(`${this.apiBaseUrl}/${id}`)
  }

  saveVideogame(body:any): Observable<any>{
    return this.http.post<any>(`/api/videogames/`,body)

  }
}
