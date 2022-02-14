/*_________________ Fetching The Elements ________________*/

// const elements = document.getElementById("web-logo");
// console.dir(elements);

// const elements = document.getElementsByClassName("logo");
// console.log(elements);


// const elements = document.getElementsByTagName("input");
// console.log(elements);

// const elements = document.querySelector("li");
// console.log(elements);

// const elements = document.querySelectorAll("li");
// console.log(elements);

/*____________ textContent And innerContent _____________*/

// const elements = document.getElementById("web-logo");
// console.log(elements.textContent);
// elements.textContent = "Hello World!";
// console.log(elements.textContent);

// const elements = document.getElementsByTagName("p");
// console.log(elements.innerText);
// elements.textContent = "Hello World!";
// console.log(elements.innerText);

// const webLogo = document.querySelector("div.logo h1");
// console.log(webLogo);
// webLogo.style.backgroundColor = "Black";

// const button = document.querySelector("div.header-content a");
// console.log(button.getAttribute("class"));
// button.setAttribute("style", "background-color:Yellow")
// console.log(button.getAttribute("class"));

const navLists = document.querySelectorAll("ul.navigation-list li");
for (let navList of navLists) {
    navList.style.backgroundColor = "white";
    navList.style.color = "black";
    navList.style.fontWeight = "700";
    navList.style.border = "1rem solid black";
}
