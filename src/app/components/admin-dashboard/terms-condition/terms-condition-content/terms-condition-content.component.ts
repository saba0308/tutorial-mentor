import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-terms-condition-content',
  templateUrl: './terms-condition-content.component.html',
  styleUrls: ['./terms-condition-content.component.scss']
})
export class TermsConditionContentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 editCondition(){
  this.router.navigate(['/admin/terms-condition/edit'])
 }
}
