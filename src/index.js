import pageLoad from "./modules/pageLoad";
import home from "./modules/home";
import menu from "./modules/menu";
import contact from "./modules/contact";

pageLoad();

let content = document.querySelector("#content");
let homeButton = document.querySelector("#home");
homeButton.addEventListener("click", displayHome);
let menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", displayMenu);
let contactButton = document.querySelector("#contact");
contactButton.addEventListener("click", displayContact);

function displayHome() {
  content.lastChild.remove();
  home();
};

function displayMenu() {
  content.lastChild.remove();
  menu();
};

function displayContact() {
  content.lastChild.remove();
  contact();
};