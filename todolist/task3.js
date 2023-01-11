class task3 extends toDoList {
    
    #action5;
    #action6

    
    constructor (name, date, lieu, action5, action6) {
        
        super(name, date, lieu);
        this.#action5 = action5;
        this.#action6 = action6;

    }
    
    get action5 (){
        return this.#action5;
    }
    
    set action5 (action5){
        this.#action5 = action5;
    }
    
    get action6 (){
        return this.#action6;
    }
    
    set action6 (action6){
        this.#action6 = action6;
    }
}

export { task3 };

import { toDoList } from './todolist.js';