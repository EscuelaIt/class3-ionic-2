import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the Reverse pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'reverse'
})
@Injectable()
export class ReversePipe {
  /*
    Takes a value and makes it lowercase.
   */
  transform(text: string, args: any[]) {
    return text.split("").reverse().join("");
  }
}
