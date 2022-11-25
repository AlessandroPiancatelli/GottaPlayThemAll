import { Router } from '@angular/router';
import { VideogameService } from './../../services/videogame.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-aggiungi-videogame',
  templateUrl: './aggiungi-videogame.component.html',
  styleUrls: ['./aggiungi-videogame.component.scss']
})
export class AggiungiVideogameComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    image1: new FormControl('', [Validators.required]),
    image2: new FormControl('', [Validators.required]),
    difficulty: new FormControl('', [Validators.required]),
    published: new FormControl('')
  })
  constructor(private videogameService: VideogameService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.videogameService.saveVideogame(this.form.value).subscribe()
  }
}
