"use strict";

const section = document.querySelectorAll(".section"),
  sectionDescription = document.querySelectorAll(".section-description");

// section.forEach((s) => {
//   s.addEventListener("mousedown", () => {
//     sectionDescription[0].style.display = "flex";
//   });
//   s.addEventListener("mouseup", () => {
//     sectionDescription[0].style.display = "none";
//   });
// });

section.forEach((e) => {
  e.addEventListener('mousedown', () => {
    sectionDescription.forEach((elem) => {
      console.log(elem);
    });
  });
});

// function displaySectionDesciption(mouseE, sectionD) {
//     if (mouseE.type === 'mouseover') {
//         sectionD.style = 'display: flex';
//     } else if (mouseE.type === 'mouseout') {
//         sectionD.style = 'display: none';
//     }
// }

// const mouseEvent = document.querySelectorAll('.section'),
//     sectionDescription = document.querySelectorAll('.section-description');
// displaySectionDesciption(mouseEvent, sectionDescription);

// let x = 0,
//     y = 0;

// document.addEventListener('keydown', function(e){
//   if(e.keyCode == 37) y -= 5;
//   if(e.keyCode == 39) y += 5;
//   if(e.keyCode == 38) x += 5;
//   if(e.keyCode == 40) x -= 5;

//  document.querySelector('.cube').style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
// });

// function getRandom() {
//     return Math.floor(Math.random() * (7 - 1) + 1);
// }

// const uchip_1 = document.querySelector('.uchip-1'),
//         section = document.querySelectorAll('.section'),
//         movesRandom = getRandom();

// if (movesRandom == 3) {
//     uchip_1.style = 'margin-left: 190px';
//     section.forEach(e => {
//         e.style = 'background-color: orange';
//     });
// }

// const section_description_1 = document.querySelector('.section-description-1'),
//         section_description_brand_1 = section_description_1.querySelector('.brand'),
//         section_description_2 = document.querySelector('.section-description-2'),
//         section_description_brand_2 = section_description_2.querySelector('.brand');

// section_description_1.style = 'display: flex';
// section_description_2.style = 'display: flex';
