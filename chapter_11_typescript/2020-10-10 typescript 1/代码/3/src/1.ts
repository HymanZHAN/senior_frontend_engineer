// 变量声明 => 数据复用 => 为程序中使用的具体的值定义名称
let title: string = 'kkb';
console.log(title);
console.log(title);


// 方向
// 类型声明 => 类型复用 => 为程序中使用的类型标注进行名称的定义
type durType = 'left'|'right'|'top'|'bottom';

function fn(dur: durType) {

}
function fn2(dur: durType) {

}

fn('left');
fn2('abc');



// type personType = {
//     name: string;
//     age: number;
//     gender: string;
// };

// interface durType = 'left'|'right'|'top'|'bottom';
// type t = string | number;

interface personType {
    name: string;
    age: number;
    gender: string;
};
// 继承 type 不能继承


function fn3(options: personType) {

}

fn3({
    name: 'zMouse',
    age: 35,
    gender: '男'
});

interface teacherType extends personType{
    classType: string;
};
function fn4(options: teacherType) {

}
fn4({
    name: 'zMouse',
    age: 35,
    gender: '男',
    classType: 'js高级'
});

class P implements personType {
    name: string;
    age: number;
    gender: string;
}

