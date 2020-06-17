
//imports 
import {template} from '../components/arrays.js';
import {questions} from '../components/objects.js';

// toggle variable
let tog = true;

//slide in the questions tab
export function question() {
  const q = document.querySelector('.questions');
  const btn = document.querySelector('.btn-questions');
  tog = !tog;
  if (tog === false) {
    q.style.top = '40px';
    btn.classList.add('toggle');
    btn.style.top = '5px';
    document.querySelector('.ncd-template').style.right = '-100%';
    document.querySelector('.side-notes').style.left = '-100%';
  } else {
    q.style.top = '-100%';
    btn.classList.remove('toggle');
    btn.style.top = '0';

  }
}

//map through filteredButtons and push to the questions tab
let questionsArr = [];
export const questionsArrayPusher = () => {
  questionsArr = [];
  template.Qm.map(elem => {
    questionsArr.push(questions[elem]);
    document.querySelector('.q-info').innerHTML = questionsArr.join('<hr />');
  });
};
document.querySelectorAll('.top-container button').forEach(button => {
  button.addEventListener('click', questionsArrayPusher);
});
