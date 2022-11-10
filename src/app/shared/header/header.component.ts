import { Component, OnInit } from '@angular/core';
import { faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons';
import { faComputer, faHouseLaptop, faInr, faN, faPenNib, faStar, faUserNinja } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'GottaPlayThemAll';
  iconaHome = faHouseLaptop;
  iconaPC = faComputer;
  iconaXbox = faXbox;
  iconaPlayStation = faPlaystation;
  iconaNuoveUscite = faStar;
  iconaSwitch = faN;
  constructor() { }

  ngOnInit(): void {
  }

}
