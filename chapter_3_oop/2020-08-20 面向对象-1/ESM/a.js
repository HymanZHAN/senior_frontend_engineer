// 变量污染；
let str = "a里的字符串";
// 导出；
console.log("a.js");
// 导出多个；
export let a = 10;
export let c = 30;
let obj = {
    name:"张三",
    age:20
}
export {obj};
let b = 20;
// 导出一个
// export default b;
export {b as default};