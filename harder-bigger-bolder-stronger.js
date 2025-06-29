export function generateLetters() {
    const s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let count = 0
    let id = setInterval(() => {
        const newDive = document.createElement('div')
        newDive.append(s.charAt(Math.floor(Math.random() * s.length)))
        ++count
        console.log(newDive);
        newDive.style.fontSize = `${10 + count}px`
        if (count < 40) {
            newDive.style.fontWeight = "300"
        } else if (count < 80) {
            newDive.style.fontWeight = "400"
        } else {
            newDive.style.fontWeight = "600"
        }
        if (count == 120) {
            clearInterval(id)
        }
    }, 100)

}