import { Component } from '@angular/core';

interface Zodiac {
  id?: number;
  name: string;
  icon: string;
  date: string;
}

const ZODIACS: Zodiac[] = [
  {
    name: 'Aries',
    icon: '♈',
    date: 'March 21 – April 19',
  },
  {
    name: 'Taurus',
    icon: '♉',
    date: 'April 20 – May 20',
  },
  {
    name: 'Gemini',
    icon: '♊',
    date: 'May 21 – June 21',
  },
  {
    name: 'Cancer',
    icon: '♋',
    date: 'June 22 – July 22',
  },
  {
    name: 'Leo',
    icon: '♌',
    date: 'July 23 – August 22',
  },
  {
    name: 'Virgo',
    icon: '♍',
    date: 'August 23 – September 22',
  },
  {
    name: 'Libra',
    icon: '♎',
    date: 'September 23 – October 23',
  },
  {
    name: 'Scorpius',
    icon: '♏',
    date: 'October 24 – November 21',
  },
  {
    name: 'Sagittarius',
    icon: '♐',
    date: 'November 22 – December 21',
  },
  {
    name: 'Capricornus',
    icon: '♑',
    date: 'December 22 – January 19',
  },
  {
    name: 'Aquarius',
    icon: '♒',
    date: 'January 20 – February 18',
  },
  {
    name: 'Pisces',
    icon: '♓',
    date: 'February 19 – March 20',
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {

  page = 1;
  pageSize = 4;
  collectionSize = ZODIACS.length;
  signs: Zodiac[] | null;

  constructor() {
    this.signs = null;
    this.refreshSigns();
  }

  refreshSigns(): void{
    this.signs = ZODIACS
      .map((zodiac, i) => ({id: i + 1, ...zodiac}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
