import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-elenco-post',
  templateUrl: './elenco-post.component.html',
  styleUrls: ['./elenco-post.component.css']
})
export class ElencoPostComponent implements OnInit {

  posts:Post[];
 
  constructor(private ep:PostService) {
    this.posts=[];
   }

  ngOnInit(): void {
    this.ep.getPost$().subscribe(
      {
        next : elenco => this.posts = elenco,
        error: e=> console.log(e),
        complete() {
          
        },

      }
    )
  }

}
