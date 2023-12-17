import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetomarComponent } from './retomar.component';

describe('RetomarComponent', () => {
  let component: RetomarComponent;
  let fixture: ComponentFixture<RetomarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetomarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetomarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
