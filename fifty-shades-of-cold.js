import { colors } from "./fifty-shades-of-cold.data.js";
export function generateClasses() {
  const theHead = document.head;
  const styleTag = document.createElement("style");
  theHead.appendChild(styleTag);
  let classes = "";
  for (let i = 0; i < colors.length; i++) {
    classes += `.${colors[i]} { background: ${colors[i]};}`;
  }
  styleTag.textContent = classes;
}
export function generateColdShades() {
  const array = [
    "aqua",
    "blue",
    "turquoise",
    "green",
    "cyan",
    "navy",
    "purple",
  ];
  colors.forEach((element) => {
    for (let j = 0; j < array.length; j++) {
      if (element.includes(array[j])) {
        const newDive = document.createElement("div");
        document.body.appendChild(newDive);
        newDive.classList.add(element);
        newDive.textContent = element;
      }
    }
  });
}
export function choseShade(container) {
  const dives = document.querySelectorAll("div");
  dives.forEach((element) => {
    element.classList.replace(element.className, container);
  });
}
