import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username="";
  errorMessage="Invalid Credentials!";
  logininvalid=false;
  password="";
  constructor(private rout:Router) { 
   
  }
login(){
  if(this.username=="surekha" && this.password=="123"){
    this.logininvalid=false; 
    
    this.rout.navigate(['quiz']);
    alert("Welocme :"+this.username);
  }else{
    this.logininvalid=true;
    alert("Invalid Credentials :"+this.username);
  }
 
}
  ngOnInit() {
  }

}