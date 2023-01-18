import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule} from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';

import { TmDialogModule } from '@tmlib/ui-sdk/dialog';
import { TmDialogRef } from '@tmlib/ui-sdk/dialog';


import { FilterDialogComponent } from './filter-dialog.component';

describe('FilterDialogComponent', () => {
  let component: FilterDialogComponent;
  let fixture: ComponentFixture<FilterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TmDialogModule,FormsModule,ReactiveFormsModule],
      declarations: [ FilterDialogComponent ],
      providers: [{
        provide: TmDialogRef,
        useValue: {
          close: (dialogResult: any) => { }
        }
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
