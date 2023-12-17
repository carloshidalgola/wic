import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarOtrasNovedadesComponent } from './gestionar-otras-novedades.component';

describe('GestionarOtrasNovedadesComponent', () => {
  let component: GestionarOtrasNovedadesComponent;
  let fixture: ComponentFixture<GestionarOtrasNovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarOtrasNovedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarOtrasNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
