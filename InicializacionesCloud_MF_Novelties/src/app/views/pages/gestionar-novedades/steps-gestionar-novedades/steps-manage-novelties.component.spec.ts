import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsManageNoveltiesComponent } from './steps-manage-novelties.component';

describe('StepsManageNoveltiesComponent', () => {
  let component: StepsManageNoveltiesComponent;
  let fixture: ComponentFixture<StepsManageNoveltiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsManageNoveltiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsManageNoveltiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
