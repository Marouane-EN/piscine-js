import { styles } from "./pimp-my-style.data.js"

let count = 0
let decrease = false
export function pimp() {
    const button = document.querySelector(".button")
    if (count == styles.length) {
        // console.log("11111");
        // console.log(button);

        button.classList.add("unpimp")
        --count
        decrease = true
        return
    }
    if (decrease && count < 0) {
        // console.log("2222222222");
        // console.log(button);

        button.classList.remove("unpimp")
        count = 0
        decrease = false
        return
    }
    if (decrease) {
        // console.log("33333333333");
        // console.log(button);

        button.classList.remove(styles[count])
        --count
        return
    }
    // console.log(button);

    button.classList.add(styles[count])
    ++count
}