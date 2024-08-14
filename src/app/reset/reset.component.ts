import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css',
})
export class ResetComponent {
  @Output() resetEvent = new EventEmitter();

  reset() {
    this.resetEvent.emit();
  }
}
