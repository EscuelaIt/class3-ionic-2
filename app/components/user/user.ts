import { Component, Input } from '@angular/core';

/*
  Generated class for the User component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'my-user',
  templateUrl: 'build/components/user/user.html'
})
export class UserComponent {

  @Input() user: any;
  @Input() text: any;

  constructor() {}
}
