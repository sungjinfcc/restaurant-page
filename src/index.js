import "./style.css";
import renderHome from "./home";
import renderMenu from "./menu";
import renderAbout from "./about";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

function createHtmlElement(type, id, arrayClasses, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (arrayClasses)
    arrayClasses.forEach((myClass) => element.classList.add(myClass));

  if (content) element.innerText = content;

  return element;
}

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const title = createHtmlElement("h1", null, ["title"], "BIBIMBOP");

  header.appendChild(title);

  const nav = document.createElement("nav");

  const home = createHtmlElement("button", null, ["nav-button"], "HOME");
  const menu = createHtmlElement("button", null, ["nav-button"], "MENU");
  const about = createHtmlElement("button", null, ["nav-button"], "ABOUT");

  home.addEventListener("click", () => {
    renderHome();
  });
  menu.addEventListener("click", () => {
    renderMenu();
  });
  about.addEventListener("click", () => {
    renderAbout();
  });

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(about);

  header.appendChild(nav);

  return header;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = `Copyright © 2023 sungjinfcc`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/sungjinfcc";
  githubLink.target = "_black";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab");
  githubIcon.classList.add("fa-github");

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
}

function loadWebsite() {
  document.body.appendChild(createHeader());
  document.body.appendChild(createMain());
  document.body.appendChild(createFooter());
  renderHome();
}

loadWebsite();

export { createHtmlElement };
