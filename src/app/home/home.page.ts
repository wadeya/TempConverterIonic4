import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  temp = {
    celsius: null,
    fahrenheit: null
  }
  constructor(public navCtrl: NavController) {

  }

  tempConvertFahrenheit() {
    // this.temp.fahrenheit = this.temp.celsius;
    if(this.temp.celsius != null){
      this.temp.fahrenheit = ((this.temp.celsius) * 9/5) + 32 + ' °Fahrenheit'
    }
    if(this.temp.celsius === ''){
      this.temp.fahrenheit = ''
    }
  }

  tempConvertCelsius(){
    if(this.temp.fahrenheit != null)
    {
      this.temp.celsius = ((this.temp.fahrenheit) - 32) * 5/9 + ' °Celsius'
    }

    if(this.temp.fahrenheit === ''){
      this.temp.celsius = ''
    }
  }
}
