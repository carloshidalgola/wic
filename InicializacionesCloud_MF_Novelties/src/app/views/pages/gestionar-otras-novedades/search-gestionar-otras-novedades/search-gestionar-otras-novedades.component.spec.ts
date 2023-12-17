import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGestionarOtrasNovedadesComponent } from './search-gestionar-otras-novedades.component';

describe('SearchGestionarOtrasNovedadesComponent', () => {
  let component: SearchGestionarOtrasNovedadesComponent;
  let fixture: ComponentFixture<SearchGestionarOtrasNovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGestionarOtrasNovedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGestionarOtrasNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
