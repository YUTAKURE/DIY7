import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent {
  @Input() name: string | undefined;
  @Output() newPersonEvent = new EventEmitter<string>();

  addNewPerson(val: string) {
    this.newPersonEvent.emit(val);
  }
}
