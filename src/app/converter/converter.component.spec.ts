import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConverterComponent } from './converter.component';
import { DebugElement } from '@angular/core';

describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    
  });
});
