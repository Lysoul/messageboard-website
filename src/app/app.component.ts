import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: '<h1> Hello {{title}} </h1> <message> </message>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'World';
}
