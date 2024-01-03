import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList:Character[]=[] ;

  @Output()
  public onDelete: EventEmitter<string>=new EventEmitter();


  emitId(character:Character):void{
    this.onDelete.emit(character.id)
  }

  onDeleteCharacter(index:number):void{
    //TODO emitir id del personaje
    console.log(index)
  }
}
