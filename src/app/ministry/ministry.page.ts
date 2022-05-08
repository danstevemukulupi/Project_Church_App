import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-ministry',
  templateUrl: './ministry.page.html',
  styleUrls: ['./ministry.page.scss'],
})
export class MinistryPage implements OnInit {
min:any="";
  constructor(private storage:Storage, private navpage:NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.storage.create()
    .then(()=>{
      this.storage.get('minist')
      .then((ministry)=>{
        this.min = ministry;
      })
      .catch();
    })
    .catch();
  }

  youthsurvey(){
  this.storage.create()
  .then( ()=>{
    this.storage.set("minist", this.min)
    .then(()=>{
      this.navpage.navigateBack('/meditation');
      })
    .catch();
  } )
  .catch();
  }
}
