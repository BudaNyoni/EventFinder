import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireStorage} from  'angularfire2/storage'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { promise, Key } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  userRef: AngularFireList<any>;
  events: Observable<any[]>
  profileUrl;
  currentName;
  state;
  constructor( private db: AngularFireDatabase, private storage: AngularFireStorage, private authen: AngularFireAuth) { 
 
  }
 
  getAuthState(){
    return new Promise ((accpt, rej) =>{ 
      this.authen.auth.onAuthStateChanged(user =>{
        if (user){
          this.state = 1;
        }
        else{
          this.state = 0;
        }
        accpt(this.state);
       });
    })
  }

  registerBusiness(email, passw, compName, yourName, img){
    return new Promise ((accpt, rej)=>{
      this.authen.auth.createUserWithEmailAndPassword(email,passw).then(() =>{
        this.authen.authState.subscribe(data =>{
          var userId =  data.uid;
          var dbPath =  'users/' + data.uid ; 
          this.userRef = this.db.list(dbPath);
          this.userRef.push({
            name: yourName,
            compName: compName,
            compimg:img
          })
            accpt('registered')
          })},
          error => 
          {
           rej(error.message)
          })
    })
  }


  login(email,passw){
    return new Promise ((accpt, rej)=>{
     this.authen.auth.signInWithEmailAndPassword(email,passw).then(()=>{
          accpt('worked')
          }, 
          error => 
          {
           rej(error.message)
          })
    })
  }

  addEventPicture(url){
    return new Promise ((accpt, rej) =>{
      var name = 'name'
      this.storage.ref('pictures/' + name).putString(url,'data_url').then(()=>{
      accpt('worked')
      })
    })
  }

  // getdownloadURL(name2){
  //   return new Promise ((accpt, rej) =>{
  //     var name = 'name'
  //     const ref = this.storage.ref('pictures/' + name);
  //     this.profileUrl = ref.getDownloadURL();
  //     console.log(this.profileUrl.snapshotChanges)
  //     //accpt(this.profileUrl)
  //   })
  // }


  getuser(){
    return new Promise ((accpt, rej) =>{ 
      this.authen.authState.subscribe(data =>{
        var dbPath = 'users/' + data.uid;  
        console.log(data.uid)
         this.userRef = this.db.list(dbPath);
         this.events = this.userRef.snapshotChanges().pipe(
         map(changes => 
         changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))));
          accpt (this.events);
        });
     })
  }

  addEvent(name,desc, img, date, startTIme, endTIme, location, fee, busName){
    this.currentName = busName;
    return new Promise ((accpt, rej)=>{
          var dbPath = 'events/' + this.currentName; 
          this.userRef = this.db.list(dbPath);
          this.userRef.push({
            eventName: name,
            eventDesc: desc,
            date: date,
            startTIme: startTIme,
            endTIme: endTIme,
            location:location,
            fee: fee,
            img: img
          });   
          accpt('added')      
    })
  }

  viewEvent(name){
    return new Promise ((accpt, rej) =>{ 
      this.authen.authState.subscribe(data =>{
        var dbPath = 'events/' + name;  
         this.userRef = this.db.list(dbPath);
         this.events = this.userRef.snapshotChanges().pipe(
         map(changes => 
         changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))));
          accpt (this.events);
        });
     })
  } 


    // return new Promise ((accpt, rej) =>{ 
    //   this.authen.authState.subscribe(data =>{
    //     var dbPath = 'events/' + this.currentName;  
    //      this.userRef = this.db.list(dbPath);
    //      this.events = this.userRef.snapshotChanges().pipe(
    //      map(changes => 
    //      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))));
    //       accpt (this.events);
    //     });
    //  })
    

}
