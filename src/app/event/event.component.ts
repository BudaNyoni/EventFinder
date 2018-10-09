import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FirebaseService} from '../firebase.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private router:Router,public fire:FirebaseService) { }

  ngOnInit() {
  }

}
