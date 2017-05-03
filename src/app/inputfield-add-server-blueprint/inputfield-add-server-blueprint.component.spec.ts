import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputfieldAddServerBlueprintComponent } from './inputfield-add-server-blueprint.component';

describe('InputfieldAddServerBlueprintComponent', () => {
  let component: InputfieldAddServerBlueprintComponent;
  let fixture: ComponentFixture<InputfieldAddServerBlueprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputfieldAddServerBlueprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputfieldAddServerBlueprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
