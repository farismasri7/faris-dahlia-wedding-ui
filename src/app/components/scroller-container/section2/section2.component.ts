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
  FirstName!: string;
  LastName!: string;
  Email!: string;
  isAttending!: string;
  rooms!: number;
  Qty!: number;
  guest = {
    FirstName: '',
    LastName: '',
    Email: '',
    isAttending: '',
    rooms: -1,
    Qty: -1,
  };
  constructor(private rsvpService: RsvpService) {}

  ngOnInit(): void {}

  onRSVPSubmit(event: any) {
    this.guest.FirstName = this.FirstName;
    this.guest.LastName = this.LastName;
    this.guest.Email = this.Email;
    this.guest.isAttending = this.isAttending;
    this.guest.rooms = this.rooms;
    this.guest.Qty = this.Qty;

    console.log(this.guest);
    if (!this.rsvpService.validateRSVP(this.guest)) {
      console.log('Poopoo');
      this.errorBanner();
      return;
    }

    if (!this.rsvpService.validateEmailRegex(this.guest.Email)) {
      this.emailErrorBanner();
      return;
    }

    this.rsvpService.registerGuestRsvp(this.guest).subscribe((data) => {});

    console.log('SUCCESS', this.guest);
    this.successBanner();
    event.preventDefault();
    this.guest.FirstName = '';
    this.guest.LastName = '';
    this.guest.Email = '';
    this.guest.isAttending = '';
    this.guest.rooms = -1;
    this.guest.Qty = -1;
    let inputs: any = document.querySelectorAll('input, select');
    inputs.forEach((input: any) => {
      input.value = '';
    });
  }

  successBanner() {
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
}
