import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-params',
  templateUrl: 'params.html'
})
export class ParamsPage {

  color: any;

  constructor(public storage: Storage) {

    if(this.getColor() == undefined){
      this.setColor('light');
    }

    this.color = this.getColor();

    console.log(this.color);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParamsPage');
  }

  setColor(color){
    this.storage.set('color', color);
    console.log(this.storage.get('color'));
  }

  getColor(){
    return this.storage.get('color');
  }


}
