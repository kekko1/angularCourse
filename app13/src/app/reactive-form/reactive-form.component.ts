import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  loginForm:FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl(""),
      password: new FormControl("")
    });
    
   }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      username: new FormControl("",Validators.required),
      password: new FormControl(""),
      contatti: new FormGroup({
          telefono: new FormControl("000 000"),
          email: new FormControl("info@pippo.com")
        })
    });

    /*  
    //setValue tutti i campi devi mettere
    this.loginForm.setValue({
      username: "nuovoUtente",
      password: "nuovaPassword"
    });
    //solo un campo alla volta oppure uno solo
    this.loginForm.patchValue({
      password: "1234"
    });
    */
  }
  onSubmit(): void {
    alert("dati inviati");
  }

}
