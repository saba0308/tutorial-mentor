import { Component, OnInit,TemplateRef  } from '@angular/core';

import { TmDialogService } from '@tmlib/ui-sdk/dialog';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  animations: [
    trigger('slidein', [
      transition(':enter', [
        // when ngif has true
        style({ transform: 'translateX(-100%)' }),
        animate(250, style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        // when ngIf has false
        animate(250, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ],
  providers: [TmDialogService]
})

export class AdminDashboardComponent implements OnInit {
  expanded: boolean = true;
  constructor(private router:Router,private dialogService: TmDialogService) { }

  ngOnInit(): void {
  }
  menuState:string = 'out';

  toggleMenu(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
 logout(){

  this.router.navigate(['/sign-in']);
 }
 open2(dialog: TemplateRef<any>) {
  this.dialogService.open(
    dialog,
    { context: 'Are you sure do you want Logout?' });
}
}
