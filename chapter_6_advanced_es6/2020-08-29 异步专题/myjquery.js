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
    constructor(arg,root) {
        // root 上次操作的节点
        // this.arg = arg;
        // 通过传入的参数拿到节点；
        // 一个节点；
        //    this.ele =   document.querySelector(arg);
        if(typeof root === 'undefined'){
            // 默认的上次操作的节点；
            this.preventObj = [document];
        }else{
            this.preventObj = root;
        }
       
        if (typeof arg === "string") {
            // 情况一：字符串
            // 多个节点；
            let eles = document.querySelectorAll(arg);
            // console.log(eles);
            // this ->对象  this[0] = ele1 this[1] = ele2....
            this.addEles(eles);
        }else if(typeof arg === "function"){
            // 情况二：函数；
            window.addEventListener("DOMContentLoaded",arg);
        }else{
            // 情况三：对象
            if(typeof arg.length === "undefined"){
                // 一个节点
                console.log("对象");
                this[0] = arg;
                this.length = 1;
            }else{
                // 多个节点；
                console.log("数组");
                this.addEles(arg);
            }
        }
        console.log(this);
    }
    addEles(eles){
        for (let i = 0; i < eles.length; i++) {
            this[i] = eles[i];
        }
        this.length = eles.length;
    }
   
    // 把函数当成参数传入另一个函数，或者函数把函数当成返还参数,高阶函数；
    click(fn) {
        // console.log("click",this.arg);
        // if(fn){
        //     fn();
        // }
        // fn && fn();
        // 一个
        // this.ele.addEventListener("click",fn);
        // 多个； 
        for (let i = 0; i < this.length; i++) {
            this.addEvent(this[i], "click", fn);
        }
        return this;
    }
    addEvent(ele, eventName, fn) {
        ele.addEventListener(eventName, fn)
    }
    on(eventName,fn){
        // 多个事件
        let eventArr = eventName.split(" ");
        // 多个节点绑定多个事件；
        for(let i=0;i<this.length;i++){
            for(let j=0;j<eventArr.length;j++){
                this.addEvent(this[i],eventArr[j],fn);
            }
        }
    }
    eq(index){
        // return this[index];
        // root 是 this；
        return new Jq(this[index],this);
    }
    get(index){
        return this[index];
    }
    end(){
        return new Jq(this['preventObj']);
    }
    // mytest(){
    //     let a = 10;
    //     return function(){
    //         console.log("返还的参数");
    //         console.log(a);
    //     }
    // }
    css(...arg){
        // [arg1,arg2...]
        // arguments
        if(arg.length===1){
            // 1字符串 2.对象 // let res =  $(".box").css("background");
            // $(".box").css({width:"300px",height:"300px"});
            if(typeof arg[0] === "object"){
                // 对象 情况三 设置多个样式
                for(let i=0;i<this.length;i++){
                    for(let j in arg[0]){
                        this.setStyle(this[i],j,arg[0][j]);
                    }
                }
            }else{
                // 字符串； 情况一 ；获取样式
              return this.getStyle(this[0],arg[0]);
            }
        }else{
             // 情况二；多个节点设置一个样式；
             // $(".box").css("width","300px");
            for(let i=0;i<this.length;i++){
                this.setStyle(this[i],arg[0],arg[1]);
            }
        }   
    }
    getStyle(ele,styleName){
        if(styleName in $.cssHooks){
         return   $.cssHooks[styleName].get(ele);
        }
        return getComputedStyle(ele,null)[styleName]
    }
    setStyle(ele,styleName,styleValue){
        if(typeof styleValue === 'number' && !(styleName in $.cssNumbers)){
            styleValue = styleValue + "px";
        }
        if(styleName in $.cssHooks){
            $.cssHooks[styleName].set(ele,styleValue);
        }
        ele.style[styleName] = styleValue;
    }
    animate(...arg){
        for(let i=0;i<this.length;i++){
            this[i].style.transition = "all 1s";
            for(let j in arg[0]){
                this.setStyle(this[i],j,arg[0][j]);
            }
        }
        // 最后一个参数；
        // arg[arg.length-1]
        if(typeof arg[arg.length-1] === 'function'){
            // arg[arg.length-1]();
            window.addEventListener("transitionend", arg[arg.length-1])
        }
    }
}

function $(arg) {
    // return {
    //     click(){
    //         console.log("click",arg);
    //     },
    //     on(){

    //     },
    //     css(){}
    // }
    // 初始化 没有root  默认  document；
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
}

$.cssHooks = {};

// axios() axios.get() axios.post put delte...