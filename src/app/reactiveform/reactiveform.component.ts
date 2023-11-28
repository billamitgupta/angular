import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
 contactForm = new FormGroup({
  firstname :new FormControl(),
  lastname : new FormControl(),
  email: new FormControl(),
  gender: new FormControl(),
  isMarried: new FormControl(),
  country: new FormControl()

  
 })
 onSubmit()
  {
    console.log(this.contactForm.value);
  }
  countryList:country[]=[
    new country("1","India"),
    new country("2","USA"),
    new country("3","England")
  ];

}
export class country{
  id:string;
  name:string;

  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }

}


