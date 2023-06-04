import { createHtmlElement } from "./index";

function createMenu() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  const menu = [
    {
      name: "Pan canilla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
      price: "20$",
    },
    {
      name: "Pan sobado",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
      price: "20$",
    },
    {
      name: "Pan Andino",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
      price: "20$",
    },
  ];
  menu.forEach((item) => {
    const div = createHtmlElement("div", null, ["menu-card"], null);

    const name = createHtmlElement("h2", null, ["menu-title"], item.name);
    const description = createHtmlElement(
      "p",
      null,
      ["menu-description"],
      item.description
    );
    const price = createHtmlElement("h2", null, ["menu-price"], item.price);
    const hr = createHtmlElement("hr", null, ["menu-hr"], null);

    div.appendChild(name);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(hr);

    menuDiv.appendChild(div);
  });

  return menuDiv;
}

export default function renderMenu() {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.appendChild(createMenu());
}
