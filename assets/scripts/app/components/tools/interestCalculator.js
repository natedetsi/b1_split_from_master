


export function interDiff() {
  const n1 = document.querySelector('.n1').value;
  const n2 = document.querySelector('.n2').value;
  const i1 = document.querySelector('.i1').value;

  let diff = n1 - n2;
  let amount = Math.round(diff / i1 * 100) / 100;

  let check = amount * i1;

  let modu = Math.round((diff - check) * 100) / 100;

  document.querySelector('.total').innerText = `Total diff: £${diff}`
  document.querySelector('.amount').innerText = `Installments:  £${amount}`;
  document.querySelector('.spread-diff').innerText = `Remainder:  £${modu}`;
};

export const interestCalculatorHandler = (e) => {
  const n1 = document.querySelector('.n1').value;
  const n2 = document.querySelector('.n2').value;
  document.querySelector('.total').innerText = `Total diff: £${n1 - n2}`;
}
