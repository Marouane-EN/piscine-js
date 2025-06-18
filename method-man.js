function words(str) {
    const arr = str.split(" ")
    return arr
}

function sentence(arr) {
    const s = arr.join(" ")
    return s
}

function yell(str) {
    const s = str.toUpperCase()
    return s
}

function whisper(str) {
    const s = "*" + str.toLowerCase() + "*"
    return s
}

function capitalize(str) {
    const s = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    return s
}
