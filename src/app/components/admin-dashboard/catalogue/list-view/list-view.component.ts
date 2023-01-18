import { Component, OnInit } from '@angular/core';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';
import { TmDialogService } from '@tmlib/ui-sdk/dialog';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data.service';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  hiddenValue:boolean=false;
  libraryData=[
  {image:'blockchain-guide.png',
  title:'Top Crypto, Web3, & Blockchain guide',
  description:'Web3 is also known as the third generation of the internet. It aims to remove control from large corporations....',
  category:'Block chain and Web3 development',
  date:'June 24, 2022',
  media:'Video',
  mediaIcon:'videoplayer.svg',
  duration:'42:47'
},
{image:'outstanding.png',
title:'Outstanding Event Marketing Examples',
description:'Inspire your event strategy with these event marketing examples from leading brands include',
category:'Advisory on career path',
date:'June 19, 2022',
media:'Video',
mediaIcon:'videoplayer.svg',
duration:'30:15'
},
{image:'integration.png',
title:'Way software integration Drive',
description:'Data integration is at the core of any data management and Big Data strategy, and yet just like so many others....',
category:'Technology Development',
date:'June 19, 2022',
media:'Audio',
mediaIcon:'audioplayer.svg',
duration:'15:01'
},
{image:'post-1.png',
title:'Parctical Spirituallity for Beginners',
description:'pratikshanam vardhamaanam : More beautiful every time we see, hear and chant !! Sloka 4.16.1....',
category:'Pancha Stuti Class',
date:'June 19, 2022',
media:'Audio',
mediaIcon:'audioplayer.svg',
duration:'15:01'
}, 

];
  constructor(private dataService: DataService,private dialogService: TmDialogService,private router:Router) { }
  searchText!: string;
  ngOnInit(): void {
    this.dataService.getBooleanValue().subscribe(x => {
      this.hiddenValue = x;
    }) 
  }
  items = [{ title: 'View' }, { title: 'Edit' },{ title: 'Delete' }];
  filter() {
    this.dialogService.open(FilterDialogComponent, {
      
    });
  
  }
  createLibrary(){
    this.router.navigate(['/admin/catalogue/create-library'])
  }
}
