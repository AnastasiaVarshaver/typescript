var customConsole = require('prompt-sync')();
var gameStart = /** @class */ (function () {
    function gameStart() {
        this.start = customConsole("Do you want to start the game? Y/N: ");
        this.a = "Y";
        this.b = "Goodbye";
    }
    gameStart.a = function (a) {
        throw new Error("Method not implemented.");
    };
    return gameStart;
}());
if (gameStart.start == "Y") {
    console.log(gameStart.a);
}
else if (gameStart.start == "N") {
    console.log(this.b);
}
