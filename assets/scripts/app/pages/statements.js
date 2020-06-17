
import { statements } from '.././components/objects.js';




let tog = true;

export function statementSlide() {
  const x = document.querySelector('.statement');
  const btn = document.querySelector('.btn-s');
  tog = !tog;
  if (tog === false) {
    document.querySelector('#statement-focus').focus();
    x.style.bottom = '0';
    document.querySelector('.side-notes').style.left = '-100%';
    document.querySelector('.ncd-template').style.right = '-100%';
    document.querySelector('.btn-notes').classList.remove('toggle');
    document.querySelector('.btn-ncd').classList.remove('toggle');
    document.querySelector('.btn-notes').style.top = 0;
    document.querySelector('.btn-ncd').style.top = 0;
    btn.style.top = '5px';
    btn.classList.add('toggle');

  } else if (tog === true) {
    x.style.bottom = '-100%';
    btn.style.top = 0;
    btn.classList.remove('toggle');
  }
};


export const statementDropdownHandler = (e) => {
 let statement = document.querySelector('.statement-dropdown');
 statement = statement.options[statement.selectedIndex].value;

 document.querySelector('.statement-paragraph').innerHTML = statements[`${statement}`];

};
//statement dropdown event handler
document.querySelector('.statement-dropdown').addEventListener('click', statementDropdownHandler)
