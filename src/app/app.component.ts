import {Component, OnInit} from '@angular/core';
import {City} from './shared/model/city.model';
import {Address} from './shared/model/address.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// templateURL wordt vervangen door template:, nu wordt dit getoond en niet de inhoud van app.component.html
// @Component({
//   selector: 'app-root',
//   template: `
//     <!-- inline HTML -->
//     <div class="container">
//       <h1>{{ title }}</h1>
//       <ul class="list-group" *ngIf="showCities">
//         <li class="list-group-item " *ngFor="let city of cities ">
//           {{ city.id }} - {{ city.name }} ({{ city.province }})
//         </li>
//       </ul>
//       <h2 *ngIf="cities.length> 3">Jij hebt veel favoriete steden!</h2>
//     </div>
//   `,
//   styleUrls: ['./app.component.css']
// })

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
  address: Address[];
  showCities: boolean;

  // cities: string[];

  constructor() {
    this.cities = [
      new City(1, 'Groningen', 'GR'),
      new City(2, 'Hengelo', 'OV'),
      new City(3, 'De, Haag', 'ZH'),
      new City(4, 'Enschede', 'OV')
    ];

    this.address = [
      new Address('Kaalheide', '41A', 3040, 'Huldenberg', 'België')
    ];
  }

  ngOnInit() {
    this.title = 'First Angular-app';
    this.name = 'Noella';
    this.citiesOfNetherland = 'Nederland';
    // this.cities = ['Groningen', 'Hengelo', 'Den Haag', 'Enschede'];
    // boolean evalueren en resultaat laten meetellen
    // om de lijst in app.component.html wel- of niet te tonen.
    this.showCities = this.cities.length > 3;
  }
}
