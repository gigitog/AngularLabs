import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  userName!: string;

  constructor() { }

  ngOnInit(): void {
    this.userName = 'Daniil';
  }

  logout(): void {
    alert('User has been logged out');
  }
}
