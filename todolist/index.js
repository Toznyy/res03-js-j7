import { task1 } from './task1.js';
import { task2 } from './task2.js';
import { task3 } from './task3.js';
import { task4 } from './task4.js';
import { task5 } from './task5.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let marcher = new task1("Marcher", "matin", "rue", "avancer", "s'arréter");
    let manger = new task2("Manger", "midi", "repas", "mâcher", "avaler");
    let parler = new task3("Parler", "aprem", "amis", "ouvrir", "fermer");
    let jouer = new task4("Jouer", "soir", "ordi", "cliquer", "s'amuser");
    let dormir = new task5("Dormir", "nuit", "lit", "ronfler", "rêver");
    
    let button = document.getElementById("btn-todolist");
    let section = document.querySelector("section");
    let count = 0;
    button.addEventListener("click", function(event) {
        
        
    });
});