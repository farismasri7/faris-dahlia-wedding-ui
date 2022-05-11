import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guest } from 'src/app/models/guests.model';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {
  guests!: Guest[];

  constructor(private http: HttpClient) { }

  getGuests() {
    return this.http.get("http://localhost:3000/guests")
  }

  deleteGuest(id: any) {
    return this.http.delete(`http://localhost:3000/guests/${id}`)
  }

  editGuest(id: any, body: any) {
    return this.http.put(`http://localhost:3000/guests/${id}`, JSON.parse(body))
  }
}
