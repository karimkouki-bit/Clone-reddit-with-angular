import { Component } from '@angular/core';
import { article } from './article/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cloneReddit';
  Artical!: article[];

  constructor() {
    this.Artical = [
      new article("Angular tutorial", "https://www.youtube.com/c/Freecodecamp", 5),
      new article("React tutorial", "https://www.youtube.com/c/Freecodecamp", 56),
      new article("Html tutorial", "https://www.youtube.com/c/Freecodecamp", 3),
    ]
  }
  add_article(title:HTMLInputElement, link:HTMLInputElement){
    console.log(title.value, link.value);
    this.Artical.push( new article(title.value, link.value, 65))
    title.value = '';
    link.value = ''
  }

  storeData():article[]{
    return this.Artical.sort((a:article, b: article) => {
      return b.votes - a.votes;
    })
  }
}
