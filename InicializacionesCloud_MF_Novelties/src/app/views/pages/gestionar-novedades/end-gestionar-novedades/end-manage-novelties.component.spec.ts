import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndManageNoveltiesComponent } from './end-manage-novelties.component';

describe('EndManageNoveltiesComponent', () => {
  let component: EndManageNoveltiesComponent;
  let fixture: ComponentFixture<EndManageNoveltiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndManageNoveltiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndManageNoveltiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
