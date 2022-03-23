import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  admin!: Object;

  constructor(
    public authService: AuthService
  ) {
    window.addEventListener('scroll', (event) =>{
      let navBar:any = document.getElementById('headerNav');
      let navLinks:any = document.querySelectorAll('a');
      if(window.pageYOffset > 0){
        navBar.className = "fixed-top navbar-scroll scrolled";
      } else {
        navBar.className = "fixed-top navbar-scroll";
      }
    })
  }

  ngOnInit(): void {
    this.authService.getAdmin().subscribe(profile => {
      this.admin = profile.user;
    })
  }
  
  navCollapse() {
    let x:any = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}
