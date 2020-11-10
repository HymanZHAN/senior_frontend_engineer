import { createRenderer } from "vue";
import { Container, Sprite, Texture } from "pixi.js";
// 自定义渲染器 api
// const renderer = createRenderer({
//   // 渲染api
//   // 渲染接口 -》 实现一些接口 -》 函数
//   createElement(type) {
//     // dom -> div
//     // 调用这个函数
//     // const div = document.createElement(type);
//     // return div;
//     // 创建一个矩形
//     console.log(type);
//     // const element = new Graphics();
//     // element.beginFill(0xff0000);
//     // element.drawRect(0, 0, 50, 50);
//     // element.endFill();

//     //创建一个圆形
//     // const element = new Graphics();
//     // element.beginFill(0xff0000);
//     // element.drawCircle(0, 0, 50);
//     // element.endFill();

//     let element;
//     switch (type) {
//       case "container":
//         // 容器
//         element = new Container();
//         break;
//       case "sprite":
//         element = new Sprite();
//         break;
//     }

//     return element;
//   },
//   insert(el, parent) {
//     // 把 元素 添加到容器内
//     // parent -》 #app
//     // pixi -> addChild

//     if (el) {
//       parent.addChild(el);
//     }
//   },
//   patchProp(el, key, prevValue, nextValue) {
//     // 当我们设置 props 的时候 会进行调用
//     // console.log(key);
//     // x y prevValue nextValue
//     switch (key) {
//       case "texture":
//         el.texture = Texture.from(nextValue);
//         break;
//       case "onClick":
//         el.on("pointertap", nextValue);
//         break;
//       default:
//         el[key] = nextValue;
//         break;
//     }
//   },
//   // 获取父级容器
//   parentNode(node) {
//     return node.parent;
//   },
//   // 删除元素时调用
//   remove(el) {
//     if (el && el.parent) {
//       el.parent.removeChild(el);
//     }
//   },
//   // 创建一个文本的时候调用
//   createText(text) {
//     return new Text(text);
//   },
//   // 无需实现
//   nextSibling() {},
//   createComment() {}
// });

const renderer = createRenderer({
  createElement(type) {
    let element;
    switch (type) {
      case "container":
        element = new Container();
        break;
      case "sprite":
        element = new Sprite();
        break;
    }

    return element;
  },

  insert(el, parent) {
    if (el) {
      parent.addChild(el);
    }
  },
  parentNode(node) {
    if (node) {
      return node.parent;
    }
  },
  remove(el) {
    if (el && el.parent) {
      el.parent.removeChild(el);
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
        el[key] = nextValue;
        break;
    }
  },
  createText() {
    // return new Text(text);
  },

  nextSibling() {},
  createComment() {}
});

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent);
}
