import { Component } from '@angular/core';
import { AddItem } from './components/add-item/add-item';
import { ShoppingList } from './components/shopping-list/shopping-list';

@Component({
  selector: 'app-root',
  imports: [AddItem, ShoppingList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  items: string[] = [];

  addItem(item: string): void {
    this.items = [...this.items, item];
  }

  deleteItem(index: number): void {
    if (index < 0 || index >= this.items.length) {
      return;
    }

    this.items = this.items.filter((_, itemIndex) => itemIndex !== index);
  }
}
