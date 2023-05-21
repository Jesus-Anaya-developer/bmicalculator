import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  edad: number = 25;
  peso: number = 60;
  altura: number = 170;
  sexo: string = 'Masculino';

  constructor(private router: Router) { }

  cambiarAltura(event: any) {
    this.altura = event.target.value;
  }

  Masculino() {
    this.sexo = 'Masculino';
  }

  Femenino() {
    this.sexo = 'Femenino';
  }

  calcularBMI() {
    const bmi = this.peso / Math.pow(this.altura / 100, 2);

    this.router.navigate(['/resultado', bmi.toFixed(1)]);
  }

}
