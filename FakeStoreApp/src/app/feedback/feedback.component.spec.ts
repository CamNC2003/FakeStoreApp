import { TestBed } from '@angular/core/testing';
import {FeedbackComponent} from "./feedback.component";


describe('FeedbackComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FeedbackComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
