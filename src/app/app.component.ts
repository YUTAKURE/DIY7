import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';

  count: number = 0;

  plus() {
    this.count++;
    console.log(this.count);
  }

  minus() {
    this.count--;
    console.log(this.count);
  }

  reset() {
    this.count = 0;
    console.log(this.count);
  }
}
