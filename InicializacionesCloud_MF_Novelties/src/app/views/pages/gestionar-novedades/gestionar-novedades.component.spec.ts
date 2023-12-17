import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarNovedadesComponent } from './gestionar-novedades.component';

describe('GestionarNovedadesComponent', () => {
  let component: GestionarNovedadesComponent;
  let fixture: ComponentFixture<GestionarNovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarNovedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
