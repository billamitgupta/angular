import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '<h1>Welcome</h1><p>hello there i am using angular</p>',
  styles :['h1{color:red}','p{background-color:green}']
})
export class HomeComponent {
  title = 'blog';
}
