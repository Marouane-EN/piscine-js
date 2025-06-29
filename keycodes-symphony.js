export function compose() {
  addEventListener("input", (e) => {
    console.log(e.key);
    if (isLower(e.key)) {
      const newDive = document.createElement("div");
      document.body.appendChild(newDive);
      newDive.classList.add("note");
      newDive.style.background = randomColor();
      newDive.textContent = e.key;
    } else if (e.key == "Backspace") {
      const lastDiv = document.querySelector("body div:last-child");
      if (lastDiv) lastDiv.remove();
      return;
    } else if (e.key == "Escape") {
      document.body.innerHTML = "";
      return;
    }
  });
}
function isLower(s) {
  if (s < "a" || s > "z") {
    return false;
  }
  return true;
}
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
