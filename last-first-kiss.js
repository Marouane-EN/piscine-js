function first(params) {
    return params[0]
}
function last(params) {
    return params[params.length - 1]
}
function kiss(params) {
    const arg = [last(params), first(params)]
    return arg
}