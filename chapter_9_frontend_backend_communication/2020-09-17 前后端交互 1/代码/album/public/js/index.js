let uploadBtnElement = document.querySelector("#uploadBtn");
let attachmentElement = document.querySelector("#attachment");
let taskPanelElement = document.querySelector("#taskPanel");
let taskBodyElement = document.querySelector("#taskBody");

getPhotos();

uploadBtnElement.onclick = function () {
  attachmentElement.click();
};

attachmentElement.onchange = function () {
  // console.log('开始上传', attachmentElement.files[0]);

  // attachmentElement.files.forEach(file => {
  //     // 上传
  // })

  let xhr = new XMLHttpRequest();

  // console.log(xhr);

  xhr.open("post", "/upload", true);

  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerHTML = attachmentElement.files[0].name;
  let div1 = document.createElement("div");
  div1.classList.add("task-progress-status");
  let div2 = document.createElement("div");
  div2.classList.add("progress");

  li.appendChild(span);
  li.appendChild(div1);
  li.appendChild(div2);

  xhr.upload.onloadstart = function () {
    taskPanelElement.style.display = "block";

    div1.innerHTML = "准备上传……";
    taskBodyElement.appendChild(li);
  };

  // 与上传下载有关的数据（上传总大小，已经上传的大小）都可以通过事件对象来获取
  xhr.upload.onprogress = function (e) {
    div1.innerHTML = "上传中……";
    console.log(e, (e.loaded / e.total) * 100);

    div2.style.width = ((e.loaded / e.total) * 100).toFixed(2) + "%";
  };

  // 后端响应完成以后出发
  xhr.onload = function () {
    console.log("over");
    div1.innerHTML = "上传完成";
  };

  let fd = new FormData();
  fd.append("attachment", attachmentElement.files[0]);
  xhr.send(fd);
};

// 你们实现
function getPhotos() {
  // ajax /getPhotos
  // 获取到数据以后，通过dom操作渲染到页面中
}
