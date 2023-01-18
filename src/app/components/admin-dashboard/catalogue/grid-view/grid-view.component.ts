import { Component, OnInit } from '@angular/core';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';
import { TmDialogService } from '@tmlib/ui-sdk/dialog';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data.service';
@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  hiddenValue:boolean=false;
  libraryData=[
    {image:'post-10.png',
    title:'Top Crypto, Web3, & Blockchain guide',
    description:'Web3 is also known as the third generation of the internet. It aims to remove control from large corporations....',
    category:'Block chain and Web3 development',
    date:'June 24, 2022',
    media:'Video',
    mediaIcon:'videoplayer.svg',
    duration:'42:47'
  },
  {image:'post-7.png',
  title:'Soft Skills Tranining for fresher',
  description:'Inspire your event strategy with these event marketing examples from leading brands include',
  category:'Technology Development',
  date:'June 24, 2022',
  media:'Video',
  mediaIcon:'videoplayer.svg',
  duration:'42:47'
  },
  {image:'post-8.png',
  title:'Design Amazing Training',
  description:'Web3 is also known as the third generation of the internet. It aims to remove control from large corporations....',
  category:'Creative & Design',
  date:'June 19, 2022',
  media:'Audio',
  mediaIcon:'audioplayer.svg',
  duration:'15:01'
  },
  {image:'post-6.png',
  title:'Considerations for surfacing impact',
  description:'Web3 is also known as the third generation of the internet. It aims to remove control from large corporations....',
  category:'Technology Development',
  date:'June 19, 2022',
  media:'Documnet',
  mediaIcon:'doc-3.svg',
  duration:'5 MB'
  }, 
   {image:'post-5.png',
  title:'Top Crypto, Web3, & Blockchain guide',
  description:'Web3 is also known as the third generation of the internet. It aims to remove control from large corporations....',
  category:'Mobile Development',
  date:'June 19, 2022',
  media:'Audio',
  mediaIcon:'audioplayer.svg',
  duration:'23:15'
  },  {image:'post-9.png',
  title:'Creative event promotion ideas',
  description:'Web3 is also known as the third generation of the internet. It aims to remove control from large corporations....',
  category:'Creative & Design',
  date:'June 19, 2022',
  media:'Documnet',
  mediaIcon:'videoplayer.svg',
  duration:'5 MB'
  }
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
