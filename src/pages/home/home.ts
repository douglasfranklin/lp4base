import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public nome_usuario = "Joaquim da Fonseca";

  public numero_1:number = 0;
  public numero_2:number = 0;
  public resultado:number = 0;

  // Quando coloca tipo na variável, você está restringindo o tipo de calor que ela pode receber
  // public nome_usuario:string = "";

  constructor(public navCtrl: NavController) {
    // this.resultado = this.somaDoisNumeros(6,8);
  }

  // public somaDoisNumeros(): void {
  //   // alert("minha função funcionou");
  //   alert(5+2);
  // }

  public somaDoisNumeros(){
    // return num1+num2;
    this.resultado = parseFloat((parseFloat(this.numero_1.toString())+parseFloat(this.numero_2.toString())).toFixed(3));
  }

}
