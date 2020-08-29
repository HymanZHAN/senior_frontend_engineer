// let obj = {
//     animationIterationCount: true,
//     columnCount: true,
//     fillOpacity: true,
//     flexGrow: true,
//     flexShrink: true,
//     fontWeight: true,
//     gridArea: true,
//     gridColumn: true,
//     gridColumnEnd: true,
//     gridColumnStart: true,
//     gridRow: true,
//     gridRowEnd: true,
//     gridRowStart: true,
//     lineHeight: true,
//     opacity: true,
//     order: true,
//     orphans: true,
//     widows: true,
//     zIndex: true,
//     zoom: true,
// }

class Jq {
  constructor(arg, root) {
    // root 上次操作的节点
    // this.arg = arg;
    // 通过传入的参数拿到节点；
    // 一个节点；
    //    this.ele =   document.querySelector(arg);
    if (typeof root === "undefined") {
      // 默认的上次操作的节点；
      this.previousObj = [document];
    } else {
      this.previousObj = root;
    }

    if (typeof arg === "string") {
      // 情况一：字符串
      // 多个节点；
      let elements = document.querySelectorAll(arg);
      this.addElements(elements);
    } else if (typeof arg === "function") {
      // 情况二：函数；
      window.addEventListener("DOMContentLoaded", arg);
    } else {
      // 情况三：对象
      if (typeof arg.length === "undefined") {
        // 一个节点
        console.log("对象");
        this[0] = arg;
        this.length = 1;
      } else {
        // 多个节点；
        console.log("数组");
        this.addElements(arg);
      }
    }
  }

  addElements(elements) {
    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }
    this.length = elements.length;
  }

  _addEvent(elem, eventName, fn) {
    elem.addEventListener(eventName, fn);
  }

  // 把函数当成参数传入另一个函数，或者函数把函数当成返还参数,高阶函数；
  click(fn) {
    for (let i = 0; i < this.length; i++) {
      this._addEvent(this[i], "click", fn);
    }
    return this;
  }

  on(eventName, fn) {
    // 多个事件
    let eventArr = eventName.split(" ");
    // 多个节点绑定多个事件；
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < eventArr.length; j++) {
        this._addEvent(this[i], eventArr[j], fn);
      }
    }
  }

  eq(index) {
    // return this[index];
    // root 是 this；
    return new Jq(this[index], this);
  }

  get(index) {
    return this[index];
  }

  end() {
    return new Jq(this["previousObj"]);
  }

  css(...arg) {
    // [arg1,arg2...]
    // arguments
    if (arg.length === 1) {
      // 1字符串 2.对象 // let res =  $(".box").css("background");
      // $(".box").css({width:"300px",height:"300px"});
      if (typeof arg[0] === "object") {
        // 对象 情况三 设置多个样式
        for (let i = 0; i < this.length; i++) {
          for (let j in arg[0]) {
            this._setStyle(this[i], j, arg[0][j]);
          }
        }
      } else {
        // 字符串； 情况一 ；获取样式
        return this._getStyle(this[0], arg[0]);
      }
    } else {
      // 情况二；多个节点设置一个样式；
      // $(".box").css("width","300px");
      for (let i = 0; i < this.length; i++) {
        this._setStyle(this[i], arg[0], arg[1]);
      }
    }
  }

  _getStyle(ele, styleName) {
    if (styleName in $.cssHooks) {
      return $.cssHooks[styleName].get(ele);
    }
    return getComputedStyle(ele, null)[styleName];
  }

  _setStyle(ele, styleName, styleValue) {
    if (typeof styleValue === "number" && !(styleName in $.cssNumbers)) {
      styleValue = styleValue + "px";
    }
    if (styleName in $.cssHooks) {
      $.cssHooks[styleName].set(ele, styleValue);
    }
    ele.style[styleName] = styleValue;
  }

  animate(...args) {
    if (args.length === 1 && typeof args[0] === "object") {
      let endStyle = args[0];
      this._addAnimationToAllElements(endStyle);
    } else if (
      args.length === 2 &&
      typeof args[0] === "object" &&
      typeof args[1] === "object"
    ) {
      let [endStyle, options] = args;
      this._addAnimationToAllElements(endStyle, options);
    }
  }

  _addAnimationToAllElements(endStyle, opts) {
    const defaultOptions = {
      duration: 500,
      easing: "cubic-bezier(0.42, 0, 0.58, 1)",
    };
    const options = {
      ...defaultOptions,
      ...opts,
    };

    for (let i = 0; i < this.length; i++) {
      let animation = this[i].animate([endStyle], options);
      animation.onfinish = () => {
        animation.cancel();
        this.css(endStyle);
      };
    }
  }
}

function $(arg) {
  return new Jq(arg);
}

$.cssNumbers = {
  animationIterationCount: true,
  columnCount: true,
  fillOpacity: true,
  flexGrow: true,
  flexShrink: true,
  fontWeight: true,
  gridArea: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnStart: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowStart: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  widows: true,
  zIndex: true,
  zoom: true,
};

$.cssHooks = {};
