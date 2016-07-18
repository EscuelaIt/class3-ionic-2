import { Directive, ElementRef } from '@angular/core';

/*
  Generated class for the MyHighlight directive.

  See https://angular.io/docs/ts/latest/api/core/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[my-highlight]' // Attribute selector
})
export class MyHighlight {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
