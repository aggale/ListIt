import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListTabPage } from './view-list-tab.page';

describe('ViewListTabPage', () => {
  let component: ViewListTabPage;
  let fixture: ComponentFixture<ViewListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewListTabPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
