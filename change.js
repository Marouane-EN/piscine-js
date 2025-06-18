function get(params) {
    return sourceObject[params]
}
function set(params, value) {
    sourceObject[params] = value
    return sourceObject[params]
}