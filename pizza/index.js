import { Pizza } from './pizza.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let pizza1 = new Pizza("Veggie", "tomate", "fromage", "légumes");
    let pizza2 = new Pizza("Meattie", "tomate", "fromage", "viande");
    let pizza3 = new Pizza("Fishie", "tomate", "fromage", "poisson");
    
    console.log(pizza1);
    console.log(pizza2);
    console.log(pizza3);
    
});