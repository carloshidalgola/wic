import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFirstStepComponent } from './search-first-step.component';

describe('SearchFirstStepComponent', () => {
  let component: SearchFirstStepComponent;
  let fixture: ComponentFixture<SearchFirstStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFirstStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFirstStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
