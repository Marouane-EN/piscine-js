export function build(breaks) {
  let count = 0;
  const id = setInterval(() => {
    const breakDiv = document.createElement("div");
    count++;
    breakDiv.id = `brick-${count}`;
    if (count % 3 == 2) {
      breakDiv.dataset.foundation = true;
    }
    document.body.appendChild(breakDiv);
    //console.log(count);

    if (count == breaks) {
      clearInterval(id);
    }
  }, 100);
}
export function destroy() {
  const breaks = document.getElementsByTagName("div");
  //onsole.log("********************",breaks);

  if (breaks.length == 0) return;
  breaks[breaks.length - 1].remove();
}
export function repair(...ids) {
  for (let i = 0; i < ids.length; i++) {
    const breakid = document.getElementById(ids[i]);
    //console.log(breakid);

    if (!breakid) return;
    if (i % 3 == 2) {
      breakid.dataset.repaired = `in progress`;
    } else {
      breakid.dataset.repaired = `true`;
    }
  }
}
