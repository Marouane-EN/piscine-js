const filterShortStateName = (array) =>
  array.filter((element) => element.length < 7);

const filterStartVowel = (array) =>
  array.filter((element) => {
    console.log(element);

    const regx = /^[aeiou]/i;
    return regx.test(element);
  });

const filter5Vowels = (array) =>
  array.filter((element) => {
    const regx = /(?:[^aeiou]*[aeiou]){5,}.*/i;
    return regx.test(element);
  });

const filter1DistinctVowel = (array) =>
  array.filter((element) => {
    const set = new Set(element.toLowerCase());
    const s = [...set].join("");
    return s.match(/[aeiou]/g) != null
      ? s.match(/[aeiou]/g).length == 1
      : false;
  });

const multiFilter = (array) =>
  array.filter((element) => {
    const regx = /(?:[^aeoiu]*[aeoui]){1,}.*/i;

    // console.log(element.capital.length > 7);

    // console.log(filterStartVowel([element.name]).length == 0, "------------");

    // console.log(regx.test(element.tag));
    // console.log(element.region != "South");
    return (
      element.capital.length > 7 &&
      filterStartVowel([element.name]).length == 0 &&
      regx.test(element.tag) &&
      element.region != "South"
    );
  });
