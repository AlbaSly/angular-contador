import { Component } from "@angular/core";

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html'
})

export class HeroComponent {
  nme:string='Iroman';
  age:number=40;

  get nameCaps():string {
    return this.nme.toUpperCase();
  }

  getName():string {
    return `${this.nme} - ${this.age}`;
  }

  changeName(name:string):void {
    this.nme = name;
  }

  changeAge(age:number):void {
    this.age = age;
  }
}
