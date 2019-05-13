import {Component, OnInit} from '@angular/core';

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
  name: string;

  constructor() {
  }

  ngOnInit() {
    this.title = 'First Angular-app';
    this.name = 'Noella';
  }
}
