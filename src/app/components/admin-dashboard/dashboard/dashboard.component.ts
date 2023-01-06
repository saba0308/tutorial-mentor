import { Component, OnInit } from '@angular/core';
import { style, animate, animateChild, transition, trigger, query as q, stagger } from '@angular/animations';
const query = (s:any,a:any,o={optional:true})=>q(s,a,o);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    // nice stagger effect when showing existing elements
    trigger('list', [
      transition(':enter', [
        // child animation selector + stagger
        query('@items', 
          stagger(600, animateChild())
        )
      ]),
    ]),
    trigger('items', [
      // cubic-bezier for a tiny bouncing feel
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('1s cubic-bezier(.8,-0.6,0.2,1.5)', 
          style({ transform: 'scale(1)', opacity: 1 }))
      ]),   
    ])
  ],
})
export class DashboardComponent implements OnInit {
upload=[
  {title:'Total Uploads',icon:'../../../assets/icons/Upload.svg',count:160},
  {title:'Video Upload',icon:'../../../assets/icons/Video.svg',count:35},
  {title:'Audio Upload',icon:'../../../assets/icons/Voice.svg',count:75},
  {title:'Document Upload',icon:'../../../assets/icons/doc.svg',count:50}

]
postData=[
  {image:'../../../assets/images/post-1.png',title:'Top Crypto, Web3, & Blockchain guide',category:'Program Administration',date:'OCT 24, 2022',user:'Miles English'},
  {image:'../../../assets/images/post-2.png',title:'Boosting Virtual and Hybrid Event',category:'Technology Development',date:'OCt 20, 2022',user:'Esther Howard'},
  {image:'../../../assets/images/post-3.png',title:'Top Crypto, Web3, & Blockchain guide',category:'Program Administration',date:'Oct 4, 2022',user:'Albert Flores'},
  {image:'../../../assets/images/post-4.png',title:'Top Crypto, Web3, & Blockchain guide',category:'Program Administration',date:'Sep 23, 2022',user:'Marvin McKinney'},
  {image:'../../../assets/images/post-1.png',title:'Top Crypto, Web3, & Blockchain guide',category:'Program Administration',date:'June 24, 2022',user:'Marvin McKinney'},

]
categoryData=[
{name:'Users',title:'Total No Of Usres',count:'2,856',icon:'../../../assets/icons/user-2.svg'},
{name:'Categories',title:'No of Categories',count:'24',icon:'../../../assets/icons/folder-1.svg'},

]
  constructor() { }

  ngOnInit(): void {
  }

}
