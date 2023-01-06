import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LandingComponent } from './components/landing/landing.component';
import { DashboardComponent } from './components/admin-dashboard/dashboard/dashboard.component';
import { CatalogueComponent } from './components/admin-dashboard/catalogue/catalogue.component';
import { ManageCategoriesComponent } from './components/admin-dashboard/manage-categories/manage-categories.component';
import { UsersComponent } from './components/admin-dashboard/users/users.component';
import { TermsConditionComponent } from './components/admin-dashboard/terms-condition/terms-condition.component';
import { PrivacyPolicyComponent } from './components/admin-dashboard/privacy-policy/privacy-policy.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { TmLayoutModule } from '@tmlib/ui-sdk/layout';
import { TmThemeModule } from '@tmlib/ui-sdk';

import { TmButtonModule } from '@tmlib/ui-sdk/button';

import { TmSidebarModule } from '@tmlib/ui-sdk/sidebar';
import { TmActionsModule } from '@tmlib/ui-sdk/actions';
import { TmIconsModule } from '@tmlib/ui-sdk/icons';
import { TmListModule } from '@tmlib/ui-sdk/list';


import { TmCardModule } from '@tmlib/ui-sdk/card';
import { TmUserModule } from '@tmlib/ui-sdk/user';
import { TmTabsetModule } from '@tmlib/ui-sdk/tabset';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TmFormFieldModule } from '@tmlib/ui-sdk/form-field';

import { TmProgressBarModule } from '@tmlib/ui-sdk/progress-bar';
import { TmSpinnerModule } from '@tmlib/ui-sdk/spinner';
import { TmSelectModule } from '@tmlib/ui-sdk/select';
import { TmRadioModule } from '@tmlib/ui-sdk/radio';
import { TmBadgeModule } from '@tmlib/ui-sdk/badge';
import { TmDialogModule } from '@tmlib/ui-sdk/dialog';
import { TmDatepickerModule } from '@tmlib/ui-sdk/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { TmToastrModule } from '@tmlib/ui-sdk/toastr';
import { TmSearchModule } from '@tmlib/ui-sdk/search';

import { TmWindowModule } from '@tmlib/ui-sdk/window';

import{TmInputModule}from'@tmlib/ui-sdk/input';

import { TmMenuModule } from '@tmlib/ui-sdk/menu';
import { TmStepperModule } from '@tmlib/ui-sdk/stepper';
import { TmCalendarModule } from '@tmlib/ui-sdk/calendar';
import { TmTooltipModule } from '@tmlib/ui-sdk/tooltip';
import { TmContextMenuModule } from '@tmlib/ui-sdk/context-menu';
import { TmGridModule } from '@tmlib/ui-sdk/grid';
import { AgGridModule } from 'ag-grid-angular';
import { NgxEditorModule } from "ngx-editor";
import { TermsConditionEditComponent } from './components/admin-dashboard/terms-condition/terms-condition-edit/terms-condition-edit.component';
import { TermsConditionContentComponent } from './components/admin-dashboard/terms-condition/terms-condition-content/terms-condition-content.component';
import { DialogComponent } from './components/admin-dashboard/manage-categories/dialog/dialog.component';
import { ListViewComponent } from './components/admin-dashboard/catalogue/list-view/list-view.component';
import { FilterDialogComponent } from './components/admin-dashboard/catalogue/filter-dialog/filter-dialog.component';
import{TmTimepickerModule} from '@tmlib/ui-sdk/timepicker'
import { GridViewComponent } from './components/admin-dashboard/catalogue/grid-view/grid-view.component';
import { CreateLibraryComponent } from './components/admin-dashboard/catalogue/create-library/create-library.component';
import { ViewLibraryComponent } from './components/admin-dashboard/catalogue/view-library/view-library.component';
import { LibraryLayoutComponent } from './components/admin-dashboard/catalogue/library-layout/library-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LandingComponent,
    DashboardComponent,
    CatalogueComponent,
    ManageCategoriesComponent,
    UsersComponent,
    TermsConditionComponent,
    PrivacyPolicyComponent,
    AdminDashboardComponent,
    TermsConditionEditComponent,
    TermsConditionContentComponent,
    DialogComponent,
    ListViewComponent,
    GridViewComponent,
    CreateLibraryComponent,
    ViewLibraryComponent,
    LibraryLayoutComponent,
    FilterDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TmThemeModule.forRoot(),
    TmLayoutModule,
    TmGridModule,
   TmCardModule, 
   TmDialogModule.forChild(), 
   TmUserModule, 
   TmTabsetModule, 
   TmFormFieldModule, 
   TmInputModule, FormsModule, ReactiveFormsModule, TmMenuModule,
   TmContextMenuModule,
    TmButtonModule,
     TmProgressBarModule, 
     TmStepperModule, 
     TmToastrModule.forRoot(), 
     TmDatepickerModule.forRoot(), 
     TmRadioModule, 
     TmSelectModule, 
     TmBadgeModule,
      TmSpinnerModule, 
      TmLayoutModule, TmListModule, TmThemeModule.forRoot(), TmIconsModule, TmSidebarModule.forRoot(), TmActionsModule,
    HttpClientModule, TmWindowModule.forRoot(), TmUserModule, TmTooltipModule, TmSearchModule, TmCalendarModule,
    AgGridModule,NgxEditorModule ,
    TmDatepickerModule.forRoot(),TmTimepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
