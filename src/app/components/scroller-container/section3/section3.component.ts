import { Component, OnInit } from '@angular/core';
import { RsvpService } from 'src/app/services/rsvp.service';
import { Router } from '@angular/router';
// import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit {
  FirstName!: String;
  LastName!: String;
  Email!: String;
  isAttending!: String;
  

  constructor(
    private rsvpService: RsvpService
  ) { }

  ngOnInit(): void {
  }

  onRSVPSubmit() {
    const guest = {
      "FirstName": this.FirstName,
      "LastName": this.LastName,
      "Email": this.Email,
      "isAttending": this.isAttending
    }

    this.rsvpService.registerGuestRsvp(guest).subscribe(data => {

    });
  }

}
