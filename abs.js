const isPositive = (n) => n > 0

const abs = (n) => {
    if (!isPositive(n) && n != 0) {
        return n * -1
    }
    return n
}
