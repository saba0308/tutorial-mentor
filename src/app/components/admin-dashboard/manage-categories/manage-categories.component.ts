import { Component, OnInit,TemplateRef } from '@angular/core';
import { TmDialogService } from '@tmlib/ui-sdk/dialog';
import { ColDef, GridReadyEvent, GridApi, } from 'ag-grid-community';
import { DialogComponent } from './dialog/dialog.component';
function actionCellRenderer(params:any) {
  let eGui = document.createElement("div");

  let editingCells = params.api.getEditingCells();
  // checks if the rowIndex matches in at least one of the editing cells
  let isCurrentRowEditing = editingCells.some((cell:any) => {
    return cell.rowIndex === params.node.rowIndex;
  });

  if (isCurrentRowEditing) {
    eGui.innerHTML = `
    <svg class="action-button update"  data-action="update" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12L10.0011 16L18 8" stroke="green" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    


<svg class="action-button cancel"  data-action="cancel" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 19L12 12M12 12L19 5M12 12L5 19M12 12L5 5" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


`;
  } else {
    eGui.innerHTML = `

<svg  class="action-button edit" data-action="edit"width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.7474 21.348H21" stroke="#012545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.78 4.69982C13.5557 3.77282 14.95 3.63688 15.8962 4.39676C15.9485 4.43799 17.6295 5.74382 17.6295 5.74382C18.669 6.37222 18.992 7.70813 18.3494 8.72762C18.3153 8.78221 8.81195 20.6695 8.81195 20.6695C8.49578 21.0639 8.01583 21.2968 7.50291 21.3024L3.86353 21.348L3.04353 17.8773C2.92866 17.3893 3.04353 16.8768 3.3597 16.4824L12.78 4.69982Z" stroke="#012545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.0209 6.90588L16.4731 11.093" stroke="#012545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    <svg class="action-button delete" data-action="delete" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M19.3249 10.3733C19.3249 10.3733 18.7819 17.1083 18.4669 19.9453C18.3169 21.3003 17.4799 22.0943 16.1089 22.1193C13.4999 22.1663 10.8879 22.1693 8.27991 22.1143C6.96091 22.0873 6.13791 21.2833 5.99091 19.9523C5.67391 17.0903 5.13391 10.3733 5.13391 10.3733" stroke="#012545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20.7082 7.14478H3.75024" stroke="#012545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.4407 7.14476C16.6557 7.14476 15.9797 6.58976 15.8257 5.82076L15.5827 4.60476C15.4327 4.04376 14.9247 3.65576 14.3457 3.65576H10.1127C9.5337 3.65576 9.0257 4.04376 8.8757 4.60476L8.6327 5.82076C8.4787 6.58976 7.8027 7.14476 7.0177 7.14476" stroke="#012545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  }

  return eGui;
}

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss']
})
export class ManageCategoriesComponent implements OnInit {
  gridApi!: GridApi;
  eGui:any;
  gridColumnApi:any;

  defaultColDef:any;
 
  paginationPageSize = 10;
  constructor(private dialogService: TmDialogService) { }

  ngOnInit(): void {
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
    { headerName:'S.No', field:'id',width:80,editable: true},
    { headerName:'Categories Name', field:'name',width:400,editable: true,
    cellRenderer:(params:any)=>{
      var image=document.createElement('span');
      image.setAttribute("class",'gridImage');
      image.style.display='flex';
      image.style.flexDirection='row';
      image.style.padding='20px;'
      var imageArray=['careerDevelopment.png','techSales.png','blockchain.png','technologyDevelopment.png','dataAnalytics.png','advisory.png'];
  if(params.value=='Career Development'){
    return image.innerHTML=`<img  src='../../../../assets/images/${imageArray[0]}'>`+ ' ' +`<span style=' position:absolute; top:1px; left:80px;'>${params.value} </span>`;
  }
  if(params.value=='Tech Sales and Marketing'){
    return image.innerHTML=`<img src='../../../../assets/images/${imageArray[1]}'>`+ ' ' +`<span style=' position:absolute; top:1px; left:80px;'>${params.value} </span>` ;
  }
  if(params.value=='Technology Development'){
    return image.innerHTML=`<img src='../../../../assets/images/${imageArray[3]}'>`+ ' ' +`<span style=' position:absolute; top:1px; left:80px;'>${params.value} </span>` ;
  }
  if(params.value=='Block Chain and Web3 development'){
    return image.innerHTML=`<img src='../../../../assets/images/${imageArray[2]}'>`+ ' ' +`<span style=' position:absolute; top:1px; left:80px;'>${params.value} </span>` ;
  }
  if(params.value=='Data analytics'){
    return image.innerHTML=`<img src='../../../../assets/images/${imageArray[4]}'>`+ ' ' +`<span style=' position:absolute; top:1px; left:80px;'>${params.value} </span>` ;
  }
  if(params.value=='Advisory on career path'){
    return image.innerHTML=`<img src='../../../../assets/images/${imageArray[5]}'>`+ ' ' +`<span style=' position:absolute; top:1px; left:80px;'>${params.value} </span>` ;
  }
      return image.innerHTML=`<img src='../../../../assets/images/${imageArray[1]}'>`+ ' ' +`<span style=' position:absolute; top:1px; left:80px;'>${params.value} </span>` ;
  

  }
  },
    { headerName:'No of Catalogue', field:'catalogue',width:280, editable: true,cellRenderer:(params:any)=>{
      var mediaElement=document.createElement('div');
        
      if(params.value == 'Career Development')
      {
       return mediaElement.innerHTML=`
       <div style="display:flex;gap:6px;">
    <span style="display:flex; height:35px; flex-flow: row nowrap; gap:8px;padding: 10px 8px;border-radius: 8px; background: rgba(2, 105, 241, 0.15);color: rgba(2,105,241);">
        <img width="20px" height="20px" src="../../../../assets/icons/video-2.svg" alt="">
        <span style='position:relative;top:-9px;'>5</span>
    </span>
    <span style="display:flex;height:35px; flex-flow: row nowrap; gap:8px;padding: 10px 8px;border-radius: 8px;background: rgba(255, 140, 66, 0.15);color:  rgba(255, 140, 66);">
        <img  width="20px" height="20px" src="../../../../assets/icons/audio.svg" alt="">
        <span  style='position:relative;top:-9px;'>4</span>
    </span>
    <span style="display:flex;height:35px; flex-flow: row nowrap; gap:8px;padding: 10px 8px;border-radius: 8px;background: rgba(255, 50, 157, 0.1);color: #C357F6;">
        <img  width="20px" height="20px" src="../../../../assets/icons/doc-2.svg" alt="">
        <span  style='position:relative;top:-9px;'>6</span>
    </span>
</div>
      `;
      }
      if(params.value == 'Tech Sales and Marketing')
      {
       return mediaElement.innerHTML=`
       <div style="display:flex;gap:6px;">
    <span style="display:flex; height:35px; flex-flow: row nowrap; gap:8px;padding: 10px 8px;border-radius: 8px; background: rgba(2, 105, 241, 0.15);color: rgba(2,105,241);">
        <img width="20px" height="20px" src="../../../../assets/icons/video-2.svg" alt="">
        <span style='position:relative;top:-9px;'>10</span>
    </span>
    
    <span style="display:flex;height:35px; flex-flow: row nowrap; gap:8px;padding: 10px 8px;border-radius: 8px;background: rgba(255, 50, 157, 0.1);color: #C357F6;">
        <img  width="20px" height="20px" src="../../../../assets/icons/doc-2.svg" alt="">
        <span  style='position:relative;top:-9px;'>12</span>
    </span>
</div>
      `;
      }
      if(params.value == 'Technology Development')
      {
       return mediaElement.innerHTML=`
       <div style="display:flex;gap:6px;">
  
    <span style="display:flex;height:35px; flex-flow: row nowrap; gap:8px;padding: 10px 8px;border-radius: 8px;background: rgba(255, 140, 66, 0.15);color:  rgba(255, 140, 66);">
        <img  width="20px" height="20px" src="../../../../assets/icons/audio.svg" alt="">
        <span  style='position:relative;top:-9px;'>4</span>
    </span>
    <span style="display:flex;height:35px; flex-flow: row nowrap; gap:8px;padding: 10px 8px;border-radius: 8px;background: rgba(255, 50, 157, 0.1);color: #C357F6;">
        <img  width="20px" height="20px" src="../../../../assets/icons/doc-2.svg" alt="">
        <span  style='position:relative;top:-9px;'>6</span>
    </span>
</div>
      `;
      }
      if(params.value == 'Block Chain and Web3 development')
      {
       return mediaElement.innerHTML=`
       <div style="display:flex;gap:6px;">
    <span style="display:flex; height:35px; flex-flow: row nowrap; gap:8px;padding: 10px 8px;border-radius: 8px; background: rgba(2, 105, 241, 0.15);color: rgba(2,105,241);">
        <img width="20px" height="20px" src="../../../../assets/icons/video-2.svg" alt="">
        <span style='position:relative;top:-9px;'>15</span>
    </span>
   
</div>
      `;
      }
      if(params.value == 'Data analytics')
      {
       return mediaElement.innerHTML=`
       <div style="display:flex;gap:6px;">
    <span style="display:flex; height:35px; flex-flow: row nowrap; gap:8px;padding: 10px 8px;border-radius: 8px; background: rgba(2, 105, 241, 0.15);color: rgba(2,105,241);">
        <img width="20px" height="20px" src="../../../../assets/icons/video-2.svg" alt="">
        <span style='position:relative;top:-9px;'>13</span>
    </span>
    <span style="display:flex;height:35px; flex-flow: row nowrap; gap:8px;padding: 10px 8px;border-radius: 8px;background: rgba(255, 140, 66, 0.15);color:  rgba(255, 140, 66);">
        <img  width="20px" height="20px" src="../../../../assets/icons/audio.svg" alt="">
        <span  style='position:relative;top:-9px;'>20</span>
    </span>
    <span style="display:flex;height:35px; flex-flow: row nowrap; gap:8px;padding: 10px 8px;border-radius: 8px;background: rgba(255, 50, 157, 0.1);color: #C357F6;">
        <img  width="20px" height="20px" src="../../../../assets/icons/doc-2.svg" alt="">
        <span  style='position:relative;top:-9px;'>4</span>
    </span>
</div>
      `;
      }
      if(params.value == 'Advisory on career path')
      {
       return mediaElement.innerHTML=`
       <div style="display:flex;gap:6px;">
    <span style="display:flex; height:35px; flex-flow: row nowrap; gap:8px;padding: 10px 8px;border-radius: 8px; background: rgba(2, 105, 241, 0.15);color: rgba(2,105,241);">
        <img width="20px" height="20px" src="../../../../assets/icons/video-2.svg" alt="">
        <span style='position:relative;top:-9px;'>13</span>
    </span>
    <span style="display:flex;height:35px; flex-flow: row nowrap; gap:8px;padding: 10px 8px;border-radius: 8px;background: rgba(255, 140, 66, 0.15);color:  rgba(255, 140, 66);">
        <img  width="20px" height="20px" src="../../../../assets/icons/audio.svg" alt="">
        <span  style='position:relative;top:-9px;'>12</span>
    </span>
    
</div>
      `;
      }
     
      return;
    }},

    {headerName:'Action', field:'action',width:160,editable: false,cellRenderer: actionCellRenderer}
];

rowData = [
  {id:1,name:'Career Development',catalogue:'Career Development',image:'../../../../assets/images/careerDevelopment.png'},
  {id:2,name:'Tech Sales and Marketing',catalogue:'Tech Sales and Marketing'},
  {id:3,name:'Technology Development',catalogue:'Technology Development'},
  {id:4,name:'Block Chain and Web3 development',catalogue:'Block Chain and Web3 development'},
  {id:5,name:'Data analytics',catalogue:'Data analytics'},
  {id:6,name:'Advisory on career path',catalogue:'Advisory on career path'}
  
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
  this.gridColumnApi = params.columnApi;
}
onCellClicked(params:any) {
  // Handle click event for action cells
  if (params.column.colId === "action" && params.event.target.dataset.action) {
    let action = params.event.target.dataset.action;

    if (action === "edit") {
      params.api.startEditingCell({
        rowIndex: params.node.rowIndex,
        // gets the first columnKey
        colKey: params.columnApi.getDisplayedCenterColumns()[0].colId
      });
    }

    if (action === "delete") {
      params.api.applyTransaction({
        remove: [params.node.data]
      });
    }

    if (action === "update") {
      params.api.stopEditing(false);
    }

    if (action === "cancel") {
      params.api.stopEditing(true);
    }
  }
}

onRowEditingStarted(params:any) {
  params.api.refreshCells({
    columns: ["action"],
    rowNodes: [params.node],
    force: true
  });
}
onRowEditingStopped(params:any) {
  params.api.refreshCells({
    columns: ["action"],
    rowNodes: [params.node],
    force: true
  });
}
open() {
  this.dialogService.open(DialogComponent, {
    
  });
}
}
