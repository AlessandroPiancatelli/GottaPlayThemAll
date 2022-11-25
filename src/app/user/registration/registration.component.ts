
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './customValidator';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cognome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    sceltaMultipla: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/),Validators.required]),
    ripetiPassword: new FormControl('', [Validators.required]),
    accetto: new FormControl('',[Validators.requiredTrue])
  },
  [CustomValidators.MatchValidator('password','ripetiPassword')]
  )

  get convalidaPassword(){
    return(this.form.getError('mismatch') && this.form.get('ripetiPassword').touched)
  }

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  // onSubmit(){
  //   console.log(this.form);
  // }

  onSubmit(){
    console.log(this.form.value);
    const utente = {nome: this.form.value.name ,
                    email: this.form.value.email ,
                    cognome:this.form.value.cognome ,
                    piattaformaPreferita:this.form.value.sceltaMultipla
                   };
    this.userService.datiUtente.next(utente);
    this.userService.nuovoUtente(this.form.value).subscribe({
      next:(res) => {
        console.log(res)
      },
      error:(err) => {
        console.log(err)
      }
    });
    this.router.navigate(["home"]);
  }


}
