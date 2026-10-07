import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthShowcase } from './auth-showcase';

describe('AuthShowcase', () => {
  let component: AuthShowcase;
  let fixture: ComponentFixture<AuthShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthShowcase],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthShowcase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
