import {firstFight} from "./levels";


export class Levels {
  a: string[] = ["You wake up in the middle of a dark forest. Fog envelops everything around you. Suddenly a grunt is heard on the right and a frog twice your size appears from behind a tree. You look at the frog in fright, the frog looks at you in fear. "];
  b: string[] = ["With a wild howl, you rush at the frog and plunge a hunting knife into its paw. Croaking with indignation, the frog swings its other paw to retaliate. "];
  c: string[] = ["You tried to pet a wild frog. The frog looks displeased and hits you with its hind paw. You fall on your back in surprise. The frog swings at you again. "];
  d: string[] = ["You roll to the right, hoping to find cover, but bang your head against a hidden in the fog stone. You hear the frog laughing. When you open your eyes, you see the face of a frog hanging over you. "];
  e: string[] = ["You put your hands up in surrender. The frog looks at you for a while, then nods with satisfaction and limps off into the forest. Seems like you got lucky this time. "];
  f: string[] = ["You grab the stone you hit your head on and strike the frog back. The frog croaks in surprise and falls unconscious right on top of you. You try to throw its body off you, but the frog is too heavy. Ten hours later, the nearest patrol discovers your cold body, pinned down by a frog. What a ridiculous death. "];
  g: string[] = ["Goodbye"];
  h: string[] = ["Game over!"];
}
export class levelOne {
  public a: string;
  public b: string;

  constructor(){
    this.a = "a) Hit it with your knife. ";
    this.b = "b) Pet it. ";
  }

}




export class levelTwo {
  public a: string;
  public b: string;

  constructor(){
    this.a = "a) Roll to the right. ";
    this.b = "b) Roll to the left. ";
  }
}

export class levelThree {
  public a: string;
  public b: string;

  constructor(){
    this.a = "a) Surrender. ";
    this.b = "b) Try to reach the nearest stone and strike back. ";
  }
}


