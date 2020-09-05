class Vue {
  constructor(opts) {
    this.opts = opts;
    this._data = opts.data;
    this.observe(this._data);
    this.compile();
  }

  observe(data) {
    let keys = Object.keys(data);
    keys.forEach((key) => {
      let value = data[key];
      let dep = new Dep();
      Object.defineProperty(data, key, {
        configurable: true,
        enumerable: true,
        get() {
          if (Dep.target) {
            dep.addSub(Dep.target);
          }
          return value;
        },
        set(newValue) {
          console.log(dep);
          dep.notify(newValue);
          value = newValue;
        },
      });
    });
  }

  compile() {
    let el = document.querySelector(this.opts.el);
    this.compileNodes(el);
  }

  compileNodes(el) {
    let childNodes = el.childNodes;
    childNodes.forEach((node) => {
      if (node.nodeType === 1) {
        let attrs = node.attributes;
        [...attrs].forEach((attr) => {
          let attrName = attr.name;
          let attrValue = attr.value;
          if (attrName === "v-model") {
            node.value = this._data[attrValue];
            node.addEventListener("input", (e) => {
              this._data[attrValue] = e.target.value;
            });
          }
          // 作业：在老师的代码基础上实现一个v-html方法；
          // 暗号：空调
          if (attrName === "v-html") {
            console.log(attrValue);
            node.innerHTML = this._data[attrValue];
            new Watcher(this._data, attrValue, (newValue) => {
              node.innerHTML = newValue;
            });
          }
        });

        if (node.childNodes.length > 0) {
          this.compileNodes(node);
        }
      } else if (node.nodeType === 3) {
        let reg = /\{\{\s*([^\{\}\s]+)\s*\}\}/g;
        let textContent = node.textContent;
        if (reg.test(textContent)) {
          let $1 = RegExp.$1;
          node.textContent = node.textContent.replace(reg, this._data[$1]);
          new Watcher(this._data, $1, (newValue) => {
            let oldValue = this._data[$1];
            let reg = new RegExp(oldValue, "g");
            node.textContent = node.textContent.replace(reg, newValue);
          });
        }
      }
    });
  }
}

// 收集器
class Dep {
  constructor() {
    // [watcher,watcher....]
    this.subs = [];
  }
  // 添加订阅者
  addSub(sub) {
    this.subs.push(sub);
  }
  // 发布
  notify(newValue) {
    this.subs.forEach((sub) => {
      sub.update(newValue);
    });
  }
}

// 订阅者；
class Watcher {
  constructor(data, key, cb) {
    this.cb = cb;
    Dep.target = this;
    data[key]; //触发get方法；
    Dep.target = null;
  }
  update(newValue) {
    this.cb(newValue);
  }
}
