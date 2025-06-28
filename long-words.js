const longWords = (array) => array.every((element) => element.length > 4);
const oneLongWord = (array) => array.some((element) => element.length > 9);
const noLongWords = (array) => array.every((element) => element.length < 7);
