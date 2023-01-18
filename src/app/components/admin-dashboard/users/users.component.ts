import { Component, OnInit ,ChangeDetectionStrategy, TemplateRef} from '@angular/core';
import { TmDialogService } from '@tmlib/ui-sdk/dialog';
import { TmDateService } from '@tmlib/ui-sdk/calendar-kit';
import { ColDef, GridReadyEvent, GridApi, } from 'ag-grid-community';
import { RegistrationComponent } from './registration/registration.component';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { TmDialogRef } from '@tmlib/ui-sdk/dialog';
import { DataService } from 'src/app/services/data.service';
// const btn:HTMLButtonElement=<HTMLButtonElement>document.querySelector(`[name]='tm-delete'`);
// btn.addEventListener('click', (dialog2:Event) => deleteUser(dialog2));

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  public columnsList:any;
  public gridData:any;
  public actionButtonData:any=[];
  public tmPageButtonData:any=[];
  date!: Date;
  min!: Date;
  max!: Date;
  // gridApi!: GridApi;
  // paginationPageSize = 10;
  // eGui:any;
  // users: any[] = [];
  registrationForm!: FormGroup;
   submitted = false;


  constructor(private dateService:TmDateService<Date>,private dialogService: TmDialogService,private formBuilder: FormBuilder) { 
    this.date = dateService.today();
    this.date.setDate(1);
    this.min = dateService.addDay(this.date,-23);
    this.max = dateService.addDay(this.date, 23);
  }
  loading = false;
  searchText!: string;
  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group(
      {
       userName: ['', [Validators.required]],
        email: [ '', [ Validators.required,]],
        mobileNumber: [ '', [ Validators.required,]],
        password: [ '', [ Validators.required,]],
      }
    );
    // coloumn Data
    this.columnsList=[
      {headerName:'S.No', field:'id', filter:false, sortable:true,width:100},
      {headerName:'Name', field:'name', filter:false, sortable:true},
      {headerName:'Email id', field:'email', filter:false, sortable:true,width:250},
      {headerName:'Contact no', field:'phoneNumber', filter:false, sortable:false},
      
    
    ];
    // row Data
    this.gridData=[
      {id:1,name:'Bessie',email:'bessie12@gmail.com',phoneNumber:'(808) 555-0111'},
      {id:2,name:'Flores Juanita',email:'floresjuanita@gmail.com',phoneNumber:'(239) 555-0108'},
      {id:3,name:'Cooper  Kristin',email:'cooper1293@gmail.com',phoneNumber:'(225) 555-0118'},
      {id:4,name:'Leslie Alexander',email:'lesliealexander@gmail.com',phoneNumber:'(252) 555-0126'},
      {id:5,name:'Henry Arthur',email:'henryarthur@gmail.com',phoneNumber:'(219) 555-0114'},
      {id:6,name:'Jane Sam',email:'jansam24@yahoo.com',phoneNumber:'(209) 555-0104'},
      {id:7,name:'Black Marvin',email:'blackmarvin@yahoo.com',phoneNumber:'(308) 555-0121'},  
      {id:8,name:'Claire',email:'claire1990@gmail.com',phoneNumber:'(603) 555-0123'},
      {id:9,name:'Miles Esther',email:'milesesther@gmail.com',phoneNumber:'(808) 555-0111'},
      {id:10,name:'Cameron Williamson',email:'cameron1994@gmail.com',phoneNumber:'(316) 555-0116'}, 
       {id:11,name:'Saba',email:'sabapathi.p@techmango.net',phoneNumber:'(316) 555-0116'}
    ];
    this.actionButtonData.push(
     
      {
        type: 'routing',
        link: 'icon',
        lable: 'view',
        iconName: 'bb_icon_grid_delete',
        isConditionBased: true,
        status:'',
     
      },
      {
        type: 'toggle',
        link: 'toggle',
        lable: '',
        iconName: '',
        status:'primary',
        isConditionBased: true,
      
      },
    );
    this.tmPageButtonData.push(
      {
        type: 'iconButton',
        lable: 'Create',
        color: 'primary',
        size: 'medium',
        isCondition: 'create'
      },
      {
        type: 'iconButton',
        lable: 'Export Excel',
        color: 'primary',
        size: 'medium',
        isCondition: 'export'
      },
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }
  // Get sorting params
  public gridSorting(params:any):void{
    console.log(params);
  }

  // Get search params
  public gridSearch(params:any):void{
    console.log(params)
  }

  // Get pagination params
  public changePagination(params:any):void{
    console.log(params)
  }

  // Get action column data
  public getEditedColumnData(params:any):void{
    console.log(params);
  }
  
  // Get action button data
  public getActionData(params:any):void{
    console.log(params);
    this.onActionBtn(params);
   
  }
  
  // Get page buton data
  public getPageBtnEvent(params:any):void{
    console.log(params);
  }
  // pagination
//   onBtFirst() {
//     this.gridApi.paginationGoToFirstPage();
//   }

//   onBtLast() {
//     this.gridApi.paginationGoToLastPage();
//   }

//   onBtNext() {
//     this.gridApi.paginationGoToNextPage();
//   }

//   onBtPrevious() {
//     this.gridApi.paginationGoToPreviousPage();
//   }

//   onBtPageOne() {
 
//     this.gridApi.paginationGoToPage(1);
//   }

//   onBtPageTwo() {
//     this.gridApi.paginationGoToPage(2);
//   }

//   onBtPageThree() {
//     this.gridApi.paginationGoToPage(2);
//   }

//   onBtPageFour() {
//     this.gridApi.paginationGoToPage(2);
//   }
// //   columnDefs: ColDef[] = [
//     { headerName:'S.No', field:'id',width:100},
//     { headerName:'Name', field:'name' },
//     { headerName:'Email id', field:'email',width:250},
//     {headerName:'Contact no', field:'phoneNumber'},
//     {headerName:'Action', field:'action',cellRenderer: (params:any)=>{
//     this.eGui = document.createElement('div');
//     this.eGui.setAttribute('class','toggleBox')
//     return  this.eGui.innerHTML = `<tm-toggle  status="primary"></tm-toggle> `;

//     }}
// ];

// rowData = [
//   {id:1,name:'Ramkumar',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312',action:''},
//   {id:2,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
//   {id:3,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
//   {id:4,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
//   {id:5,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
//   {id:6,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
//   {id:7,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},  
//   {id:8,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
//   {id:9,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
//   {id:10,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'}, 
//    {id:11,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'}
// ];
// onFilterTextBoxChanged() {
//   this.gridApi.setQuickFilter(
//     (document.getElementById('filter-text-box') as HTMLInputElement).value
//   );
// }

// onPrintQuickFilterTexts() {
//   this.gridApi.forEachNode(function (rowNode, index) {
//     console.log(
//       'Row ' +
//         index +
//         ' quick filter text is ' +
//         rowNode.quickFilterAggregateText
//     );
//   });
// }

// onGridReady(params: GridReadyEvent) {
//   this.gridApi = params.api;
// }
open(dialog: TemplateRef<any>) {
  this.dialogService.open(
    dialog,
    { context: 'Are you sure do you want Logout?' });
   
}
createUser() {
  this.submitted = true;
  if (this.registrationForm.invalid) {
    return;
  }
 
}
onActionBtn(dialog2: TemplateRef<any>) {
  this.dialogService.open(
    dialog2,
    { context: 'Are you sure do you want Logout?' });
   
}

}


