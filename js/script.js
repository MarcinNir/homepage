console.log("Hello Traveller");

let button = document.querySelector(".js-button");
let photo = document.querySelector(".js-photo");
let buttonTheme = document.querySelector(".js-buttonTheme");
let header = document.querySelector(".js-header");
let currentTheme = document.querySelector(".js-currentTheme");
let body = document.querySelector(".js-body");
let title = document.querySelector(".js-title");

button.addEventListener("click", () => {
  photo.remove();
});

buttonTheme.addEventListener("click", () => {
  header.classList.toggle("dark");
  body.classList.toggle("changeBody");
  title.classList.toggle("darkTitle");

  currentTheme.innerText = header.classList.contains("dark")
    ? "jasny"
    : "ciemny";
});
