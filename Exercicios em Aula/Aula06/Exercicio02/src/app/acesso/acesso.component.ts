import { Component } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrl: './acesso.component.css'
})
export class AcessoComponent {
  permitions = ["root", "admin", "user"];
  login: string = "";
  btnDisabled: boolean = true;
  onLogando(){

    if(this.login == "root"){
      this.btnDisabled = false;

    }
    else if(this.login == "admin"){
      this.btnDisabled = false;
    }
    else if(this.login == "user"){
      this.btnDisabled = false;
    }
    else(
      this.btnDisabled = true
    )
  }
}
