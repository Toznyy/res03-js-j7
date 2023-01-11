import { Warrior } from './warrior.js';
import { Mage } from './mage.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let warrior = new Warrior("Warrior", 60, 10);
    let mage = new Mage("Mage", 60, 50);
    
    console.log(warrior);
    console.log(mage);

});