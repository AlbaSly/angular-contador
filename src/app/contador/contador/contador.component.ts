import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
<h1>{{titulo}}</h1>
<h3>La base es: <strong> {{base}} </strong></h3>

<button (click)="updateNumber(-base);">- {{base}}</button>
<span> {{number}} </span>
<button (click)="updateNumber(base);">+ {{base}}</button>
  `
})
export class ContadorComponent {
  public titulo :String = 'ContadorApp';
  public number :number = 0;
  public base   :number = 5;
  public updateNumber(n:number):void {
    this.number += n;
  }
}
