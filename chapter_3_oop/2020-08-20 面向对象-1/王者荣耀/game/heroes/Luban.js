import skill1 from "../skills/S11210.js";
import skill2 from "../skills/S11220.js";
import skill3 from "../skills/S11230.js";

import skin1 from "../skins/301120.js";
import skin2 from "../skins/301121.js";
import skin3 from "../skins/301122.js";

export class Luban {
  constructor() {
    this.name = "鲁班";
    this.ico = "./sources/heros/luban1.png";
    this.skins = [new skin1(), new skin2(), new skin3()];
    this.skin = this.skins[0];
    this.skills = [new skill1(), new skill2(), new skill3()];
  }
}
