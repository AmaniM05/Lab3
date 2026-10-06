import { Component, signal } from '@angular/core';
import { AddItem } from './components/add-item/add-item';
import { ShoppingList } from './components/shopping-list/shopping-list';

@Component({
  selector: 'app-root',
  imports: [AddItem, ShoppingList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  items = signal<string[]>([]);

  addItem(item: string): void {
    this.items.update((list) => [...list, item]);
  }

  deleteItem(index: number): void {
    this.items.update((list) => list.filter((_, i) => i !== index));
  }
}