import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-add-item',
  styleUrl: './add-item.css',
  templateUrl: './add-item.html',
})
export class AddItem {
  @Output() itemAdded = new EventEmitter<string>();
}
