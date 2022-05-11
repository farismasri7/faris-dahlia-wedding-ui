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
    if(guest.LastName == "" || guest.LastName == undefined || guest.FirstName == ""|| guest.FirstName == undefined || guest.LastName == undefined || guest.Email == undefined || guest.Email == "" || guest.isAttending == undefined  || guest.isAttending == ""|| guest.Qty == undefined || guest.Qty == -1 || guest.rooms == undefined|| guest.rooms == -1) {
      return false;
    } else {
      return true;
    }
  }

  validateEmailRegex(email: any) {
    const regex = /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/;
    return regex.test(email);
  }

  registerGuestRsvp(guest: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application.json');
    return this.http.post('https://farisanddahlia.com/guests', guest, {headers: headers})
      .pipe(map((res) => JSON.parse(JSON.stringify(res))));
  }
}
