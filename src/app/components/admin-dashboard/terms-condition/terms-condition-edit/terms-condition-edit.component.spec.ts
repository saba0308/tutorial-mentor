import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsConditionEditComponent } from './terms-condition-edit.component';

describe('TermsConditionEditComponent', () => {
  let component: TermsConditionEditComponent;
  let fixture: ComponentFixture<TermsConditionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsConditionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsConditionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
