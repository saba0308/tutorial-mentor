import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsConditionContentComponent } from './terms-condition-content.component';

describe('TermsConditionContentComponent', () => {
  let component: TermsConditionContentComponent;
  let fixture: ComponentFixture<TermsConditionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsConditionContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsConditionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
