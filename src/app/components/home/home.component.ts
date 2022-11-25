import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nome:string;
  cognome:string;
  email:string;
  piattaformaPreferita:string;

  constructor( private userservice: UserService ) { }

  ngOnInit(): void {
    this.riceviDatiUtente();
  }

  riceviDatiUtente(){
    this.userservice.datiUtente.subscribe((res:any)=>{
      localStorage.setItem('nome', res.nome);
      localStorage.setItem('cognome', res.cognome);
      localStorage.setItem('email', res.email);
      localStorage.setItem('piattaformaPreferita', res.piattaformaPreferita);
    });

    if(localStorage.getItem('email')){
      this.nome = localStorage.getItem('nome');
      this.cognome = localStorage.getItem('cognome');
      this.email = localStorage.getItem('email');
      this.piattaformaPreferita = localStorage.getItem('piattaformaPreferita');
    }
  }

  closeModal(){
    localStorage.clear();
    this.nome='';
    this.cognome='';
    this.email='';
    this.piattaformaPreferita='';
  }
}
