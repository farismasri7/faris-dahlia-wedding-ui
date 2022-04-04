import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RsvpService {
  guest: any;

  constructor(private http: HttpClient) { }

  validateRSVP(guest: any) {
    console.log("validateRSVP");
    if(guest.FirstName == undefined || guest.LastName == undefined || guest.Email == undefined || guest.isAttending == undefined || guest.Qty == undefined || guest.rooms == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEmailRegex(email: any) {
    console.log("validateEmail");
    const regex = /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/;
    return regex.test(email);
  }

  registerGuestRsvp(guest: any) {
    console.log("registerGuest");
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application.json');
    return this.http.post('http://localhost:3000/guests', guest, {headers: headers})
      .pipe(map((res) => JSON.parse(JSON.stringify(res))));
  }
}
