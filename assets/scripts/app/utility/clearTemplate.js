
import {qmList, template} from '../components/arrays.js'


export function clearTemplate() {
  const a = document;

  template['Qm'] = ['Qm:'];
  template['previous'] = [''];
  template['policy'] = [' ', ''];
  template['called'] = 'Called:';
  template['sent'] = ['Sent: '];
  template['required'] = ['Required: '];

  let qmList = ['']
  a.querySelector('.Qm').innerText = 'QM: ';
  a.querySelector('.prev').innerText = 'Previous insurer: ';
  a.querySelector('#prev').innerText = 'Previous Insurer: ';
  a.querySelector('.called').innerText = 'Called:   ';
  a.querySelector('.sent').innerText = 'Sent:   ';
  a.querySelector('.required').innerText = 'Required:   ';
  a.querySelector('.q-info').innerText = '';
  a.querySelectorAll('.open input').forEach((elem) => {
    elem.value = '';
  });
  a.querySelector('.extra-info').innerText = '';
  document.querySelectorAll('.open button').forEach((elem) => {
    elem.classList.remove('toggle');
  });
  document.querySelector('.focus').focus();
};
