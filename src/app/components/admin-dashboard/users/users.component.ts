import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent, GridApi, } from 'ag-grid-community';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public columnsList:any;
  public gridData:any;
  public actionButtonData:any=[];
  public tmPageButtonData:any=[];
  gridApi!: GridApi;
  paginationPageSize = 10;
  eGui:any;
  constructor() { }

  ngOnInit(): void {
    this.columnsList=[
      {headerName:'S.No', field:'id', filter:false, sortable:true,width:100},
      {headerName:'Name', field:'name', filter:false, sortable:true},
      {headerName:'Email id', field:'email', filter:false, sortable:true,width:250},
      {headerName:'Contact no', field:'phoneNumber', filter:false, sortable:false},
    
    ];
    this.gridData=[
      {id:1,name:'Ramkumar',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
      {id:2,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
      {id:3,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
      {id:4,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
      {id:5,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
      {id:6,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
      {id:7,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},  
      {id:8,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
      {id:9,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
      {id:10,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'}, 
       {id:11,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'}
    ];
    this.actionButtonData.push(
     
      {
        type: 'routing',
        link: 'icon',
        lable: 'delete',
        iconName: 'bb_icon_grid_edit',
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
  }
  
  // Get page buton data
  public getPageBtnEvent(params:any):void{
    console.log(params);
  }
  onBtFirst() {
    this.gridApi.paginationGoToFirstPage();
  }

  onBtLast() {
    this.gridApi.paginationGoToLastPage();
  }

  onBtNext() {
    this.gridApi.paginationGoToNextPage();
  }

  onBtPrevious() {
    this.gridApi.paginationGoToPreviousPage();
  }

  onBtPageOne() {
 
    this.gridApi.paginationGoToPage(1);
  }

  onBtPageTwo() {
    this.gridApi.paginationGoToPage(2);
  }

  onBtPageThree() {
    this.gridApi.paginationGoToPage(2);
  }

  onBtPageFour() {
    this.gridApi.paginationGoToPage(2);
  }
  columnDefs: ColDef[] = [
    { headerName:'S.No', field:'id',width:100},
    { headerName:'Name', field:'name' },
    { headerName:'Email id', field:'email',width:250},
    {headerName:'Contact no', field:'phoneNumber'},
    {headerName:'Action', field:'action',cellRenderer: (params:any)=>{
    this.eGui = document.createElement('div');
    this.eGui.setAttribute('class','toggleBox')
    return  this.eGui.innerHTML = `<tm-toggle  status="primary"></tm-toggle> `;

    }}
];

rowData = [
  {id:1,name:'Ramkumar',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312',action:''},
  {id:2,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
  {id:3,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
  {id:4,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
  {id:5,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
  {id:6,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
  {id:7,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},  
  {id:8,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
  {id:9,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'},
  {id:10,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'}, 
   {id:11,name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312'}
];
onFilterTextBoxChanged() {
  this.gridApi.setQuickFilter(
    (document.getElementById('filter-text-box') as HTMLInputElement).value
  );
}

onPrintQuickFilterTexts() {
  this.gridApi.forEachNode(function (rowNode, index) {
    console.log(
      'Row ' +
        index +
        ' quick filter text is ' +
        rowNode.quickFilterAggregateText
    );
  });
}

onGridReady(params: GridReadyEvent) {
  this.gridApi = params.api;
}

}
