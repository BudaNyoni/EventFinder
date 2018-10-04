import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UploadEventComponent } from './upload-event/upload-event.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { LogInComponent } from './log-in/log-in.component';
// import { RegisterBusinessPage } from 'eventApp/src/pages/business/register-business/register-business';


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
    LogInComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
