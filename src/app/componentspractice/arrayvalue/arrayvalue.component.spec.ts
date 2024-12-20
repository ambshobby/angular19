import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayvalueComponent } from './arrayvalue.component';

describe('ArrayvalueComponent', () => {
  let component: ArrayvalueComponent;
  let fixture: ComponentFixture<ArrayvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayvalueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
