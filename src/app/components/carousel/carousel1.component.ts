import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel1',
  templateUrl: './carousel1.component.html',
  styleUrls: ['./carousel1.component.scss']
})
export class Carousel1Component implements OnInit {
  images = [
    {id:1,
     label:'Xbox/Gamepass'},
    {id:2,
    label:'PlayStation'},
    {id:3,
    label:'PC Gaming'},
    {id:4,
    label: 'Switch'},
  ];

  percorso='../assets/images/carousel-';
  constructor() { }

  ngOnInit(): void {
  }

}
