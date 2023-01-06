import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsConditionComponent } from './terms-condition.component';

describe('TermsConditionComponent', () => {
  let component: TermsConditionComponent;
  let fixture: ComponentFixture<TermsConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsConditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
