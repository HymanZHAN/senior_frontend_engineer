/**
 * 通过浏览器请求一个基础的html页面，浏览器解析该页面中的过程中，执行页面中包含的js代码，js代码中包含有ajax请求，通过ajax再请求必要的数据，把数据通过dom操作渲染到基础页面
 */

const defaultOptions = {
  method: "get",
  url: "/",
};
function ajax(options) {
  options = {
    ...defaultOptions,
    ...options,
  };

  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open(options.method, options.url, true);

    xhr.onload = function () {
      // console.log(xhr.getResponseHeader('content-type'));
      if (xhr.getResponseHeader("content-type").includes("json")) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        resolve(xhr.responseText);
      }
    };

    xhr.onerror = function () {
      reject("error");
    };

    xhr.send();
  });
}

let navElement = document.querySelector("#nav");

getCategories();
getItems(1, 2);

async function getCategories() {
  let rs = await ajax({
    url: "/getCategories",
  });

  if (!rs.code) {
    let data = rs.data;

    data.forEach((d) => {
      let aElement = document.createElement("a");
      aElement.href = `/${d.id}`;
      aElement.innerHTML = d.name;
      navElement.appendChild(aElement);
    });
  }
}

async function getItems(categoryId = "", page = 1) {
  let rs = await ajax({
    url: `/${categoryId}?page=${page}`,
  });
  console.log(rs);

  if (!rs.code) {
    let data = rs.data;

    // data.forEach( d => {
    //     let aElement = document.createElement('a');
    //     aElement.href = `/${d.id}`;
    //     aElement.innerHTML = d.name;
    //     navElement.appendChild(aElement);
    // } );
  }
}
