import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceInformationComponent } from './commerce-information.component';

describe('CommerceInformationComponent', () => {
  let component: CommerceInformationComponent;
  let fixture: ComponentFixture<CommerceInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommerceInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
