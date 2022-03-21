import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class section2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Update the count down every 1 second
    let daysElem = <HTMLInputElement>document.getElementById('days');
    let hoursElem = <HTMLInputElement>document.getElementById('hours');
    let minsElem = <HTMLInputElement>document.getElementById('minutes');
    let secsElem = <HTMLInputElement>document.getElementById('seconds');

    const countDownDate = new Date("Jul 23, 2022 16:00:00").getTime();

    let x = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Output the result in an element with id="demo"
      daysElem.innerHTML = days.toString();
      hoursElem.innerHTML = hours.toString();
      minsElem.innerHTML = minutes.toString();
      secsElem.innerHTML = seconds.toString();

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        daysElem.value = "00"
        hoursElem.value = "00"
        minsElem.value = "00"
        secsElem.value = "00"
      }
    }, 1000);
    
  }

}
