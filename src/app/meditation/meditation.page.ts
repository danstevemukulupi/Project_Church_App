import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage-angular';
@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.page.html',
  styleUrls: ['./meditation.page.scss'],
})
export class MeditationPage implements OnInit {
min:any="";
  constructor(private storage:Storage) { }

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

}
