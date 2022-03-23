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
}
