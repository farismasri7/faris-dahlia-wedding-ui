import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() {
    window.addEventListener('scroll', (event) =>{
      let navBar:any = document.getElementById('headerNav');
      let navLinks:any = document.querySelectorAll('a');
      if(window.pageYOffset > 0){
        // console.log(window.pageYOffset)
        navBar.className = "fixed-top navbar-scroll scrolled";
      } else {
        navBar.className = "fixed-top navbar-scroll";
      }
    })
  }

  ngOnInit(): void {
  }
  
  navCollapse() {
    let x:any = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  

  // scrollColorShift(){
  //   let navBar:any = document.getElementById('headerNav');
  //   navBar.addEventListener('scroll', () => {
  //     if(navBar.scrollTop() > navBar.height()){
  //       navBar.className += " scrolled";
  //     } else {
  //       navBar.className;
  //     }
  //     // navBar.toggleClass('scrolled', navBar.scrollTop() > navBar.height())
  //   })
  // }

}
