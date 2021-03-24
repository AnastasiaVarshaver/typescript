class Stats {
    constructor(
        public playerHP: number = 100,
     ){};
}
export class firstFight extends Stats {
    static create(event: Stats) {
        return new Stats(
            event.playerHP,
            
        )
    }
}
const stats = firstFight.create({
    playerHP: 100,
});


