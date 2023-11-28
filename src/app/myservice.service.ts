import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  onClicked(){
    alert("hello amit");
  }
}
