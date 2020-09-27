let loginElement = document.querySelector("span#login");
let loginBtn = document.querySelector("#loginBtn");
let uploadElement = document.querySelector("span#upload");
let logoutBtn = document.querySelector("#logoutBtn");

let uploadBtnElement = document.querySelector("#uploadBtn");
let photoUploadField = document.querySelector("#photo");
let taskPanelElement = document.querySelector("#taskPanel");
let taskBodyElement = document.querySelector("#taskBody");
let photoListElement = document.querySelector(".content-list");

function showLoginElement() {
  uploadElement.style.display = "none";
  loginElement.style.display = "inline";
}

function showUploadElement() {
  loginElement.style.display = "none";
  uploadElement.style.display = "inline";
}

function logout() {
  localStorage.removeItem("token");
  showLoginElement();
  photoListElement.innerHTML = "";
}

if (localStorage.getItem("token")) {
  showUploadElement();
  getPhotos();
} else {
  showLoginElement();
}

uploadBtnElement.onclick = function () {
  photoUploadField.click();
};

photoUploadField.onchange = function () {
  let xhr = new XMLHttpRequest();

  xhr.open("POST", "/upload", true);
  xhr.setRequestHeader(
    "Authorization",
    `Bearer ${localStorage.getItem("token")}`
  );

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

  xhr.upload.onprogress = function (e) {
    div1.innerHTML = "上传中……";
    div2.style.width = ((e.loaded / e.total) * 100).toFixed(2) + "%";
  };

  xhr.onload = function () {
    div1.innerHTML = "上传完成";
    setTimeout(() => {
      taskPanelElement.style.display = "none";
      getPhotos();
    }, 1000);
  };

  xhr.onerror = function () {
    div1.innerHTML = "上传失败";
    setTimeout(() => {
      taskPanelElement.style.display = "none";
    }, 1000);
  };

  let photoForm = new FormData();
  photoForm.append("photo", photoUploadField.files[0]);
  xhr.send(photoForm);
};

function getPhotos() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "/getPhotos", true);

  xhr.setRequestHeader(
    "Authorization",
    `Bearer ${localStorage.getItem("token")}`
  );

  xhr.onload = function () {
    const result = JSON.parse(xhr.responseText);
    photoListElement.innerHTML = "";
    result.forEach((photoUrl) => {
      let img = document.createElement("img");
      img.src = photoUrl;
      img.classList.add("photo");
      photoListElement.appendChild(img);
    });
  };

  xhr.onerror = function () {
    if (xhr.status === 401) {
      logout();
    }
  };

  xhr.send();
}

loginBtn.onclick = function () {
  const username = document.querySelector("input#username").value;
  const password = document.querySelector("input#password").value;

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/login", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.onload = function () {
    if (xhr.status === 200) {
      const token = xhr.responseText;
      localStorage.setItem("token", token);
      showUploadElement();
      getPhotos();
    } else if (xhr.status === 401) {
      photoListElement.innerHTML = "用户名或密码错误";
    }
  };

  xhr.send(JSON.stringify({ username, password }));
};

logoutBtn.onclick = logout;
