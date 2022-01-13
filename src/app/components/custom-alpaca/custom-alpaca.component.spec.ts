import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAlpacaComponent } from './custom-alpaca.component';

describe('CustomAlpacaComponent', () => {
  let component: CustomAlpacaComponent;
  let fixture: ComponentFixture<CustomAlpacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAlpacaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAlpacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
