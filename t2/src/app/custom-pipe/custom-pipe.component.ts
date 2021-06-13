import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent implements OnInit {

  anyString: string;

  constructor() {
    this.anyString = '';
  }

  ngOnInit(): void {
  }

}
