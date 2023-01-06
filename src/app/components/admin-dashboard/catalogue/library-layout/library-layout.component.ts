import { Component, OnInit } from '@angular/core';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';
import { TmDialogService } from '@tmlib/ui-sdk/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-library-layout',
  templateUrl: './library-layout.component.html',
  styleUrls: ['./library-layout.component.scss']
})
export class LibraryLayoutComponent implements OnInit {

  constructor(private dialogService: TmDialogService,private router:Router) { }

  ngOnInit(): void {
  }
  filter() {
    this.dialogService.open(FilterDialogComponent, {
      
    });
  }
  createLibrary(){
    this.router.navigate(['/admin/catalogue/create-library'])
  }
}
