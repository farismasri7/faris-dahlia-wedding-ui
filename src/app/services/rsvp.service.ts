import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RsvpService {
  guest: any;

  constructor(private http: HttpClient) { }

  registerGuestRsvp(guest: any) {
    console.log(guest);

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application.json');
    return this.http.post('/api/guests', guest, {headers: headers})
      .pipe(map((res) => JSON.parse(JSON.stringify(res))));
  }
}
