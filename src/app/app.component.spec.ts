import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,BrowserModule,BrowserAnimationsModule,
        FormsModule, ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
    ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MangoMentors'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MangoMentors');
  });

  // it('should render title', async() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //  console.log('dddddddd',compiled.querySelector('.content span')?.textContent);
  //   expect(compiled.querySelector('.content span')?.textContent).toEqual('MangoMentors');
    
  // });
});
