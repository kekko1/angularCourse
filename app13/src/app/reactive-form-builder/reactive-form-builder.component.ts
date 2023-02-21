import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form-builder.component.css']
})
export class ReactiveFormBuilderComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private fb :FormBuilder) {
    this.loginForm =  this.fb.group({});
  }
  ngOnInit(): void {
    this.loginForm =  this.fb.group({
     // username:{value:"pippo", disabled:false},
      username:["",[Validators.required,this.controllaUsername]],
      password:["",[Validators.required,Validators.minLength(8)]],
      email:["",[Validators.required,Validators.email]],
      loginEmail:[""]
    });
  }
  onSubmit(): void {
    alert("dati inviati");
  }

  cambiaLogin():void{
    //se haio scelto di usare la mail
    // disattiva la validazione su username 
    // attiva validatori su email
    if( this.loginForm.controls['loginEmail'].value ){
      this.loginForm.controls['username'].clearValidators();
      this.loginForm.controls['email'].setValidators([Validators.required,Validators.email]);

    }
    else{
      this.loginForm.controls['email'].clearValidators();
      this.loginForm.controls['username'].setValidators([Validators.required,this.controllaUsername]);
    }
    // aggiorna i criteri di validazione
    this.loginForm.controls['username'].updateValueAndValidity();
    this.loginForm.controls['email'].updateValueAndValidity();
  }

  //funzione che controlla lo username inserito
  controllaUsername(e:AbstractControl):any{
    // non voglio che l'utente usi admin come username
    if(e.value == "admin"){
      return { "admin" :true}
    }
    else return null;
  }
}
