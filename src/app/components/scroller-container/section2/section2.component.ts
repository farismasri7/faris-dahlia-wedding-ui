import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/models/guests.model';
import { RsvpService } from 'src/app/services/rsvp/rsvp.service';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css'],
})
export class Section2Component implements OnInit {
  guest = Guest;
  FirstName!: String;
  LastName!: String;
  Email!: String;
  isAttending!: String;
  rooms!: Number;
  Qty!: Number;

  constructor(private rsvpService: RsvpService) {}

  ngOnInit(): void {}

  onRSVPSubmit(event: any) {
    event.preventDefault();
    let guest: any = {
      FirstName: this.FirstName,
      LastName: this.LastName,
      Email: this.Email,
      isAttending: this.isAttending,
      rooms: this.rooms,
      Qty: this.Qty,
    };

    if (!this.rsvpService.validateRSVP(guest)) {
      this.errorBanner();
      return;
    }

    if (!this.rsvpService.validateEmailRegex(guest.Email)) {
      this.emailErrorBanner();
      return;
    }

    this.rsvpService.registerGuestRsvp(guest).subscribe((data) => {});

    this.successBanner(guest);

    guest = undefined;

    let form: any = document.querySelector('form');
    form.reset();
  }

  async successBanner(guest: any) {
    let x: any = document.getElementById('success-banner');
    x.style.display = 'block';
    setTimeout(() => {
      x.style.display = 'none';
    }, 3000);
  }

  errorBanner() {
    let y: any = document.getElementById('error-banner');
    y.style.display = 'block';
    setTimeout(() => {
      y.style.display = 'none';
    }, 3000);
  }

  emailErrorBanner() {
    let y: any = document.getElementById('regex-error-banner');
    y.style.display = 'block';
    setTimeout(() => {
      y.style.display = 'none';
    }, 3000);
  }

  // openForm(action:string) {
  //   let x: any = document.getElementById(`newRSVP`);
  //   let y: any = document.getElementById(`editRSVP`);
  //   switch(action){
  //     case "new":
  //       x.style.display = "block";
  //       y.style.display = "none";
  //       break;
  //     case "edit":
  //       y.style.display = "block";
  //       x.style.display = "none";
  //       break;
  //   }
  // }
}
