import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { elencoPost } from '../data/elencoPost';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { compileClassMetadata } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  url:string= "https://jsonplaceholder.typicode.com/posts";
  constructor( private http : HttpClient) {
  }

  getPostById(id: number): any {
    return elencoPost.find(x=> x.id == id);
  }
  getPostById$(id: number): Observable<Post> {
    return this.http.get<Post>(this.url+"/"+id);
  
  }

  getPost(): Post[] {
    return elencoPost;
  }

  getPost$(): Observable<Post[]> {
    return this.http.get<Post[]> (this.url);
  }

  addPost(post:Post): void {
  }
  updatePost(post:Post):void{
    let i = elencoPost.findIndex(
      p=>p.id==post.id
    )
  }

  deletePost(id:number):void{
    
  }

}
