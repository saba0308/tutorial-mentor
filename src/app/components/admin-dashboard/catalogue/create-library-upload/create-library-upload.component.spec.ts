import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { CreateLibraryUploadComponent } from './create-library-upload.component';

describe('CreateLibraryUploadComponent', () => {
  let component: CreateLibraryUploadComponent;
  let fixture: ComponentFixture<CreateLibraryUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
       FormsModule,ReactiveFormsModule
      ],
      declarations: [ CreateLibraryUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLibraryUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
