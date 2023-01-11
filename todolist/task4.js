class task4 extends toDoList {
    
    #action7;
    #action8

    
    constructor (name, date, lieu, action7, action8) {
        
        super(name, date, lieu);
        this.#action7 = action7;
        this.#action8 = action8;

    }
    
    get action7 (){
        return this.#action7;
    }
    
    set action7 (action7){
        this.#action7 = action7;
    }
    
    get action8 (){
        return this.#action8;
    }
    
    set action8 (action8){
        this.#action8 = action8;
    }
}

export { task4 };

import { toDoList } from './todolist.js';