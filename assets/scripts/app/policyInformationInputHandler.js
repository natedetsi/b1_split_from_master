
import {template} from './components/arrays.js'

export const policyInputHandler = (e) => {
  let pcat = e.target.classList[1];
  if (pcat === 'previous') {
    template.previous.pop();
    template.previous.push(e.target.value);
  } else if (pcat === 'policy-number') {
    template.policy.pop();
    template.policy.push(e.target.value);
  };
  document.querySelectorAll('.prev').forEach((elem) => {
    elem.innerText = 'Previous Insurer: ' + template.previous.join('') + " - " + template.policy.join('');
  });

};
