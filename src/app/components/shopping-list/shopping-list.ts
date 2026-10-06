import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-shopping-list',
  styleUrl: './shopping-list.css',
  templateUrl: './shopping-list.html',
})
export class ShoppingList {
  @Input() items: string[] = [];
  @Output() itemDeleted = new EventEmitter<number>();
}
