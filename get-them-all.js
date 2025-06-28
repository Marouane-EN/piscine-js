export function getArchitects() {
  const atag = document.getElementsByTagName("a");
  const notatag = document.getElementsByTagName("span");
  //console.log(atag,notatag);

  return atag, notatag;
}
export function getClassical() {
  const classe1 = document.getElementsByClassName("classical");
  const notclasse1 = document.querySelectorAll(":not(.classical)");
  //console.log(classe1, notclasse1);

  return classe1, notclasse1;
}
export function getActive() {
  const activeclasse1 = document.querySelectorAll(".classical.active");
  const notactiveclasse1 = document.querySelectorAll(
    ":not(.classical.active)"
  );
  //console.log(activeclasse1,notactiveclasse1);

  return [...activeclasse1], [...notactiveclasse1];
}
export function getBonannoPisano() {
  const BonannoPisano = document.getElementById("BonannoPisano");
  const dsd = document.querySelectorAll(":not(#BonannoPisano)");
  return BonannoPisano, dsd;
}
