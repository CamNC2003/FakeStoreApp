import { TestBed } from '@angular/core/testing';
import {InventoryComponent} from "./inventory.component";


describe('InventoryComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(InventoryComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
