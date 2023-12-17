import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGestionOtrasNovedadesComponent } from './form-gestion-otras-novedades.component';

describe('FormGestionOtrasNovedadesComponent', () => {
  let component: FormGestionOtrasNovedadesComponent;
  let fixture: ComponentFixture<FormGestionOtrasNovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGestionOtrasNovedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGestionOtrasNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
