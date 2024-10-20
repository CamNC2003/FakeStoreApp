import { TestBed } from '@angular/core/testing';
import {SignInComponent} from "./signIn.component";


describe('SignInComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
