import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() userName!: string;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onLogout = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  logout(): void {
    this.onLogout.emit();
  }
}
