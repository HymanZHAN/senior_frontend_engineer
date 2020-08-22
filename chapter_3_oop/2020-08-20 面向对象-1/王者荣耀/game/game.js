import Player from "./player.js";
import { Luban } from "./heroes/Luban.js";
import { Yase } from "./heroes/Yase.js";

export default class Game {
  constructor() {
    this.player = null;
  }
  login(name) {
    this.player = new Player(name, [new Yase(), new Luban()]);
  }
}
