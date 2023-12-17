import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComerceComponent } from './info-comerce.component';

describe('InfoComerceComponent', () => {
  let component: InfoComerceComponent;
  let fixture: ComponentFixture<InfoComerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoComerceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
