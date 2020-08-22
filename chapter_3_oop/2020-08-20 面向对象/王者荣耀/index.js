// 面向过程---登录  显示影藏 --》点击显示英雄--》....
// 面向对象；---》分析对象（根据需求）;-->属性及方法；---》共性问题 --》抽象-->类--》类之间关系；

// 对象  ： 亚瑟（名称、图像） 、 鲁班 （...）、玩家对象、游戏管理类；（玩家--》英雄---》技能/皮肤...）；
// 视图相关；

// 作业：在老师代码基础上，扩展鲁班类 ；要求 ：功能实现和亚瑟一样；
// 暗号：中国

import Game from "./game/game.js";

let game = new Game();
let heroBtn = document.querySelector(".heroBtn");
let skinBtn = document.querySelector(".skinBtn");
let heroContainer = document.querySelector(".heroContainer");
let skinContainer = document.querySelector(".skinContainer");

document.querySelector(".sub").onclick = function () {
  let username = document.querySelector(".username").value;
  game.login(username);
  console.log(game); //包含了需求需要的各种对象及对象属性和方法；
  // 隐藏登录页面显示游戏页面
  document.querySelector(".login").style.display = "none";
  document.querySelector(".game").style.display = "block";
  document.querySelector(".chosenUsername").innerHTML = username;

  heroBtn.onclick = function () {
    renderPlayerHeroes(game.player);
  };
  skinBtn.onclick = function () {
    renderPlayerSkins(game.player);
  };

  renderPlayerHeroes(game.player);
};

function renderPlayerHeroes(player) {
  console.log("Rendering heroes...");

  heroContainer.style.display = "block";
  skinContainer.style.display = "none";

  let heroes = player.heroes;
  let heroView = document.querySelector(".heroView");

  heroView.innerHTML = "";
  heroes.forEach((hero) => {
    let heroItem = document.createElement("div");
    heroItem.classList.add("heroItem");
    heroItem.innerHTML = `<img src="${hero.ico}" />
                         <span>${hero.name}</span>`;

    heroItem.onclick = function () {
      player.hero = hero;
      if (!heroItem.classList.contains("selected")) {
        document.querySelectorAll("div.heroItem").forEach((node) => {
          node.classList.remove("selected");
        });
      }
      heroItem.classList.add("selected");
      renderSkills(hero.skills);
      renderSkin(hero.skin);
    };

    heroView.appendChild(heroItem);
  });
}

function renderPlayerSkins(player) {
  console.log("Rendering skins...");
  let skins = player.hero ? player.hero.skins : [];
  let skinView = document.querySelector(".skinView");

  if (skins.length > 0) {
    heroContainer.style.display = "none";
    skinContainer.style.display = "block";
  }

  skinView.innerHTML = "";
  skins.forEach((skin) => {
    let skinItem = document.createElement("div");
    skinItem.classList.add("skinItem");
    skinItem.innerHTML = `<img src="${skin.ico}" />
                         <span>${skin.name}</span>`;

    skinItem.onclick = function () {
      if (!skinItem.classList.contains("selected")) {
        document.querySelectorAll("div.skinItem").forEach((node) => {
          node.classList.remove("selected");
        });
      }
      skinItem.classList.add("selected");
      renderSkin(skin);
    };

    skinView.appendChild(skinItem);
  });
}

function renderSkills(skills) {
  let skillsView = document.querySelector(".skillsView");
  skillsView.innerHTML = "";
  skills.forEach((skill) => {
    let skillItem = document.createElement("div");
    skillItem.classList.add("skillItem");

    let skillImg = document.createElement("img");
    skillImg.src = skill.ico;
    skillImg.alt = skill.name;

    let skillName = document.createElement("span");
    skillName.innerHTML = skill.name;

    skillItem.appendChild(skillImg);
    skillItem.appendChild(skillName);

    skillsView.appendChild(skillItem);
  });
}

function renderSkin(skin) {
  renderImg("heroShow", skin.ico, skin.name);
  renderImg("skinShow", skin.src, skin.name);
}

function renderImg(targetClassName, imgSrc, imgAlt) {
  let target = document.querySelector(`.${targetClassName}`);
  target.innerHTML = "";
  let img = document.createElement("img");
  img.src = imgSrc;
  img.alt = imgAlt;
  target.appendChild(img);
}
