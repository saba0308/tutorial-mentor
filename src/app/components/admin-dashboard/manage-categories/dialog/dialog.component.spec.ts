import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { TmDialogModule } from '@tmlib/ui-sdk/dialog';
import { TmDialogRef } from '@tmlib/ui-sdk/dialog';


import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TmDialogModule,FormsModule,ReactiveFormsModule],
      declarations: [ DialogComponent ],
      providers: [{
        provide: TmDialogRef,
        useValue: {
          close: (dialogResult: any) => { }
        }
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
