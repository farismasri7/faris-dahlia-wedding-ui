import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.css']
})
export class Section6Component implements OnInit {
  Username!: String;
  Password!: String;
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLoginSubmit(){
    const admin = {
      Username: this.Username,
      Password: this.Password
    }

    this.authService.authenticateAdmin(admin).subscribe(data => {
      this.authService.storeUserData(data.token, data.admin);
    })
  }

}
