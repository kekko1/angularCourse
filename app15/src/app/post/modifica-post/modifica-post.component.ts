import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
@Component({
  selector: 'app-modifica-post',
  templateUrl: './modifica-post.component.html',
  styleUrls: ['./modifica-post.component.css']
})
export class ModificaPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {
 /*    let post : Post ={
      id:this.form.controls['id'].value
    } */
  }
}
