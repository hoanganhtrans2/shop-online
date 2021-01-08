import { Component, OnInit } from '@angular/core';
export interface FashionStyle {
  img: string;
  title: string;
  text: string;
}
@Component({
  selector: 'app-fashion-style',
  templateUrl: './fashion-style.component.html',
  styleUrls: ['./fashion-style.component.scss'],
})
export class FashionStyleComponent implements OnInit {
  constructor() {}
  images: FashionStyle[] = [
    {
      img: './assets/fashionstyle/fashionstyle1.jpg',
      title: '5 Mens Fashion Trends To Keep For 2020',
      text: 'The only trends worth holding on to',
    },
    {
      img: './assets/fashionstyle/fashionstyle2.jpg',
      title: '12 Modern Trouser Styles All Men Should Own',
      text:
        'Break your denim addiction with stylish alternatives to your most trusted legwear',
    },
    {
      img: './assets/fashionstyle/fashionstyle3.jpg',
      title: 'The Best Mens Separates Combinations',
      text:
        'Mix and match like a pro and get more from your tailoring rotation',
    },
    {
      img: './assets/fashionstyle/fashionstyle4.jpg',
      title: 'The Best Winter Boots For Men 2020',
      text: 'Dont step a foot outside without these',
    },
    {
      img: './assets/fashionstyle/fashionstyle5.jpg',
      title: '85 Of The Best Quotes About Mens Fashion & Style',
      text: 'Sartorial lessons from the best in the business',
    },
    {
      img: './assets/fashionstyle/fashionstyle6.jpg',
      title: 'A Guide To Mens Shoe Colour Combinations',
      text: 'Never put a foot wrong with our expert hue-to guide',
    },
    {
      img: './assets/fashionstyle/fashionstyle7.jpg',
      title: 'The Ultimate Guide To The Breitling Navitimer',
      text: 'The most famous pilots watch of all',
    },
    {
      img: './assets/fashionstyle/fashionstyle8.jpg',
      title: 'Audemars Piguet Royal Oak: A Guide To The Original Baller Watch',
      text: 'The definitive guide to a bona fide game-changer',
    },
  ];
  ngOnInit(): void {}
}
