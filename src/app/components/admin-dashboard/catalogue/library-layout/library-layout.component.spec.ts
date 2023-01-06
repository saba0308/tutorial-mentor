import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryLayoutComponent } from './library-layout.component';

describe('LibraryLayoutComponent', () => {
  let component: LibraryLayoutComponent;
  let fixture: ComponentFixture<LibraryLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
