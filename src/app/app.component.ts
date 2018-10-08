import { Component, ViewContainerRef  } from '@angular/core';
import {FirebaseService} from '../app/firebase.service';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
// import {ToasterServiceService} from './toaster-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user =  new Array();
  constructor(private fire:FirebaseService){
    // this.toastr.setRootViewContainerRef(vcr);
    console.log('users')
    // fire.getuser().then((data:any) =>{
    // })
  }
 
  }
