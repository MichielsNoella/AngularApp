import {Component, OnInit} from '@angular/core';
import {City} from './shared/model/city.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// first use
// export class AppComponent {
//   title: string = 'First Angular-app';
//   name: string = 'Noella';
// }
// dit kan ook maar is niet zo'n goede gewoonte, dit is niet voor de constructor maar voor de methode ngOnInit()
// export class AppComponent {
//   title: string;
//   name: string;
//
//   constructor() {
//     this.title = 'First Angular-app';
//     this.name = 'Noella';
//   }
// }

// best use
export class AppComponent implements OnInit {
  title: string;
  citiesOfNetherland: string;
  name: string;
  cities: City[];

  // cities: string[];

  constructor() {
    this.cities = [
      new City(1, 'Groningen', 'GR'),
      new City(2, 'Hengelo', 'OV'),
      new City(3, 'De, Haag', 'ZH'),
      new City(4, 'Enschede', 'OV')
    ];
  }

  ngOnInit() {
    this.title = 'First Angular-app';
    this.name = 'Noella';
    this.citiesOfNetherland = 'Nederland';
    // this.cities = ['Groningen', 'Hengelo', 'Den Haag', 'Enschede'];
  }
}
