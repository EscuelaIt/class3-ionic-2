import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Users provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsersService {
  data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  load(): any[] {
    return [
      {
        name: 'Felipe',
        lastname: 'Molina',
        birthday: new Date()
      },
      {
        name: 'Andrea',
        lastname: 'Molina',
        birthday: new Date()
      }
    ];
  }

  createUser(){
    //create
  }

  deleteUser(){
    //delete
  }
}

