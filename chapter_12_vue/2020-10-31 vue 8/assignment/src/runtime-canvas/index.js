import { createRenderer } from "vue";
import { Container, Graphics, Sprite, Texture } from "pixi.js";
const renderer = createRenderer({
  createElement(type) {
    console.log(type);

    let element;
    switch (type) {
      case "container":
        element = new Container();
        break;

      case "sprite":
        element = new Sprite();
        break;

      case "circle":
        element = new Graphics();
        element.beginFill(0xffff00);
        element.drawCircle(50, 200, 50);
        element.endFill();
        break;

      case "rectangle":
        element = new Graphics();
        element.beginFill(0xff0000);
        element.drawRect(0, 0, 50, 50);
        element.endFill();
        break;

      default:
        break;
    }

    return element;
  },

  insert(el, parent) {
    if (el && parent) {
      parent.addChild(el);
    }
  },

  patchProp(el, key, prevValue, nextValue) {
    switch (key) {
      case "texture":
        el.texture = Texture.from(nextValue);
        break;
      case "onClick":
        el.on("pointertap", nextValue);
        break;
      default:
        console.log(typeof el);
        el[key] = nextValue;
        break;
    }
  },

  parentNode(node) {
    return node.parent;
  },

  remove(el) {
    if (el && el.parent) {
      el.parent.removeChild(el);
    }
  },

  createText(text) {
    return new Text(text);
  },

  // 无需实现
  nextSibling() {},
  createComment() {},
});

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent);
}
