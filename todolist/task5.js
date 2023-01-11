class task5 extends toDoList {
    
    #action9;
    #action10;

    
    constructor (name, date, lieu, action9, action10) {
        
        super(name, date, lieu);
        this.#action9 = action9;
        this.#action10 = action10;

    }
    
    get action9 (){
        return this.#action9;
    }
    
    set action9 (action9){
        this.#action9 = action9;
    }
    
    get action10 (){
        return this.#action10;
    }
    
    set action10 (action10){
        this.#action10 = action10;
    }
}

export { task5 };

import { toDoList } from './todolist.js';