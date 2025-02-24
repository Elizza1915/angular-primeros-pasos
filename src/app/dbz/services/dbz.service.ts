import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  addCharacter(character: Character):void{
    const newCharacter: Character = {
      id: uuid(), ...character
    }  //  (...) agarra todas las demás propiedades del objeto y espárcelas a este nuevo objeto que estoy creando
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id:string):void{
    this.characters = this.characters.filter ( character => character.id !== id);
  }

}
