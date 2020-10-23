export function Get(url: string) {
  return function (target: any, name: string) {
    if (!target.routes) {
      target.routes = [];
    }

    target.routes.push({
      verb: "get",
      url,
      name,
    });
  };
}

export function Post(url: string) {
  return function (target: any, name: string) {
    if (!target.routes) {
      target.routes = [];
    }

    target.routes.push({
      verb: "post",
      url,
      name,
    });
  };
}

export function Auth() {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    // 验证是否登录
    let value = descriptor.value;

    // console.log('value', value);

    let isLogin = true;

    descriptor.value = async function (ctx) {
      if (isLogin) {
        value(ctx);
      } else {
        ctx.body = "你还没有登录";
      }
    };
  };
}
