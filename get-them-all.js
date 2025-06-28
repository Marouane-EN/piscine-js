export function getArchitects() {
  const atag = document.querySelectorAll("a");
  const notatag = document.querySelectorAll("span");
  //   console.log(atag,notatag);

  return [atag, notatag];
}
export function getClassical() {
  const classe1 = document.querySelectorAll("a.classical");
  const notclasse1 = document.querySelectorAll(":not(.classical)");
  //   console.log(classe1, notclasse1);

  return [classe1, notclasse1];
}
export function getActive() {
  // console.log("ttttttttttttttt");

  const activeclasse1 = document.querySelectorAll("a.classical.active");
  const notactiveclasse1 = document.querySelectorAll(
    ":not(a.classical.active)"
  );
  console.log(activeclasse1, notactiveclasse1);

  return [activeclasse1, notactiveclasse1];
}
export function getBonannoPisano() {
  const BonannoPisano = document.getElementById("BonannoPisano");
  const dsd = document.querySelectorAll(":not(#BonannoPisano)");
  return [BonannoPisano, dsd];
}
