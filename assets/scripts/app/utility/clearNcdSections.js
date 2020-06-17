
import { ncdTemplate} from '../components/arrays.js';
import {clearCon, clearClaim} from '../pages/ncdTemplate.js'




export function clearNcd() {
  const a = document;
  a.querySelector('.conviction-span').innerText = 'Not Confirmed';
  a.querySelector('.claim-span').innerText = 'Not Confirmed';
  let ncdTemplate = {
    reg: 'Vehicle Reg: ',
    years: '',
    expire: '',
  }

clearClaim();
clearCon()

  let newClaim = [];
  let newCon = [];
  a.querySelectorAll('.ncd-template input').forEach(elem => {
    elem.value = '';
  });
  a.querySelector('.claims').innerHTML = '';
  a.querySelector('.convictions').innerHTML = '';
  a.querySelector('#prev').innerText = 'Previous Insurer: ';
  a.querySelector('.reg').innerText = '';
  a.querySelector('.expire').innerText = '';
  a.querySelector('.years').innerText = '';
  a.querySelector('#focus-1').focus();
}
