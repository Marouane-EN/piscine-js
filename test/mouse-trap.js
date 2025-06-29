export function createCircle() {
  addEventListener("click", (e) => {
    const circle = document.createElement("div");
    document.body.appendChild(circle);
    circle.classList.add("circle");
    circle.style.background = "white";
    // console.log(e.clientX);

    circle.style.top = e.clientY + "px";
    circle.style.left = e.clientX + "px";
  });
}
function handleMove(e, pos, divPos, trap) {
  const lastCircle = document.querySelector("body div:not(.box):last-child");
  const div = document.querySelector("body div.box");
  const divPos = div.getBoundingClientRect();
  if (lastCircle != null) {
    if (!trap) {
      lastCircle.style.top = e.clientY + "px";
      lastCircle.style.left = e.clientX + "px";
    } else {
      console.log("454654");

      if (
        e.clientY > divPos.top &&
        e.clientX > divPos.left &&
        e.clientY < divPos.right &&
        e.clientY < divPos.bottom
      ) {
        lastCircle.style.top = e.clientY + "px";
        lastCircle.style.left = e.clientX + "px";
      }
    }
  }
}
export function moveCircle() {
  addEventListener("mousemove", handleMove);
}
export function setBox() {
  const newDive = document.createElement("div");
  document.body.append(newDive);
  newDive.classList.add("box");

  addEventListener("mousemove", (e) => {
    const lastCircle = document.querySelector("body div:not(.box):last-child");
    if (lastCircle != null) {
      const pos = lastCircle.getBoundingClientRect();
      const divPos = newDive.getBoundingClientRect();
      // console.log(pos);
      // console.log(divPos);
      // console.log(e);

      if (
        pos.top > divPos.top &&
        pos.left > divPos.left &&
        pos.bottom < divPos.bottom &&
        pos.right < divPos.right
      ) {
        removeEventListener("mousemove", handleMove);
        lastCircle.style.background = "var(--purple)";
        handleMove(e, pos, divPos, true);
      } else {
        lastCircle.style.background = "white";
        handleMove(e, false);
      }
    }
  });
}
