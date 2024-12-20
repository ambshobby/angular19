import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialtwowayComponent } from './trialtwoway.component';

describe('TrialtwowayComponent', () => {
  let component: TrialtwowayComponent;
  let fixture: ComponentFixture<TrialtwowayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrialtwowayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrialtwowayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
