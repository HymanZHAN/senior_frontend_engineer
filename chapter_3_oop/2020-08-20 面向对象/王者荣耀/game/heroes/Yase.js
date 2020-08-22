import S1 from "../skills/S16610.js";
import S2 from "../skills/S16620.js";
import S3 from "../skills/S16630.js";

import skin1 from "../skins/301660.js";
import skin2 from "../skins/301661.js";
import skin3 from "../skins/301662.js";

export class Yase {
  constructor() {
    this.name = "亚瑟";
    this.ico = "./sources/heros/yase1.png";
    this.skins = [new skin1(), new skin2(), new skin3()];
    this.skin = this.skins[0];
    this.skills = [new S1(), new S2(), new S3()];
  }
}
