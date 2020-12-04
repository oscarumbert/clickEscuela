/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddHomeworkComponent } from './add-Homework.component';

describe('AddHomeworkComponent', () => {
  let component: AddHomeworkComponent;
  let fixture: ComponentFixture<AddHomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
