import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.scss']
})
export class BuiltInPipesComponent implements OnInit {

  currentDate: Date;
  inputText!: string;
  slicedString: string;
  inputCurrency: number;

  constructor() {
    this.currentDate = new Date();
    this.inputText = 'SOME TEXT';
    this.inputCurrency = 999;
    this.slicedString = 'another text';
  }

  ngOnInit(): void {
  }

  getDate(): void {
    this.currentDate = new Date();
    console.log(this.currentDate);
  }

}
