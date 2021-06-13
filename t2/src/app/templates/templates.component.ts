import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewChildExampleComponent } from '../view-child-example/view-child-example.component';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})

export class TemplatesComponent implements OnInit {


  isClicked: boolean;
  @ViewChild(ViewChildExampleComponent, {static: false})
  private counterComponent: ViewChildExampleComponent|undefined;

  constructor() {
    this.isClicked = false;
  }

  summarize(): void {
    this.counterComponent?.summarize();
  }
  substract(): void {
    this.counterComponent?.substract();
  }
  multiply(): void {
    this.counterComponent?.multiply();
  }
  divide(): void {
    this.counterComponent?.divide();
  }


  ngOnInit(): void {
  }


}
