import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10
    }
  ]

  @Output()
  public OnDelete: EventEmitter<string> = new EventEmitter();

  onDeleterCharacter(id?: string): void {
    if ( !id ) return;
    this.OnDelete.emit(id);
  }
}
