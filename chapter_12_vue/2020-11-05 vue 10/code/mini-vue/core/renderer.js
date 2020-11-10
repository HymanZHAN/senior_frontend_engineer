// hostCreateElement
function createElement(type) {
  return document.createElement(type);
}

function remove(el, parent) {
  parent.remove(el);
}

function setText(el, text) {
  el.textContent = text;
}

function createText(text) {
  return new Text(text);
}

function insert(el, parent) {
  parent.append(el);
}

function patchProp(el, key, prevValue, nextValue) {
  // props
  // onClick
  if (key.startsWith("on")) {
    const eventName = key.slice(2).toLocaleLowerCase();
    el.addEventListener(eventName, nextValue);
  } else {
    el.setAttribute(key, nextValue);
  }
}

export function mountElement(vdom, container) {
  console.log(vdom);

  const el = (vdom.el = createElement(vdom.type));

  // props
  if (vdom.props) {
    for (const key in vdom.props) {
      const val = vdom.props[key];
      patchProp(el, key, null, val);
    }
  }

  // children
  // string  array
  if (typeof vdom.children === "string") {
    // 文本
    insert(createText(vdom.children), el);
  } else if (Array.isArray(vdom.children)) {
    vdom.children.forEach((v) => {
      mountElement(v, el);
    });
  }

  insert(el, container);
}

export function diff(v1, v2) {
  // type props children
  // div   p
  if (v1.type !== v2.type) {
    v1.replaceWith(createElement(v2.type));
  } else {
    // type 一样
    console.log(v1, v2);
    const el = (v2.el = v1.el);
    // props
    // 1. 新的 props 里面有  和 old props 不一样 -> 直接更新值即可
    const newProps = v2.props;
    const oldProps = v1.props;
    if (newProps) {
      // old {a:1}
      // new {a:2}
      Object.keys(newProps).forEach((key) => {
        if (newProps[key] !== oldProps[key]) {
          patchProp(el, key, oldProps[key], newProps[key]);
        }
      });

      // 2. 如果 old props 里面有 而新的 props 里面没有的话 -> 直接把 old props 给删除掉
      if (oldProps) {
        Object.keys(oldProps).forEach((key) => {
          if (!newProps[key]) {
            patchProp(el, key, oldProps[key], null);
          }
        });
      }
    }

    // children
    // new children -> string array
    // old children -> string array
    // 4 种情况
    const newChildren = v2.children || [];
    const oldChildren = v1.children || [];
    if (typeof newChildren === "string") {
      if (typeof oldChildren === "string") {
        if (newChildren !== oldChildren) {
          setText(el, newChildren);
        }
      } else if (Array.isArray(oldChildren)) {
        // 把之前的老的 children 都删除掉
        setText(el, newChildren);
      }
    } else if (Array.isArray(newChildren)) {
      if (typeof oldChildren === "string") {
        el.innerHTML = ``;

        newChildren.forEach((vnode) => {
          mountElement(vnode, el);
        });
      } else if (Array.isArray(oldChildren)) {
        // new -> a1 b1 c1 d1
        // old -> a2 b2 c2
        // 如果 new 的children 多的话，那么多出来的应该给它创建

        // new -> a1 b1
        // old -> a2 b2 c2
        // 如果 old 的children 多的话，那么多出来的应该给它删除

        const length = Math.min(oldChildren.length, newChildren.length);
        for (let index = 0; index < length; index++) {
          // 粗暴
          diff(oldChildren[index], newChildren[index]);
        }

        if (newChildren.length > length) {
          for (let index = length; index < newChildren.length; index++) {
            // 创建
            mountElement(newChildren[index], el);
          }
        }

        if (oldChildren.length > length) {
          for (let index = length; index < oldChildren.length; index++) {
            // 创建
            remove(oldChildren[index], el);
          }
        }
      }
    }
  }
}
