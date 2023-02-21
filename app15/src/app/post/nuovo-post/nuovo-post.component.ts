import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nuovo-post',
  templateUrl: './nuovo-post.component.html',
  styleUrls: ['./nuovo-post.component.css']
})
export class NuovoPostComponent implements OnInit {

  form:FormGroup;
  constructor() {
    this.form= new FormGroup({
      id:new FormControl(0),
      userId:new FormControl(0),
      title:new FormControl(""),
      body:new FormControl(""),
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    
  }

}
