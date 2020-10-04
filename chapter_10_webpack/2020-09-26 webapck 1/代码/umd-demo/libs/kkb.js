(function (root, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'));
    }
    else if (typeof define === "function" && define.amd) {
        // AMD 模块环境下
        define(['jquery.js'], factory);
    } else {
        root.kkb = factory($);
    }
}(this, function ($) { // $ 要导入的外部依赖模块
    // ...
    function b(){}
    function c(){}

    // 模块导出数据
    return {
        b: b,
        c: c
    }
}));

// load(this, function () { // $ 要导入的外部依赖模块
//     // ...
//     function b(){}
//     function c(){}
//
//     // 模块导出数据
//     return {
//         b: b,
//         c: c
//     }
// });
//
// function load(root, factory) {
//     if (typeof module === "object" && typeof module.exports === "object") {
//         // Node, CommonJS-like
//         module.exports = factory();
//     }
//     else if (typeof define === "function" && define.amd) {
//         // AMD 模块环境下
//         define(factory);
//     }
// }