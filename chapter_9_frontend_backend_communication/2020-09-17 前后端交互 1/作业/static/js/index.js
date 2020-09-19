let uploadBtnElement = document.querySelector("#uploadBtn");
let photoUploadField = document.querySelector("#photo");
let taskPanelElement = document.querySelector("#taskPanel");
let taskBodyElement = document.querySelector("#taskBody");

getPhotos();

uploadBtnElement.onclick = function () {
  photoUploadField.click();
};

photoUploadField.onchange = function () {
  let xhr = new XMLHttpRequest();

  xhr.open("POST", "/upload", true);

  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerHTML = photoUploadField.files[0].name;
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
    div1.innerHTML = "上传完成";
    setTimeout(() => {
      taskPanelElement.style.display = "none";
      getPhotos();
    }, 1000);
  };

  let photoForm = new FormData();
  photoForm.append("photo", photoUploadField.files[0]);
  xhr.send(photoForm);
};

function getPhotos() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "/getPhotos", true);

  xhr.onload = function () {
    const result = JSON.parse(xhr.responseText);
    document.querySelector(".content-list").innerHTML = "";
    result.forEach((photoUrl) => {
      let img = document.createElement("img");
      img.src = photoUrl;
      img.classList.add("photo");
      document.querySelector(".content-list").appendChild(img);
    });
  };

  xhr.send();
}
