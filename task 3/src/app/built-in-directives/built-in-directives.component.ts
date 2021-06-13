import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.scss']
})
export class BuiltInDirectivesComponent implements OnInit {
  show: boolean;
  users: Array<any> = [
    {firtsName: 'Ivan', lastName: 'Ivanov'},
    {firtsName: 'Petro', lastName: 'Petrov'},
    {firtsName: 'Alexander', lastName: 'Alexandrov'},
    {firtsName: 'Andrey', lastName: 'Andreev'},
    {firtsName: 'Vladimir', lastName: 'Vladimirov'},
  ];

    isVerdana = true;
    isArial = true;

  constructor() {
    this.show = true;
   }

  ngOnInit(): void {
  }

}
