import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalInformationComponent } from './terminal-information.component';

describe('TerminalInformationComponent', () => {
  let component: TerminalInformationComponent;
  let fixture: ComponentFixture<TerminalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
