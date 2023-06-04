import Image from "./images/map.png";
import { createHtmlElement } from "./index";

function createAbout() {
  const about = document.createElement("div");
  about.classList.add("about");

  const phone = createHtmlElement("p", null, ["phone"], "📞 123 456 789");

  const address = createHtmlElement(
    "p",
    null,
    ["address"],
    "🏠 Waterloo Rd, London SE1 8SW"
  );

  const restaurantLocation = document.createElement("img");
  restaurantLocation.src = Image;
  restaurantLocation.alt = "Restaurant location";

  about.appendChild(phone);
  about.appendChild(address);
  about.appendChild(restaurantLocation);

  return about;
}

export default function renderAbout() {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.appendChild(createAbout());
}
