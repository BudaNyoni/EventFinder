import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UploadEventComponent } from './upload-event/upload-event.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { LogInComponent } from './log-in/log-in.component';
import {AngularFireModule} from  'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule}  from 'angularfire2/auth';
import {AngularFireStorageModule} from 'angularfire2/storage';
// import {ToasterServiceService} from './toaster-service.service';
// import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { RegisterBusinessPage } from 'eventApp/src/pages/business/register-business/register-business';

var config = {
  apiKey: "AIzaSyD2Pk_6rvhQdp-TqwU5BICiDdaQq5JJUyA",
  authDomain: "eventapp-a1624.firebaseapp.com",
  databaseURL: "https://eventapp-a1624.firebaseio.com",
  projectId: "eventapp-a1624",
  storageBucket: "eventapp-a1624.appspot.com",
  messagingSenderId: "1061940915999"
};
const appRoutes: Routes = [
  { path: 'register', component:RegisterComponent },
  { path: 'upload-event', component: UploadEventComponent },
  { path: 'view', component:ViewComponent },
  { path: 'log-in', component:LogInComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UploadEventComponent,
    RegisterComponent,
    ViewComponent,
    LogInComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(config),

    RouterModule.forRoot(appRoutes),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
