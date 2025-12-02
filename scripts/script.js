// // JavaScript Document
// console.log("hi");
// // hamburger menu hulp van ella met de code// 

// const menu = document.getElementById("menu");
// const nav = document.querySelector("nav");

// const openBtn = document.querySelector("header button");
// const closeBtn = document.querySelector("nav button");

// // Menu openen

// openBtn.addEventListener("click", () => {
//    menu.hidden = false;
//    nav.classList.add("open")
//    })

// // Menu sluiten

// closeBtn.addEventListener("click", () => {
//    nav.classList.remove("open")
//      // Wacht tot de animatie klaar is voordat hidden terug wordt gezet
//         setTimeout(() => {
//             menu.hidden = true;
//         }, 300)
//     })

 
const menuButton = document.querySelector("header div > button");
const closeButton = document.querySelector("nav > button");
const header = document.querySelector("header");

menuButton.addEventListener("click", () => {
    header.classList.toggle("open");
});

closeButton.addEventListener("click", () => {
    header.classList.remove("open");
});
