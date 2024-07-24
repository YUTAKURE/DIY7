import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrl: './plus.component.css',
})
export class PlusComponent {
  @Output() plusEvent = new EventEmitter();

  plus() {
    this.plusEvent.emit();
  }
}
