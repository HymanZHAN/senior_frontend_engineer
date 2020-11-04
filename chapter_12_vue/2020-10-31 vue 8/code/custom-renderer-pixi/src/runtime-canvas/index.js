import { createRenderer } from "vue";
import { Container, Sprite, Texture } from "pixi.js";
// 自定义渲染器 api
const renderer = createRenderer({
  // 渲染api
  // 渲染接口 -》 实现一些接口 -》 函数
  createElement(type) {
    // dom -> div
    // 调用这个函数
    // const div = document.createElement(type);
    // return div;
    // 创建一个矩形
    console.log(type);
    // const element = new Graphics();
    // element.beginFill(0xff0000);
    // element.drawRect(0, 0, 50, 50);
    // element.endFill();

    //创建一个圆形
    // const element = new Graphics();
    // element.beginFill(0xff0000);
    // element.drawCircle(0, 0, 50);
    // element.endFill();

    let element;
    switch (type) {
      case "container":
        // 容器
        element = new Container();
        break;
      case "sprite":
        element = new Sprite();
        break;

      default:
        break;
    }

    return element;
  },
  insert(el, parent) {
    // 把 元素 添加到容器内
    // parent -》 #app
    // pixi -> addChild
    if (el && parent) {
      parent.addChild(el);
    }
  },
  patchProp(el, key, prevValue, nextValue) {
    // console.log(key);
    switch (key) {
      case "texture":
        el.texture = Texture.from(nextValue);
        break;
      case "onClick":
        el.on("pointertap", nextValue);
        break;
      default:
        el[key] = nextValue;
        break;
    }
  },
  // 获取父级容器
  parentNode(node) {
    return node.parent;
  },
  // 删除元素时调用
  remove(el) {
    if (el && el.parent) {
      el.parent.removeChild(el);
    }
  },
  // 创建一个文本的时候调用
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
