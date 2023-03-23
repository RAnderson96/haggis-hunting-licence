import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckConvictionComponent } from './check-conviction.component';

describe('CheckConvictionComponent', () => {
  let component: CheckConvictionComponent;
  let fixture: ComponentFixture<CheckConvictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckConvictionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckConvictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
