import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-example',
  templateUrl: './two-way-binding-example.component.html',
  styleUrls: ['./two-way-binding-example.component.scss']
})
export class TwoWayBindingExampleComponent implements OnInit {

  title: string;
  constructor() {
    this.title = 'hello';
   }

   onButtonClicked(): void{
    this.title = 'Button has been clicked!';
  }

  ngOnInit(): void {
  }

}
