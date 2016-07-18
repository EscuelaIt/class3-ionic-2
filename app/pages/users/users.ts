import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserComponent } from '../../components/user/user';
import { MyHighlight } from '../../components/my-highlight/my-highlight';
import { ReversePipe } from '../../pipes/reverse';
import { UsersService } from '../../providers/users/users';

/*
  Generated class for the UsersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/users/users.html',
  directives: [ UserComponent, MyHighlight ],
  pipes: [ ReversePipe ]
})
export class UsersPage {

  users: any[] = [];

  constructor(
    private nav: NavController,
    private userService: UsersService
  ) {
    this.users = this.userService.load();
  }

}
