import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  barValue: string;
  clicks: number;

  constructor() {
    this.barValue = 0 + '%';
    this.clicks = 0;
  }

  ngOnInit(): void {
  }

  increment(): void {
    this.clicks += 10;
    this.barValue = this.clicks.toString() + '%';
    if (this.clicks >= 100) {
      this.clicks = 100;
    }
  }

  decrement(): void {
    this.clicks -= 10;
    this.barValue = this.clicks.toString() + '%';
    if (this.clicks <= 0) {
      this.clicks = 0;
    }
  }

}
