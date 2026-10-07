import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-add-item',
  styleUrl: './add-item.css',
  templateUrl: './add-item.html',
})
export class AddItem {
  @Output() itemAdded = new EventEmitter<string>();

  itemName = '';

  addItem(): void {
    const item = this.itemName.trim();

    if (!item) {
      return;
    }

    this.itemAdded.emit(item);
    this.itemName = '';
  }
}
