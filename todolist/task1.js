class task1 extends toDoList {
    
    #action1;
    #action2

    
    constructor (name, date, lieu, action1, action2) {
        
        super(name, date, lieu);
        this.#action1 = action1;
        this.#action2 = action2;

    }
    
    get action1 (){
        return this.#action1;
    }
    
    set action1 (action1){
        this.#action1 = action1;
    }
    
    get action2 (){
        return this.#action2;
    }
    
    set action2 (action2){
        this.#action2 = action2;
    }
}

export { task1 };

import { toDoList } from './todolist.js';