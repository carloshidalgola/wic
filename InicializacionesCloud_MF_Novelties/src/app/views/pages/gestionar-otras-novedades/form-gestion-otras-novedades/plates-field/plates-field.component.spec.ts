import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatesFieldComponent } from './plates-field.component';

describe('PlatesFieldComponent', () => {
  let component: PlatesFieldComponent;
  let fixture: ComponentFixture<PlatesFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatesFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatesFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
