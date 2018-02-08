import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 dataDate: any;
    constructor(public navCtrl: NavController, private datePicker: DatePicker) {

  }
    showDatePicker(){
this.datePicker.show({
  date: new Date(),
  mode: 'date',
  androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
}).then(
  date => this.dataDate=date,
  err => console.log('Error occurred while getting date: ', err)
);
    }

}
