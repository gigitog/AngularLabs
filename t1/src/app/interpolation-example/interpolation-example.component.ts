import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-example',
  templateUrl: './interpolation-example.component.html',
  styleUrls: ['./interpolation-example.component.scss']
})
export class InterpolationExampleComponent implements OnInit {
  textValue: string;
  constructor() {
    this.textValue = 'Some text value';
  }

  ngOnInit(): void {
  }

}
