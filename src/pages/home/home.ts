import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Post } from '../../app/post.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  postLista: Observable<Post[]>;
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.listarPosts();
  }

  listarPosts(){
    this.postLista = this.http.get<Post[]>(this.url);
    console.log('entro');

  }

  goToSecondPage(post: Post): void {
    this.navCtrl.push('SecondPage', {postEnviar: post});
  }

}
