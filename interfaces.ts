import {Levels} from "./scene";
import {levelOne} from "./scene";
import {levelTwo} from "./scene";
import {levelThree} from "./scene";
   
const customConsole = require('prompt-sync')();

   let levels = new Levels;
   let LevelOne = new levelOne;
   let LevelTwo = new levelTwo;
   let LevelThree = new levelThree;
   
   let Hello = customConsole ("Would you like to start the game? Y/N: ");

   if(Hello =="Y"){
     console.log(levels.a + LevelOne.a + LevelOne.b);
   }else if(Hello == "N"){
     console.log(levels.g)
   }

   if(levels.a + LevelOne.a + LevelOne.b == "a"){
    console.log(levels.b + LevelTwo.a + LevelTwo.b);
   }
   else if(levels.a + LevelOne.a + LevelOne.b == "b"){
     console.log(levels.c + LevelTwo.a + LevelTwo.b);
   }
   
  
  
