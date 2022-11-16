import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topselltable',
  templateUrl: './topselltable.component.html',
  styleUrls: ['./topselltable.component.scss']
})
export class TopselltableComponent implements OnInit {

  games = [
   { id : 1,
     copieVendute:'1.4 million',
     nome: 'Call of Duty: Modern Warfare 2 (2022)',
     piattaforma : 'MultiPiattaforma',
     image:'https://i.imgur.com/EEYp2aw.jpg'
    },
    { id : 2,
      copieVendute:'1.2 million',
      nome: 'Gotham Knights',
      piattaforma : 'MultiPiattaforma',
      image:'https://i.imgur.com/YE3jsMZ.jpg'
     },
     { id : 3,
      copieVendute:"900'000",
      nome: 'FIFA 23',
      piattaforma : 'MultiPiattaforma',
      image:'https://i.imgur.com/ACsO7Mq.jpg'
     },
     { id : 4,
      copieVendute:"600'000",
      nome: 'Madden NFL 23',
      piattaforma : 'MultiPiattaforma',
      image:'https://i.imgur.com/NjwCIGB.jpg'
     },
     { id : 5,
      copieVendute:"400'000",
      nome: 'NHL 23',
      piattaforma : 'MultiPiattaforma',
      image:'https://i.imgur.com/uTEHEih.jpg'
     },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
