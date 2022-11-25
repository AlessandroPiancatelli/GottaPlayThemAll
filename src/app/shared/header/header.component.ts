import { Component, DoCheck, OnInit } from '@angular/core';
import { faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons';
import { faAdd, faComputer, faHouseLaptop, faInr, faN, faPenNib, faStar, faUserNinja} from '@fortawesome/free-solid-svg-icons';
import { faRegistered} from '@fortawesome/free-regular-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck{
  user: any;
  title = 'GottaPlayThemAll';
  iconaHome = faHouseLaptop;
  iconaPC = faComputer;
  iconaXbox = faXbox;
  iconaPlayStation = faPlaystation;
  iconaNuoveUscite = faStar;
  iconaSwitch = faN;
  iconaRegistrati = faRegistered;
  iconaAdd = faAdd;
  isCollapsed = true;
  valueIconLeft: any;
  constructor(public authService:AuthService , private router:Router) { }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    if(JSON.parse(localStorage.getItem('user')!) !==null){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
