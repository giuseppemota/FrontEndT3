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
  onLogando() {

    if (this.permitions.includes(this.login)) {
      this.btnDisabled = false
    }

    else (
      this.btnDisabled = true
    )
  }
  onClick() {
    alert("Acesso liberado")
  }
}
