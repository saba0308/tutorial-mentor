import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TmDialogModule } from '@tmlib/ui-sdk/dialog';
import { TmDialogService } from '@tmlib/ui-sdk/dialog';
import { AdminDashboardComponent } from './admin-dashboard.component';

describe('AdminDashboardComponent', () => {
  let component: AdminDashboardComponent;
  let fixture: ComponentFixture<AdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports:[TmDialogModule.forRoot()],
      declarations: [ AdminDashboardComponent ],
      providers: [{
        provide: TmDialogService,
       
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
