
// met hulp van myrthe en chat // 
console.log("Script loaded");

// Menu functionaliteit
const menuButton = document.querySelector(".menu-button");
const header = document.querySelector("header");
const body = document.body;

console.log("Menu button:", menuButton);

if (menuButton) {
    menuButton.addEventListener("click", () => {
        header.classList.toggle("open");
        
        if (header.classList.contains("open")) {
            menuButton.textContent = "Sluiten";
            body.classList.add("menu-open");
        } else {
            menuButton.textContent = "Menu";
            body.classList.remove("menu-open");
        }
    });
}

// met behulp van claude//
// --- Cocktail carousel ---
const cocktailList = document.querySelector('.cocktailCarousel ul');
const cocktailPrev = document.getElementById('cocktail-prev');
const cocktailNext = document.getElementById('cocktail-next');

console.log("Cocktail list:", cocktailList);
console.log("Cocktail prev button:", cocktailPrev);
console.log("Cocktail next button:", cocktailNext);

if (cocktailList && cocktailPrev && cocktailNext) {
    console.log("Setting up cocktail carousel");
    
    cocktailNext.addEventListener('click', () => {
        console.log("Next clicked!");
        const itemWidth = cocktailList.querySelector('li').offsetWidth + 16;
        cocktailList.scrollLeft += itemWidth;
    });

    cocktailPrev.addEventListener('click', () => {
        console.log("Prev clicked!");
        const itemWidth = cocktailList.querySelector('li').offsetWidth + 16;
        cocktailList.scrollLeft -= itemWidth;
    });
} else {
    console.log("Cocktail carousel NOT set up - missing elements");
}

// --- Insta carousel ---
const instaList = document.querySelector('.instaCarousel ul');
const instaPrev = document.getElementById('insta-prev');
const instaNext = document.getElementById('insta-next');

console.log("Insta list:", instaList);
console.log("Insta prev button:", instaPrev);
console.log("Insta next button:", instaNext);

if (instaList && instaPrev && instaNext) {
    console.log("Setting up insta carousel");
    
    instaNext.addEventListener('click', () => {
        console.log("Insta next clicked!");
        const itemWidth = instaList.querySelector('li').offsetWidth + 24;
        instaList.scrollLeft += itemWidth ;
    });

    instaPrev.addEventListener('click', () => {
        console.log("Insta prev clicked!");
        const itemWidth = instaList.querySelector('li').offsetWidth + 24;
        instaList.scrollLeft -= itemWidth ;
    });
} else {
    console.log("Insta carousel NOT set up - missing elements");
}


const langButton = document.querySelector(".language-button");
const langList = document.querySelector("#language-list");

langButton.addEventListener("click", () => {
    const expanded = langButton.getAttribute("aria-expanded") === "true";

    langButton.setAttribute("aria-expanded", !expanded);
    langList.hidden = expanded; // verberg of toon
});
