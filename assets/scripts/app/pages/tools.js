
import { dateCalc } from '../components/tools/dateCalculator.js';
import { interDiff, interestCalculatorHandler } from '.././components/tools/interestCalculator.js';

let tog = true;
//calulator eventlisterners
// interest calculator event listener
document.querySelector('.interest').addEventListener('click', interDiff);
document.querySelector('.n2').addEventListener('change', interestCalculatorHandler)

//date calculator eventlistener
document.querySelector('.date-calc').addEventListener('click', dateCalc);

// slide in tools 
export function slideTools() {
  const tools = document.querySelector('.tool-box-holder');
  const btn = document.querySelector('.btn-t');
  tog = !tog
  if (tog === false) {
    document.querySelector('#tool-focus').focus();
    btn.classList.add('toggle');
    btn.style.top = '5px';
    tools.style.left = '0';
    tools.style.transitionDelay = '0s';
    document.querySelector('.overlay').style.backgroundColor = 'rgba(0,0,0,0.4)';
  } else if (tog === true) {
    btn.classList.remove('toggle');
    btn.style.top = '0px';
    tools.style.left = '-100%';
    tools.style.transitionDelay = '0.25s';
    document.querySelector('.overlay').style.backgroundColor = 'rgba(0,0,0,0.0)';
  }
};
