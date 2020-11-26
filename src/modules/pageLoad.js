function pageLoad() {
  let content = document.querySelector("#content");
  let navbar = document.createElement("div");
  navbar.id = "navbar";
  let homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.id = "home";
  let menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.id = "menu";
  let contactButton = document.createElement("button");
  contactButton.textContent = "Contact";
  contactButton.id = "contact";
  navbar.appendChild(homeButton);
  navbar.appendChild(menuButton);
  navbar.appendChild(contactButton);
  content.appendChild(navbar);

  let image = document.createElement("div");
  image.id = "image";
  let h2 = document.createElement("h2");
  h2.textContent = "Real Restaurant";
  let h1 = document.createElement("h1");
  h1.textContent = "The Best Tasting Experience";
  image.appendChild(h2);
  image.appendChild(h1);
  content.appendChild(image);
};

export default pageLoad;