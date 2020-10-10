export default class KPromise {
  constructor(handle) {
    this.status = "pending";
    this.value = undefined;
    // call apply  bind();
    handle(this._resolve.bind(this), this._reject.bind(this));
    this.fulfilledFnQueue = [];
    this.rejectedFnQueue = [];
  }

  _resolve(val) {
    let run = () => {
      console.log("resolve start");
      console.log(this.fulfilledFnQueue);
      // console.log(this);
      this.status = "fulfilled";
      this.value = val;
      let cb;
      while ((cb = this.fulfilledFnQueue.shift())) {
        cb && cb(val);
      }
      console.log("resolve finish");
    };
    let ob = new MutationObserver(run);
    ob.observe(document.body, {
      attributes: true,
    });
    document.body.setAttribute("kkb", Math.random());
  }

  _reject(val) {
    let run = () => {
      console.log("reject start");
      console.log(this.rejectedFnQueue);

      this.status = "rejected";
      this.value = val;
      let cb;
      while ((cb = this.rejectedFnQueue.shift())) {
        cb && cb(val);
      }
      console.log("reject finish");
    };
    let ob = new MutationObserver(run);
    ob.observe(document.body, {
      attributes: true,
    });
    document.body.setAttribute("kkb", Math.random());
  }

  then(onResolved, onRejected) {
    return new KPromise((resolve, reject) => {
      if (this.status === "fulfilled") {
        onResolved && onResolved(this.value);
      } else if (this.status === "rejected") {
        onRejected && onRejected(this.value);
      } else if (this.status === "pending") {
        let resolveFn = (val) => {
          let res = onResolved && onResolved(val);
          if (res instanceof KPromise) {
            res.then(resolve);
          } else {
            resolve(res);
          }
        };

        let rejectFn = (val) => {
          let res = onRejected && onRejected(val);
          reject(res);
        };

        this.fulfilledFnQueue.push(resolveFn);
        this.rejectedFnQueue.push(rejectFn);
      }
    });
  }

  finally(cb) {
    console.log("finally start");
    this.fulfilledFnQueue.push(cb);
    this.rejectedFnQueue.push(cb);
    console.log("finally finished");
  }

  static resolve(val) {
    return new KPromise((res) => {
      res(val);
    });
  }

  static reject(val) {
    return new KPromise((res, rej) => {
      rej(val);
    });
  }

  static all(lists) {
    return new KPromise((resolve) => {
      let arr = [];
      let num = 0;
      lists.forEach((item) => {
        item.then((res) => {
          num++;
          arr.push(res);
          if (num >= lists.length) {
            resolve(arr);
          }
        });
      });
    });
  }

  static race(lists) {
    return new KPromise((resolve, reject) => {
      lists.forEach((item) => {
        item.then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      });
    });
  }
}
