import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-example',
  templateUrl: './event-binding-example.component.html',
  styleUrls: ['./event-binding-example.component.scss']
})
export class EventBindingExampleComponent implements OnInit {

  text: string;
  constructor() {
    this.text = 'Button has not been clicked';
   }

   onButtonClicked(): void{
    this.text = 'Button has been clicked!';
  }

  ngOnInit(): void {
  }

}
