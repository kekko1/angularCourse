import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-dettaglio-post',
  templateUrl: './dettaglio-post.component.html',
  styleUrls: ['./dettaglio-post.component.css']
})
export class DettaglioPostComponent implements OnInit {
  post:any;
  constructor( private ps : PostService, private activeRoute :ActivatedRoute) {
    this.post = {
      "userId": 0,
      "id": 0,
      "title":"string",
      "body":"string"
    }
  }

  ngOnInit(): void {
    let id:number = Number(this.activeRoute.snapshot.paramMap.get("id"));
    //this.post = this.ps.getPostById(id);
    this.ps.getPostById$(id).subscribe(
      {
        next : post => this.post = post,
        error: e=> console.log(e),
        complete() {
          
        },

      }
    )
  }

}
