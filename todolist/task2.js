class task2 extends toDoList {
    
    #action3;
    #action4

    
    constructor (name, date, lieu, action3, action4) {
        
        super(name, date, lieu);
        this.#action3 = action3;
        this.#action4 = action4;

    }
    
    get action3 (){
        return this.#action3;
    }
    
    set action3 (action3){
        this.#action3 = action3;
    }
    
    get action4 (){
        return this.#action4;
    }
    
    set action4 (action4){
        this.#action4 = action4;
    }
}

export { task2 };

import { toDoList } from './todolist.js';