import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingList } from './shopping-list';

describe('ShoppingList', () => {
  let component: ShoppingList;
  let fixture: ComponentFixture<ShoppingList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingList],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display every item', () => {
    fixture.componentRef.setInput('items', ['Apples', 'Bread']);
    fixture.detectChanges();

    const itemElements = fixture.nativeElement.querySelectorAll('.item');
    expect(itemElements.length).toBe(2);
    expect(itemElements[0].textContent).toContain('Apples');
    expect(itemElements[1].textContent).toContain('Bread');
  });

  it('should emit the selected item index', () => {
    let deletedIndex = -1;
    component.itemDeleted.subscribe((index) => (deletedIndex = index));
    fixture.componentRef.setInput('items', ['Apples', 'Bread']);
    fixture.detectChanges();

    const deleteButtons = fixture.nativeElement.querySelectorAll('button');
    deleteButtons[1].click();

    expect(deletedIndex).toBe(1);
  });

  it('should display a message when the list is empty', () => {
    fixture.detectChanges();

    const emptyMessage = fixture.nativeElement.querySelector('.empty');
    expect(emptyMessage.textContent).toContain('Your shopping list is empty.');
  });
});
