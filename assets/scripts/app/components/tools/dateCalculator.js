

//// years between dates calculater//////////
export function dateCalc() {

  let d1 = new Date(document.querySelector('.prev-date').valueAsNumber);
  let d2 = new Date(document.querySelector('.new-date').valueAsNumber);


  let diff = (d2 - d1) / 1000 / 60 / 60 / 24;

  if (diff < 365.25) {
    document.querySelector('.years-held span').innerText = `0 years`;
  } else {
    let years = Math.abs(Math.floor(diff / 365.25));
    document.querySelector('.years-held span').innerText = `${years} years`;
  }
}
