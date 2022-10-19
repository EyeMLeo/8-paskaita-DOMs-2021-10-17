"use strict";
console.log("dom.js");

// const nuorodaIApp = document.getElementById("app");

// console.log("nuorodaIApp ===", nuorodaIApp);

// nuorodaIApp.style.backgroundColor = "tomato";

// console.log("nuorodaIApp.children ===", nuorodaIApp.children);

// const allLiEls = document.querySelectorAll(".listEl");

// console.log("allLiEls ===", allLiEls);

// // gauti tuos pacius list elementus su getElementsByClassName

// const allLiItByClass = document.getElementsByClassName("listEl");
// console.log("allLiItByClass ===", allLiItByClass);

// for (const sepaarateLiIt of allLiItByClass) {
//   sepaarateLiIt.style.backgroundColor = "blue";
//   sepaarateLiIt.style.color = "white";
// }

// let antrasLiEl = document.getElementsByClassName("listEl")[1];
// antrasLiEl.style.backgroundColor = "yellow";

// let treciasEl = document.querySelector(".listEl:nth-child(3)");
// treciasEl.style.color = "yellow";
// console.log("--------------------------------------");

// console.log("treciasEl ===", treciasEl);
// // antrasLiEl[1].style.backgroundColor = "green";

// let heading = document.querySelector("h1");
// heading.style.fontSize = "70px";
// heading.textContent = `Dynamic Heading`;

// ------------------------------------------------------------------------------------------
// [09:52] Marius Kuzminskas
// // pakeisti h1 antrastes texta 'Dynamic Heading'
//  like 8

// [09:52] Marius Kuzminskas
// // nustatyti h1 fonto dydi i 57px
//  like 10

// [09:57] Marius Kuzminskas
// // 3. <p id="art__text">Lorem ipsum dolor</p> gauti ir atspausdinti konsolelje sito elemento teksta
//  like 7

let pContent = document.getElementById("art__text");
console.log("pContent ===", pContent);

// [09:57] Marius Kuzminskas
// // 4. atvaizduoti konsoleje kolekcija arba nodelist is <ul id="colors" class="list"> elemento li elementu.
//  like 5

let colorsContent = document.getElementById("colors");
console.log("colorsContent ===", colorsContent);

// [09:57] Marius Kuzminskas
// // 5. nusitaikyti ir pakeisti teksta <p id="art__date">Date</p> i 2022-10-19
//  like 5

let dataContent = document.getElementById("art__date");
dataContent.textContent = "2022-10-19";
console.log("dataContent ===", dataContent);

// [09:57] Marius Kuzminskas
// // 6. pakeisti paskutinio <ul id="colors" class="list"> elemento spalva i tomato
//  like 3
let dataContent = document.getElementById("art__date");
dataContent.textContent = "2022-10-19";
console.log("dataContent ===", dataContent);
