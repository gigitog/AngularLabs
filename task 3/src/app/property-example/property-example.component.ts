import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-example',
  templateUrl: './property-example.component.html',
  styleUrls: ['./property-example.component.scss']
})
export class PropertyExampleComponent implements OnInit {

  text: string;
  constructor() {
    this.text = 'Another random text';
   }

  ngOnInit(): void {
  }

}
