import Image from "./images/background.jpg";
import { createHtmlElement } from "./index";

function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const foodImage = document.createElement("img");
  foodImage.src = Image;
  foodImage.alt = "Bibimbap";

  home.appendChild(
    createHtmlElement("p", null, null, "Best bibimbap in your country")
  );
  home.appendChild(
    createHtmlElement("p", null, null, "Made with passion since 1982")
  );
  home.appendChild(foodImage);
  home.appendChild(
    createHtmlElement("p", null, null, "Order online or visit us!")
  );

  return home;
}

export default function renderHome() {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.appendChild(createHome());
}
