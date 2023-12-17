import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingNoveltiesComponent } from './pending-novelties.component';

describe('PendingNoveltiesComponent', () => {
  let component: PendingNoveltiesComponent;
  let fixture: ComponentFixture<PendingNoveltiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingNoveltiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingNoveltiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
