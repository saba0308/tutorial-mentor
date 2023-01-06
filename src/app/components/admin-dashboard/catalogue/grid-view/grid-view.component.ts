import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
 
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
  title:'Top Crypto, Web3, & Blockchain guide',
  description:'Web3 is also known as the third generation of the internet. It aims to remove control from large corporations....',
  category:'',
  date:'',
  media:'',
  mediaIcon:'videoplayer.svg',
  duration:''
  },
  {image:'',
  title:'Top Crypto, Web3, & Blockchain guide',
  description:'Web3 is also known as the third generation of the internet. It aims to remove control from large corporations....',
  category:'',
  date:'',
  media:'',
  mediaIcon:'videoplayer.svg',
  duration:''
  },  {image:'',
  title:'Top Crypto, Web3, & Blockchain guide',
  description:'Web3 is also known as the third generation of the internet. It aims to remove control from large corporations....',
  category:'',
  date:'',
  media:'',
  mediaIcon:'videoplayer.svg',
  duration:''
  },  {image:'',
  title:'Top Crypto, Web3, & Blockchain guide',
  description:'Web3 is also known as the third generation of the internet. It aims to remove control from large corporations....',
  category:'',
  date:'',
  media:'',
  mediaIcon:'videoplayer.svg',
  duration:''
  }
];
constructor() { }

ngOnInit(): void {
}
items = [{ title: 'Profile' }, { title: 'Log out' }];

}
