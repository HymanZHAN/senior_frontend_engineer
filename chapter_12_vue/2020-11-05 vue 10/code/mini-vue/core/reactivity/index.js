// v1
// let a = 10;
// let b = a * 10;

// console.log(b);

// a = 20;
// b = a * 10;
// console.log(b);

// v2
// let a = 10;
// let b;

// function update() {
//   b = a * 10;
// }

// update()
// console.log(b)

// a = 20
// update()
// console.log(b)

// let a = 10;
// v3
// let state;
// let update;

// function setStateChanged(_update) {
//     // update state 依赖
//   update = _update;
// }

// function setState(_state) {
//   state = _state;
//   update()
// }

// let b;
// setStateChanged(() => {
//   b = state.a * 10;
//   console.log(b)
// });

// setState({
//     a: 10
// })

// setState({
//     a: 20
// })

let currentEffect;
class Dep {
  constructor() {
    // 收集多个依赖
    this.effects = new Set();
    // this.val = val;
  }

  //   get value() {
  //     this.depend();
  //     return this.val;
  //   }

  //   set value(newVal) {
  //     this.val = newVal;
  //     this.notice();
  //   }

  depend() {
    // 收集依赖
    if (currentEffect) {
      this.effects.add(currentEffect);
    }
  }

  notice() {
    // 触发依赖
    for (const effect of this.effects) {
      effect();
    }
  }
}

export function watchEffect(effect) {
  currentEffect = effect;
  effect();
  currentEffect = null;
}

// const dep = new Dep();

// const state = {
//   a: 10,
// };

// let b;
// watchEffect(() => {
//   b = state.a * 10;
//   dep.depend();
//   console.log(b);
// });

// watchEffect(() => {
//   console.log("second");
//   dep.depend();
// });

// state.a = 20;
// dep.notice();

// ref
// const dep = new Dep(10);

// let b;
// watchEffect(() => {
//   b = dep.value * 10;
//   console.log(b);
// });

// dep.value = 20;

// {a:10,b:20} -> 2个 dep
// 怎么去支持对象形式呢
// 响应式对象的实现 ->
// proxy - vue3

const targetMap = new Map();
// reactive -> objA objB

export function reactive(raw) {
  function getDep(target, key) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      depsMap = new Map();
      targetMap.set(target, depsMap);
    }

    let dep = depsMap.get(key);
    if (!dep) {
      dep = new Dep();
      depsMap.set(key, dep);
    }
    return dep;
  }

  return new Proxy(raw, {
    get(target, key) {
      // dep 要怎么找到呢
      // 存储问题 dep
      const dep = getDep(target, key);
      // 获取到了
      // 收集依赖
      dep.depend();
      return Reflect.get(target, key);
      //   return target[key]
    },

    set(target, key, value) {
      // dep
      const dep = getDep(target, key);
      const result = Reflect.set(target, key, value);
      dep.notice();
      return result;
    },
  });
}

// const state = reactive({ a: 10 });

// let b = 10;
// watchEffect(() => {
//   b = state.a * 10;
//   console.log(b);
// });

// state.a = 20;
