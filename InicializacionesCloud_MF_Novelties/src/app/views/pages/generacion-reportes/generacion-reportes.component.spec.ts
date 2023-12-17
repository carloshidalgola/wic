import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneracionReportesComponent } from './generacion-reportes.component';

describe('GeneracionReportesComponent', () => {
  let component: GeneracionReportesComponent;
  let fixture: ComponentFixture<GeneracionReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneracionReportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneracionReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
