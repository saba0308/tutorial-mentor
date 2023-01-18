import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';
import { TmDialogService } from '@tmlib/ui-sdk/dialog';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data.service';
@Component({
  selector: 'app-library-layout',
  templateUrl: './library-layout.component.html',
  styleUrls: ['./library-layout.component.scss']
})
export class LibraryLayoutComponent implements OnInit {
hiddenValue:boolean=false;
rowData=6;
buttonParentValue!:string;
falseToTrue = false;
searchText = '';
  constructor(private dataService: DataService,private dialogService: TmDialogService,private router:Router) { }
  items = [
    { title: 'Create Audio/ Document Library' ,
      link:'/admin/catalogue/create-library-upload'
  },
    { title: 'Create YouTube Library ',
    link:'/admin/catalogue/create-library'
  },
  ];
  ngOnInit(): void {
    this.dataService.getBooleanValue().subscribe(x => {
      this.hiddenValue = x;
    }) 
  }
  

  filter() {
    this.dialogService.open(FilterDialogComponent, {
      
    });
  
  }
  createLibrary(){
    this.router.navigate(['/admin/catalogue/create-library'])
  }
}
