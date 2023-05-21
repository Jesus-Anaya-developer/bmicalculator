import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {

  bmi: number = 0;
  resultado: string = '';
  interpretacion: string = '';

  constructor(private route: ActivatedRoute) {
    this.bmi = +route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getResultado();
  }

  getResultado() {

    if (this.bmi < 15) {
      this.resultado = 'Muy bajo peso';
      this.interpretacion = 'Tienes un peso corporal mas bajo de lo normal. Puedes comer un poco mas';
    } else if (this.bmi >= 15 && this.bmi < 16) {
      this.resultado = 'Peso muy bajo';
      this.interpretacion = 'Tienes un peso corporal mas bajo de lo normal. Puedes comer un poco mas';
    } else if (this.bmi >= 16 && this.bmi < 18.5) {
      this.resultado = 'Peso insuficiente';
      this.interpretacion = 'Tienes un peso corporal mas bajo de lo normal. Puedes comer un poco mas';
    } else if (this.bmi >= 18.5 && this.bmi < 25) {
      this.resultado = 'Normal (peso saludable)';
      this.interpretacion = 'Tienes un peso corporal normal. ¡Buen trabajo!';
    } else if (this.bmi >= 25 && this.bmi < 30) {
      this.resultado = 'Sobrepeso';
      this.interpretacion = 'Tienes un peso corporal superior al normal. Intenta hacer mas ejercicio';
    } else if (this.bmi >= 30 && this.bmi < 35) {
      this.resultado = 'Moderadamente obeso';
      this.interpretacion = 'Tienes un peso corporal superior al normal. Intenta hacer mas ejercicio';
    } else if (this.bmi >= 35 && this.bmi < 40) {
      this.resultado = 'Obesidad severa';
      this.interpretacion = 'Tienes un peso corporal superior al normal. Intenta hacer mas ejercicio';
    } else if (this.bmi >= 40) {
      this.resultado = 'Obesidad muy grave';
      this.interpretacion = 'Tienes un peso corporal superior al normal. Intenta hacer mas ejercicio';
    }

  }

}
