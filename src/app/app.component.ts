import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  date = Date.now();
  zone = ""
  clear = true;
  PST = false;
  MST = false;
  CST = false;
  EST = false;
  onButtonClick($event) {
    this.zone = event.target.innerHTML;
    switch (this.zone) {
      case "PST": 
        this.PST = true;
        this.MST = false;
        this.CST = false;
        this.EST = false;
        this.clear = false;
        break;
      case "MST":
        this.PST = false;
        this.MST = true;
        this.CST = false;
        this.EST = false;
        this.clear = false;
        break;
      case "CST":
        this.PST = false;
        this.MST = false;
        this.CST = true;
        this.EST = false;
        this.clear = false;
        break;
      case "EST":
        this.PST = false;
        this.MST = false;
        this.CST = false;
        this.EST = true;
        this.clear = false;
        break;
      default:
        this.PST = false;
        this.MST = false;
        this.CST = false;
        this.EST = false;
        this.clear = true;
        break;
    }
  }
}

