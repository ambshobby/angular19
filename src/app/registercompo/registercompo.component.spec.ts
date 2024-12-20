import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercompoComponent } from './registercompo.component';

describe('RegistercompoComponent', () => {
  let component: RegistercompoComponent;
  let fixture: ComponentFixture<RegistercompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistercompoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistercompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
