import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-street-style',
  templateUrl: './street-style.component.html',
  styleUrls: ['./street-style.component.scss'],
})
export class StreetStyleComponent implements OnInit {
  constructor() {}
  images = [
    './assets/streetstyle/streetstyle1.jpg',
    './assets/streetstyle/streetstyle2.jpg',
    './assets/streetstyle/streetstyle3.jpg',
    './assets/streetstyle/streetstyle4.jpg',
    './assets/streetstyle/streetstyle5.jpg',
    './assets/streetstyle/streetstyle6.jpg',
    './assets/streetstyle/streetstyle7.jpg',
    './assets/streetstyle/streetstyle8.jpg',
    './assets/streetstyle/streetstyle9.jpg',
  ];
  ngOnInit(): void {}
}
