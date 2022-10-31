"use strict";
// const arrowLeft = document.querySelector(".back");
// const arrowRight = document.querySelector(".front");
const images = document.querySelector("#image");
const imgCont = document.querySelector(".images-container");
// let index = 0;

// arrowRight.addEventListener("click", () => {
//   index++;

//   if (index > array.length - 1) {
//     index = 0;
//   }
//   images.src = array[index];
// });

// arrowLeft.addEventListener("click", () => {
//   index--;
//   if (index < 0) {
//     index = 4;
//   }
//   images.src = array[index];
// });

const imagesArr = [
  "image01.jpeg",
  "image02.jpeg",
  "image03.jpg",
  "image04.jpg",
  "image05.jpg",
];

// console.log(imagesArr[1]);

setInterval(() => {
  let random = Math.floor(Math.random() * imagesArr.length);
  // console.log(random);
  images.src = imagesArr[random];
}, 3000);

/* PLEASE IGNORE THIS SECTION */

// function isSubstring(searchString, subString) {
//   const char = subString.toLowerCase();
//   const string = searchString.toLowerCase();
//   const result = char.includes(string);
//   console.log(result);
// }

// isSubstring("O", "dog");
