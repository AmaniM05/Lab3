import { Component } from '@angular/core';
import { AddItem } from './components/add-item/add-item';
import { ShoppingList } from './components/shopping-list/shopping-list';

@Component({
  imports: [AddItem, ShoppingList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly items: string[] = [];

  protected addItem(_item: string): void {}

  protected deleteItem(_index: number): void {}
}
