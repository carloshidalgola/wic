import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndGestionOtrasNovedadesComponent } from './end-gestion-otras-novedades.component';

describe('EndGestionOtrasNovedadesComponent', () => {
  let component: EndGestionOtrasNovedadesComponent;
  let fixture: ComponentFixture<EndGestionOtrasNovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndGestionOtrasNovedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndGestionOtrasNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
