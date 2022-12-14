import { Component } from '@angular/core';
import { faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons';
import { faComputer, faHouseLaptop, faInr, faN, faPenNib, faStar, faUserNinja } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GottaPlayThemAll';
  iconaHome = faHouseLaptop;
  iconaPC = faComputer;
  iconaXbox = faXbox;
  iconaPlayStation = faPlaystation;
  iconaNuoveUscite = faStar;
  iconaSwitch = faN;
}
