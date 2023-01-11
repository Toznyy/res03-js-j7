class toDoList {
    
    #name;
    #date;
    #lieu;

    
    constructor (name, date, lieu) {
        
        this.#name = name;
        this.#date = date;
        this.#lieu = lieu;

    }
    
    get name (){
        return this.#name;
    }
    
    set name (name){
        this.#name = name;
    }
    
    get date (){
        return this.#date;
    }
    
    set date (date){
        this.#date = date;
    }
    
    get lieu (){
        return this.#lieu;
    }
    
    set lieu (date){
        this.#lieu = lieu;
    }
}

export { toDoList };