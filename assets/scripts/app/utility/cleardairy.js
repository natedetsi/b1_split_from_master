
import {template} from '.././components/arrays.js';



// clear all dairy stage buttons, arrays, inputs and paragraphs
export function clearDairy(){
  const a = document;


  template['Called'] = 'Called:';
  template['Cost'] = '';
  template['Sent'] = ['Sent: '];
  template['Required'] = ['Required: '];

  a.querySelectorAll('.dairy input').forEach(elem => {
    elem.value = '';
  })
  a.querySelector('.received').innerText = 'Received: ';
  a.querySelector('.Confirmed').innerText = '';
  a.querySelector('.Called').innerText = 'Called:';
  a.querySelector('.Sent ').innerText = 'Sent: ';
  a.querySelector('.Required').innerText = 'Required: ';
  a.querySelector('.MTA').innerText = '';
  a.querySelector('.Cost').innerText = '';
  a.querySelector('.Further-Notes').innerText = '';
  document.querySelectorAll('.dairy button').forEach((elem) => {
    elem.classList.remove('toggle');
    document.querySelector('.focus-dairy').focus();
  });

}
