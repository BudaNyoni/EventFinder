import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

declare var toastr:any

@Injectable({
  providedIn: 'root'
})
export class ToasterServiceService {

  constructor() { }
  Success(title:string,message?:string){
   toastr.success(title,message)
  }

}
