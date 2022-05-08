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

  onLoginSubmit(event:any){
    const admin = {
      Username: this.Username.toLowerCase(),
      Password: this.Password
    }

    this.authService.authenticateAdmin(admin).subscribe(data => {
      if(data.success){
        this.successBanner();
        event.preventDefault();
        let inputs: any = document.querySelectorAll('input, select');
        inputs.forEach((input: any) => {
          input.value = '';
        });
        this.authService.storeUserData(data.token, data.admin);
        this.router.navigate(['/guests']);
      } else {
        this.errorBanner();
      }
    })
  }

  successBanner() {
    let x: any = document.getElementById('success-banner');
    x.style.display = "block";
    setTimeout(() => {
      x.style.display = "none";
    }, 3000);
  }

  errorBanner() {
    let y: any = document.getElementById('error-banner');
    y.style.display = "block";
    setTimeout(() => {
      y.style.display = "none";
    }, 3000);
  }

}
