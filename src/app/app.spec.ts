import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { App } from './app';
import { AddItem } from './components/add-item/add-item';
import { ShoppingList } from './components/shopping-list/shopping-list';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the shopping list title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Shopping List');
  });

  it('should add an item emitted by the add item component', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const addItem = fixture.debugElement.query(By.directive(AddItem)).componentInstance as AddItem;

    addItem.itemAdded.emit('Apples');

    expect(app.items).toEqual(['Apples']);
  });

  it('should delete the selected item emitted by the shopping list component', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const shoppingList = fixture.debugElement.query(By.directive(ShoppingList))
      .componentInstance as ShoppingList;
    app.items = ['Apples', 'Bread', 'Milk'];

    shoppingList.itemDeleted.emit(1);

    expect(app.items).toEqual(['Apples', 'Milk']);
  });

  it('should ignore a delete request outside the list', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.items = ['Apples'];

    app.deleteItem(4);

    expect(app.items).toEqual(['Apples']);
  });
});
