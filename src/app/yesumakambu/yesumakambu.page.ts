import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yesumakambu',
  templateUrl: './yesumakambu.page.html',
  styleUrls: ['./yesumakambu.page.scss'],
})
export class YesumakambuPage implements OnInit {

  channel:string[]=["Wednesday Intercession Live on Yesu Nde Makambu TV From 18:30-20:30pm",
  "Friday Bible Study Live on Yesu Nde Makambu TV From 18:30pm-20:30pm"
   ,"Saturday Choir Practice Live on Yesu Nde Makambu From TV 18:30pm-20:30pm", 
   "Sunday Service Live on Yesu Nde Makambu TV From 12:30pm -2:30pm"];
  constructor() { }

  ngOnInit() {
  }

}
