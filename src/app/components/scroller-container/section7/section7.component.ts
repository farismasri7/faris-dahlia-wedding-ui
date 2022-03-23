import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/models/guests.model';
import { GuestsService } from 'src/app/services/guests/guests.service';

@Component({
  selector: 'app-section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.css']
})
export class Section7Component implements OnInit {

  constructor(public guestsService: GuestsService) { }

  ngOnInit(): void {
    this.refreshGuestsList();
  }

  refreshGuestsList(){
    this.guestsService.getGuests().subscribe((res) => {
      this.guestsService.guests = res as Guest[];
    })
  }
  

}
