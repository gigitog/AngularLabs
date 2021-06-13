import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyExampleComponent } from './property-example.component';

describe('PropertyExampleComponent', () => {
  let component: PropertyExampleComponent;
  let fixture: ComponentFixture<PropertyExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
