const escapeStr = '`\\/"\''

const arr = [4,'2']
const obj = Object.freeze({
    str : 'string',
    num : 0,
    bool : true,
    undef : undefined
})

const nested = Object.freeze({
    arr : [4,undefined,'2'],
    obj : {
        str : '',
        num : 0,
        bool : true
    }
})