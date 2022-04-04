import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RsvpService } from 'src/app/services/rsvp/rsvp.service';
// import { FlashMessagesModule } from 'angular2-flash-messages';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css'],
})
export class Section2Component implements OnInit {
  FirstName!: String;
  LastName!: String;
  Email!: String;
  isAttending!: String;
  rooms!: Number;
  Qty!: Number;

  constructor(private rsvpService: RsvpService) {}

  ngOnInit(): void {}

  onRSVPSubmit(event: any) {
    const guest = {
      FirstName: this.FirstName,
      LastName: this.LastName,
      Email: this.Email,
      isAttending: this.isAttending,
      rooms: this.rooms,
      Qty: this.Qty,
    };

    console.log(guest);
    if(!this.rsvpService.validateRSVP(guest)) {
      this.errorBanner();
      return;
    }

    if(!this.rsvpService.validateEmailRegex(guest.Email)){
      this.emailErrorBanner();
      return;
    }

    this.rsvpService.registerGuestRsvp(guest).subscribe((data) => {
      this.successBanner();
      event.preventDefault();
      let inputs: any = document.querySelectorAll('input, select');
      inputs.forEach((input: any) => {
        input.value = '';
      });
    });
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

  emailErrorBanner() {
    let y: any = document.getElementById('regex-error-banner');
    y.style.display = "block";
    setTimeout(() => {
      y.style.display = "none";
    }, 3000);
  }
}
