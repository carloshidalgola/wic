import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigNovCausalComponent } from './gestionar-otras-novedades.component';

describe('ConfigNovCausalComponent', () => {
  let component: ConfigNovCausalComponent;
  let fixture: ComponentFixture<ConfigNovCausalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigNovCausalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigNovCausalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
