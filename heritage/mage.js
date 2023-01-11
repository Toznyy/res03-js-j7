class Mage extends Character {
    
    #manaPoints;

    
    constructor (name, healthPoints, manaPoints) {
        
        super(name, manaPoints);
        this.#manaPoints = manaPoints;

    }
    
    get manaPoints (){
        return this.#manaPoints;
    }
    
    set manaPoints (manaPoints){
        this.#manaPoints = manaPoints;
    }
}

export { Mage };

import { Character } from './character.js';