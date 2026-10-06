import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddItem } from './add-item';

describe('AddItem', () => {
  let component: AddItem;
  let fixture: ComponentFixture<AddItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItem],
    }).compileComponents();

    fixture = TestBed.createComponent(AddItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a trimmed item and clear the input', () => {
    let addedItem = '';
    component.itemAdded.subscribe((item) => (addedItem = item));
    component.itemName = '  Apples  ';

    component.addItem();

    expect(addedItem).toBe('Apples');
    expect(component.itemName).toBe('');
  });

  it('should not emit an empty item', () => {
    let numberOfItemsAdded = 0;
    component.itemAdded.subscribe(() => numberOfItemsAdded++);
    component.itemName = '   ';

    component.addItem();

    expect(numberOfItemsAdded).toBe(0);
  });
});
