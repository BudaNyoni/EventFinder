import { Component } from '@angular/core';
import {FirebaseService} from '../app/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user =  new Array();
  constructor(private fire:FirebaseService){
    console.log('users')
    // fire.getuser().then((data:any) =>{
    // })
  }
}
