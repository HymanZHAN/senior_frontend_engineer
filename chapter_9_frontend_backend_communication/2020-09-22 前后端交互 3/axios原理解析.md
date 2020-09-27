# Axios 类
axios 核心，请求有关的所有方法都是该类进行提供的。

# Axios.prototype.request
axios对象的核心方法，用于请求，后续所有的方法，.get,.post,put etc。都是通过该方法来实现的

let axios = new Axios({
    baseURL: '/api',
    headers: {}
});
axios.request({
    url: '/getPhotos',
    data: {a: 1},
    headers: {
    }
});

# interceptors
回调函数-钩子函数
- 请求之前执行的函数
- 请求完成以后执行的函数
axios.interceptors.request.use(function(config) {
    // 每次请求之前会执行的函数1
    config.headers.a = 1;
    return config;
}, function() {
})
axios.interceptors.request.use(function(config) {
    // 每次请求之前会执行的函数2
}, function() {
})
axios.request({
    url: '/getPhotos',
    data: {a: 1},
    headers: {
    }
});

dispatchRequest => axios.request({
                       url: '/getPhotos',
                       data: {a: 1},
                       headers: {
                       }
                   });

var chain = [dispatchRequest, undefined];
var promise = Promise.resolve(config);

// promise.then(chain[0], chain[1])

this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
chain.unshift(interceptor.fulfilled, interceptor.rejected);
});

// chain => [r1, r2, r3, dispatchRequest, undefined]

this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
chain.push(interceptor.fulfilled, interceptor.rejected);
});
// chain => [r1, r2, r3, dispatchRequest, undefined, s1, s2, s3];

while (chain.length) {
promise = promise.then(chain.shift(), chain.shift());
}

# 配置
- 全局通用配置
- 请求特殊配置


# 接口
我们并不会直接去new Axios

// 源码
var axios = createInstance(defaults);

// 创建 axios 对象的工厂函数
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);
  
  // axios => instance => Axios.prototype.request.bind(context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);
  
  // 把 Axios.prototype的所有方法（get，post、delete）等扩展给instance方法，context是改这些方法的this

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}
