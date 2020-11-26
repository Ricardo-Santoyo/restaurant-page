function home() {
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

export default home;