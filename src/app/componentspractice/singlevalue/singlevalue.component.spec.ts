import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglevalueComponent } from './singlevalue.component';

describe('SinglevalueComponent', () => {
  let component: SinglevalueComponent;
  let fixture: ComponentFixture<SinglevalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglevalueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglevalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
