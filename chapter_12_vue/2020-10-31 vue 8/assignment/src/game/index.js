import { Application } from "pixi.js";
export const game = new Application({
  width: 480,
  height: 720,
});

document.body.append(game.view);

export function createRootContainer() {
  return game.stage;
}
