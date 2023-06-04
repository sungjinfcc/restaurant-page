import Image from "./images/background.jpg";
import { createHtmlElement } from "./index";

function createAbout() {
  const about = document.createElement("div");
  about.classList.add("about");

  const phone = createHtmlElement("p", null, null, "📞 123 456 789");

  const address = createHtmlElement(
    "p",
    null,
    null,
    "🏠 Hollywood Boulevard 42, Los Angeles, USA"
  );

  const restaurantLocation = document.createElement("img");
  restaurantLocation.src = Image;
  restaurantLocation.alt = "Korean restaurant location";

  about.appendChild(phone);
  about.appendChild(address);
  about.appendChild(restaurantLocation);

  return about;
}

function renderAbout() {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.appendChild(createAbout());
}

export default renderAbout;
