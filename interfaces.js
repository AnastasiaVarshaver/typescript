"use strict";
exports.__esModule = true;
var scene_1 = require("./scene");
var scene_2 = require("./scene");
var scene_3 = require("./scene");
var scene_4 = require("./scene");
var customConsole = require('prompt-sync')();
var levels = new scene_1.Levels;
var LevelOne = new scene_2.levelOne;
var LevelTwo = new scene_3.levelTwo;
var LevelThree = new scene_4.levelThree;
var Hello = customConsole("Wuld you like to start the game? Y/N: ");
if (Hello == "Y") {
    console.log(levels.a + LevelOne.a + LevelOne.b);
}
else if (Hello == "N") {
    console.log(levels.g);
}
if (levels.a + LevelOne.a + LevelOne.b == "a") {
    console.log(levels.b + LevelTwo.a + LevelTwo.b);
}
else if (levels.a + LevelOne.a + LevelOne.b == "b") {
    console.log(levels.c + LevelTwo.a + LevelTwo.b);
}
