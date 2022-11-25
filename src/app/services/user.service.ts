import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // datiUtente = new Subject();
  datiUtente = new ReplaySubject();
  constructor(private http:HttpClient) { }

  nuovoUtente(dati:any): Observable<any>{
    return this.http.post("api/users/signup", dati)
  }

  getUser(email: string) : Observable <any> {
    const user = {
      email : email
    }
    return this.http.post<any>(`api/users/user`, user)
  }
}
