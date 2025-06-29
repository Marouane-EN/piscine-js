export function generateLetters() {
    const s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < 120; i++) {
        const newDive = document.createElement('div')
        newDive.append(s.charAt(Math.floor(Math.random() * s.length)))
        document.body.appendChild(newDive)
        //console.log(newDive);
        newDive.style.fontSize = `${11 + i}px`
        if (i < 40) {
            newDive.style.fontWeight = "300"
        } else if (i < 80) {
            newDive.style.fontWeight = "400"
        } else {
            newDive.style.fontWeight = "600"
        }

    }
}