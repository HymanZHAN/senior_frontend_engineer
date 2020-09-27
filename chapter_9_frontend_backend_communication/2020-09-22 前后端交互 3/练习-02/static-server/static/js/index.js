let uploadBtnElement = document.querySelector('#uploadBtn');
let attachmentElement = document.querySelector('#attachment');
let taskPanelElement = document.querySelector('#taskPanel');
let taskBodyElement = document.querySelector('#taskBody');
let contentListElement = document.querySelector('.content-list');
let usernameElement = document.querySelector('#username');
let passwordElement = document.querySelector('#password');
let loginBtnElement = document.querySelector('#loginBtn');


const baseURL = axios.defaults.baseURL = '/api';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

getPhotos();

uploadBtnElement.onclick = function() {
    attachmentElement.click();
}

attachmentElement.onchange = async function() {


    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = attachmentElement.files[0].name;
    let div1 = document.createElement('div');
    div1.classList.add('task-progress-status');
    let div2 = document.createElement('div');
    div2.classList.add('progress');

    li.appendChild(span);
    li.appendChild(span);
    li.appendChild(div1);
    li.appendChild(div2);

    let fd = new FormData();
    fd.append('attachment', attachmentElement.files[0]);
    let {data} = await axios({
        method: 'post',
        url: '/upload',
        data: fd
    })

    // let xhr = new XMLHttpRequest();
    // xhr.open('post', '/api/upload', true);
    //
    // xhr.upload.onloadstart = function() {
    //     taskPanelElement.style.display = 'block';
    //
    //     div1.innerHTML = '准备上传……';
    //     taskBodyElement.appendChild(li);
    // }
    //
    // xhr.upload.onprogress = function(e) {
    //     div1.innerHTML = '上传中……';
    //     console.log(e, (e.loaded / e.total * 100));
    //
    //     div2.style.width = (e.loaded / e.total * 100).toFixed(2) + '%';
    // }
    //
    // // 后端响应完成以后出发
    // xhr.onload = function() {
    //     console.log('over');
    //     div1.innerHTML = '上传完成';
    //     taskPanelElement.style.display = 'none';
    //
    //     getPhotos();
    // }
    //
    // let fd = new FormData();
    // // fd.append('username', 'zmouse');
    // fd.append('attachment', attachmentElement.files[0]);
    // xhr.send(fd);
}


// 你们实现
async function getPhotos() {

    // let xhr = new XMLHttpRequest();
    //
    // xhr.onload = function() {
    //     let data = JSON.parse(xhr.responseText);
    //
    //     if (!data.code) {
    //         contentListElement.innerHTML = '';
    //         data.data.forEach(d => {
    //             let img = new Image();
    //             img.src = '/api/upload/' + d.filename;
    //             contentListElement.appendChild(img);
    //         })
    //     }
    // }
    //
    // xhr.open('get', '/api/getPhotos', true);
    //
    // xhr.send();

    let {data} = await axios.get('/getPhotos');
    // console.log(data);
    if (!data.code) {
        contentListElement.innerHTML = '';
        data.data.forEach(d => {
            let img = new Image();
            img.src = baseURL + '/upload/' + d.filename;
            contentListElement.appendChild(img);
        })
    }
}

// 登录
loginBtnElement.onclick = async function() {
    // let {data} = await axios.post('/login', {
    //     name: usernameElement.value,
    //     password: passwordElement.value
    // }, {
    //     params: {
    //         a: 1,
    //         b: 2
    //     }
    // });

    let {data, headers: {authorization}} = await axios({
        method: 'post',
        url: '/login',
        data: {
            name: usernameElement.value,
            password: passwordElement.value
        },
        // params: {
        //     a: 1,
        //     b: 2
        // }
    })
    // console.log(rs);

    if (data.code) {
        // alert(data.message);
    } else {
        // alert('登录成功');
        localStorage.setItem('token', authorization);
    }
}