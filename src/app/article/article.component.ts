import { Component, OnInit, Input } from '@angular/core';
import { article } from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()Articls!:article

  vote_up(){
    this.Articls.voteUp()
  }

  vote_down(){
    this.Articls.voteDown()
  }
  ngOnInit(): void {
  }

}
