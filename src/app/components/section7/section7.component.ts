import { Component, Input, OnInit, QueryList, SimpleChange, SimpleChanges } from '@angular/core';
import { Guest } from 'src/app/models/guests.model';
import { GuestsService } from 'src/app/services/guests/guests.service';

@Component({
  selector: 'app-section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.css'],
})
export class Section7Component implements OnInit {
  invited: any = 0;
  attending: any = 0;
  notAttending: any = 0;
  maybeAttending: any = 0;
  rooms: any = 0;
  constructor(public guestsService: GuestsService) {}

  ngOnInit(): void {
    this.refreshGuestsList();
    this.tallyTracker();
  }

  async refreshGuestsList() {
    this.guestsService.getGuests().subscribe((res) => {
      this.guestsService.guests = res as Guest[];
    });
  }

  deleteGuest(id: any) {
    this.guestsService.deleteGuest(id).subscribe((res) => {
      location.reload();
    });
  }

  editGuest(editedGuest: any) {
    this.guestsService.editGuest(editedGuest.id, JSON.stringify(editedGuest)).subscribe(res => {
      console.log(res);
    })
  }

  tallyTracker() {
    this.guestsService.getGuests().subscribe((res) => {
      this.guestsService.guests.forEach((guest) => {
        this.rooms += guest.rooms;
        this.invited += guest.Qty;
        if (guest.isAttending == 'Attending') {
          this.attending += guest.Qty;
        }
        if (guest.isAttending == 'Not Attending'){
          this.notAttending += guest.Qty;
        }
        if(guest.isAttending == 'Maybe'){
          this.maybeAttending += guest.Qty;
        }
      });
    });
  }
}
