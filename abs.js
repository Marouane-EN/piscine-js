const isPositive = (n) => {
    return n >= 0
}

const abs = (n) => {
    if (!isPositive(n)) {
        return n * -1
    }
    return n
}