import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '../../app/post.interface';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  postObtenido: Post;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.postObtenido = this.navParams.get('postEnviar');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

}
