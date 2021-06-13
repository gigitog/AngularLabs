import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ng-template-example',
  templateUrl: './ng-template-example.component.html',
  styleUrls: ['./ng-template-example.component.scss']
})
export class NgTemplateExampleComponent implements OnInit {

  @Input() exampleTemplate: TemplateRef<any> | null;

  constructor() {
    this.exampleTemplate = null;
  }

  ngOnInit(): void {
  }

}
