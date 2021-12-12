import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  heros: string[] = ['Spíderman', 'Ironman', 'Hulk', 'Thor', 'Capitain America'];
  heroErased:string = '';
  deleteHero(heroName: string):void {
    this.heroErased = this.heros.find(hero => hero === heroName) || '';
    this.heros = this.heros.filter(hero => hero !== heroName);
  }

  deleteFirstHero():void {
    this.heroErased = this.heros.shift() ?? '';
  }
}
