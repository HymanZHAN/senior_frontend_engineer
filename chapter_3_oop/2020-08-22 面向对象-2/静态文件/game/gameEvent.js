// 作业：实现removeEventHandler方法； removeEventHandler 删除指定的自定义事件名称下的方法
// 暗号：仙人掌

class GameEvent {
  constructor() {
    this.handlers = new Object();
  }

  hasEvent(eventName) {
    return this.handlers.hasOwnProperty(eventName);
  }

  addEventHandler(eventName, fn) {
    if (!this.hasEvent(eventName)) {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(fn);
  }

  trigger(eventName) {
    if (!this.hasEvent(eventName)) {
      return;
    }
    this.handlers[eventName].forEach((fn) => {
      fn();
    });
  }

  removeEventHandler(eventName, fn) {
    if (!this.hasEvent(eventName)) {
      return;
    }
    this.handlers[eventName] = this.handlers[eventName].filter((f) => f !== fn);
  }
}

// Tests: Run with Node

const assert = require("assert");

function testGameEventRemoveEvent() {
  let myEvent = new GameEvent();
  function fn1() {
    console.log("fn1");
  }
  function fn2() {
    console.log("fn2");
  }

  myEvent.addEvent("event1", fn1);
  myEvent.addEvent("event1", fn2);
  myEvent.removeEvent("event1", fn1);

  assert(myEvent.hasEvent("event1"));
  assert(myEvent.handlers["event1"].length === 1);
  assert(myEvent.handlers["event1"][0] === fn2);
}

testGameEventRemoveEvent();
