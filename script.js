"use strict";
const images = document.querySelector("#image");
const imgCont = document.querySelector(".images-container");

const imagesArr = [
  "image01.jpeg",
  "image02.jpeg",
  "image03.jpg",
  "image04.jpg",
  "image05.jpg",
];

// console.log(imagesArr[1]);

setInterval(function () {
  let random = Math.floor(Math.random() * imagesArr.length);
  console.log(random);
  images.src = imagesArr[random];
}, 3000);
