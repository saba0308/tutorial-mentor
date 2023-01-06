import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-library',
  templateUrl: './view-library.component.html',
  styleUrls: ['./view-library.component.scss']
})
export class ViewLibraryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  backToLibrary(){
    this.router.navigate(['/admin/catalogue/library/list-view'])
  }
}
