import { Component, OnInit } from '@angular/core';
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
  roomsCount: any = 0;
  FirstName!: any;
  LastName!: any;
  Email!: any;
  isAttending!: any;
  rooms!: Number;
  Qty!: Number;
  constructor(public guestsService: GuestsService) {}

  ngOnInit(): void {
    this.refreshGuestsList();
    this.tallyTracker();
  }
  
  openModal(event: any, id: any) {
    var tr = event.currentTarget.parentNode.parentNode;
    let FirstName = tr.cells[0].textContent;
    let LastName = tr.cells[1].textContent;
    let Email = tr.cells[2].textContent;
    let Attending = tr.cells[3].textContent;
    let Guests = tr.cells[4].textContent;
    let rooms = tr.cells[5].textContent;
    //Prefill the fields with the gathered information
    let modalTitle = <HTMLInputElement>document.getElementById("editModalLabel");
    modalTitle.innerHTML= `Edit Guest RSVP: ${FirstName} ${LastName}`

    let firstNameForm = <HTMLInputElement>document.getElementById(`inputFirstName`);
    let lastNameForm = <HTMLInputElement>document.getElementById(`inputLastName`);
    let emailForm = <HTMLInputElement>document.getElementById(`inputEmail`);
    let attendingRadioForm = <HTMLInputElement>document.getElementById(`checkAttending`);
    let notAttendingRadioForm = <HTMLInputElement>document.getElementById(`checkNotAttending`);
    let maybeRadioForm = <HTMLInputElement>document.getElementById(`checkMaybe`);
    let guestsForm = <HTMLInputElement>document.getElementById(`inputQty`);
    let roomsForm = <HTMLInputElement>document.getElementById(`inputrooms`);

    firstNameForm.value = FirstName;
    lastNameForm.value = LastName;
    emailForm.value = Email;
    guestsForm.value = Guests;
    roomsForm.value = rooms;
    if(Attending == "Attending"){
      attendingRadioForm.checked = true;
    }
    else if(Attending == "Not Attending"){
      notAttendingRadioForm.checked = true;
    }
    else if(Attending == "Maybe"){
      maybeRadioForm.checked = true;
    }

    document.getElementById('submitEdit')?.addEventListener('click', () => {
      this.editGuest(event, id)
    })
  }
  
  async refreshGuestsList() {
    this.guestsService.getGuests().subscribe((res) => {
      this.guestsService.guests = res as Guest[];
    });
  }

  deleteGuest(id: any) {
    this.guestsService.deleteGuest(id).subscribe((res) => {
      this.refreshGuestsList();
    });
  }

  editGuest(event: any, id:any) {
    event.preventDefault();
    let editedGuest: any = {
      FirstName: this.FirstName,
      LastName: this.LastName,
      Email: this.Email,
      isAttending: this.isAttending,
      rooms: this.rooms,
      Qty: this.Qty,
    };

    this.guestsService.editGuest(id, JSON.stringify(editedGuest)).subscribe(res => {
      this.refreshGuestsList();
    })

    editedGuest = undefined;

    let form: any = document.querySelector('form');
    form.reset();
  }

  tallyTracker() {
    this.guestsService.getGuests().subscribe((res) => {
      this.guestsService.guests.forEach((guest) => {
        this.roomsCount += guest.rooms;
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
