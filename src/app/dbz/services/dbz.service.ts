import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";



@Injectable({
    providedIn: 'root'
})
export class DbzService {
    public characters:Character[]=[{
        id:uuid(),
        name:'Krilin',
        power:1000
    },{
        id:uuid(),
        name:'Goku',
        power:9500
    },
    {
        id:uuid(),
        name:'Vegeta',
        power:7500
    }
    ];

    // onDeleteCharacter(i:number):void{
    //     this.characters.splice(i,1);
    // };

    deleteCharacterById(id:string){
        this.characters=this.characters.filter(character => character.id !== id);
    }
    
    addCharacter(character:Character):void{
        //aqui creo un nuevo caracter y le agrego el uuid mas el spread de las demas caracteristicas para crear el nuevo caracter con id

        const newCharacter:Character={id:uuid(),...character};

        this.characters.push(newCharacter);
    };
    

    constructor() { }
    
}