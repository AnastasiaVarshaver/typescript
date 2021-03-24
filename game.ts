const customConsole = require('prompt-sync')();

class gameStart {
    static a(a: any) {
        throw new Error("Method not implemented.");
    }
    public a: string;
    public b: string;
    static start: string;

    constructor(){
        this.a = "Y";
        this.b = "Goodbye";
    }
    start = customConsole(`Do you want to start the game? Y/N: `);
   
    }

    if (gameStart.start == "Y"){
        console.log(gameStart.a);
    }
    else if (gameStart.start == "N"){
        console.log(this.b);
    }



