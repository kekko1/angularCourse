import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  intestazione:string="Intestazione";
  testo:string="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe repudiandae eius quas quis rem ab quo eaque ut deleniti ullam cumque nostrum nihil omnis assumenda, magni eos, molestias ipsa dolorum ";
  immagine:string="./assets/img/immagine.jpg";
}
