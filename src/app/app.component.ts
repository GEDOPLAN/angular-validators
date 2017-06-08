import { Component } from '@angular/core';
import { Material, Range } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  erfasst: Material[] = [];

  material: Material = new Material();

  submit() {
    this.erfasst.push(this.material);
    this.material = new Material();
  }
}
