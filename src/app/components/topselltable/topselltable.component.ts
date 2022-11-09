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
     nome: 'DeadSpace',
     piattaforma : 'MultiPiattaforma'
    },
    { id : 2,
      copieVendute:'1.2 million',
      nome: 'DeadSpace 2',
      piattaforma : 'MultiPiattaforma'
     },
     { id : 3,
      copieVendute:"900'000",
      nome: 'DeadSpace 3',
      piattaforma : 'MultiPiattaforma'
     },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
