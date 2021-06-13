import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-example',
  templateUrl: './view-child-example.component.html',
  styleUrls: ['./view-child-example.component.scss']
})
export class ViewChildExampleComponent implements OnInit {

  text: string | null;
  first: number;
  second: number;
  result: number;

  constructor() {
    this.text = null;
    this.first = 0;
    this.second = 0;
    this.result = 0;
  }

  summarize(): void {
    this.result = +this.first + +this.second;
  }
  substract(): void {
    this.result = this.first - this.second;
  }
  multiply(): void {
    this.result = this.first * this.second;
  }
  divide(): void {
    this.result = this.first / this.second;
  }

  ngOnInit(): void {
  }

}
