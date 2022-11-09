import { Component } from '@angular/core';
import { faComputer, faHouseLaptop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GottaPlayThemAll';
  iconaHome = faHouseLaptop;
  iconaPC = faComputer;
  iconaXbox = faComputer;
}
