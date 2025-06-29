import { styles } from "./pimp-my-style.data.js";

let count = 0;
let decrease = false;
export function pimp() {
  const button = document.querySelector(".button");
  if (decrease && count == 0) {
    button.classList.remove(styles[count]);
    button.classList.remove("unpimp");
    
    decrease = false;
    return
  }
  if (decrease) {
    button.classList.remove(styles[count]);
    --count;
    return;
  }

  button.classList.add(styles[count]);
  ++count;
  if (count == styles.length) {
    button.classList.add("unpimp");
    --count;
    decrease = true;
    return;
  }
}
