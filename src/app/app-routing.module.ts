import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CatalogueComponent } from './components/admin-dashboard/catalogue/catalogue.component';
import { CreateLibraryComponent } from './components/admin-dashboard/catalogue/create-library/create-library.component';
import { GridViewComponent } from './components/admin-dashboard/catalogue/grid-view/grid-view.component';
import { LibraryLayoutComponent } from './components/admin-dashboard/catalogue/library-layout/library-layout.component';
import { ListViewComponent } from './components/admin-dashboard/catalogue/list-view/list-view.component';
import { ViewLibraryComponent } from './components/admin-dashboard/catalogue/view-library/view-library.component';
import { DashboardComponent } from './components/admin-dashboard/dashboard/dashboard.component';
import { ManageCategoriesComponent } from './components/admin-dashboard/manage-categories/manage-categories.component';
import { PrivacyPolicyComponent } from './components/admin-dashboard/privacy-policy/privacy-policy.component';
import { TermsConditionContentComponent } from './components/admin-dashboard/terms-condition/terms-condition-content/terms-condition-content.component';
import { TermsConditionEditComponent } from './components/admin-dashboard/terms-condition/terms-condition-edit/terms-condition-edit.component';
import { TermsConditionComponent } from './components/admin-dashboard/terms-condition/terms-condition.component';
import { UsersComponent } from './components/admin-dashboard/users/users.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [{path:'landing',component:LandingComponent},
                    {path:'admin',component:AdminDashboardComponent,
                      children:[
                        {path:'dashboard',component:DashboardComponent},
                        {path:'catalogue',component:CatalogueComponent,children:[
                          {path:'library',component:LibraryLayoutComponent,children:[
                           
                            {path:'list-view',component:ListViewComponent},
                            {path:'grid-view',component:GridViewComponent},
                            {path:'**',component:ListViewComponent},

                          ]},
                          {path:'create-library',component:CreateLibraryComponent},
                          {path:'view-library',component:ViewLibraryComponent},
                          {path:'**',component:LibraryLayoutComponent}



                        ]

                        },
                        {path:'manage-categories',component:ManageCategoriesComponent},
                        {path:'privacy-policy',component:PrivacyPolicyComponent},
                        {path:'terms-condition',component:TermsConditionComponent,
                          children:[
                            {path:'content',component:TermsConditionContentComponent},
                            {path:'edit',component:TermsConditionEditComponent},
                            {path:'**',component:TermsConditionContentComponent}
                          ]
                        },
                        {path:'users',component:UsersComponent},
                        {path:'**',component:DashboardComponent}
                      ]
                    },
                    {path:'sign-in',component:SignInComponent},
                    {path:'**',component:LandingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
