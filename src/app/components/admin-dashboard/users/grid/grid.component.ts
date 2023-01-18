import { Component } from '@angular/core';

@Component({
  selector: 'tms-grid',
  styleUrls: ['./grid.component.scss'],
  templateUrl: './grid.component.html',
})
export class GridComponent {
  public columnsList:any;
  public gridData:any;
  public actionButtonData:any=[];
  public tmPageButtonData:any=[];

  ngOnInit(){
    this.columnsList=[
      {headerName:'Name', field:'name', filter:false, sortable:true},
      {headerName:'Email', field:'email', filter:false, sortable:true},
      {headerName:'Phone Number', field:'phoneNumber', filter:false, sortable:false},
      {headerName:'Address', field:'address', filter:false, sortable:false},
      {headerName:'City', field:'city', filter:false, sortable:false},
      {headerName:'State', field:'state', filter:false, sortable:false},
      {headerName:'Country', field:'country', filter:false, sortable:false},
    ];
    this.gridData=[
      {name:'Ramkumar',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312',address:'3/93 South Street',city:'Rajapalayam',state:'Tamilnadu',country:'India'},
      {name:'ABCDE',email:'ramkumar.r@techmango.net',phoneNumber:'9751661312',address:'3/93 South Street',city:'Rajapalayam',state:'Tamilnadu',country:'India'},
    ];
    this.actionButtonData.push(
      {
        type: 'routing',
        link: 'icon',
        lable: 'view',
        iconName: 'bb_icon_grid_edit',
        isConditionBased: true,
        status:'',
      },
      {
        type: 'routing',
        link: 'icon',
        lable: 'edit',
        iconName: 'bb_icon_grid_edit',
        isConditionBased: true,
        status:'',
      },
      {
        type: 'routing',
        link: 'icon',
        lable: 'delete',
        iconName: 'bb_icon_grid_edit',
        isConditionBased: true,
        status:'',
      },
      {
        type: 'routing',
        link: 'icon',
        lable: 'checkmark',
        iconName: 'checkmark-outline',
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
}