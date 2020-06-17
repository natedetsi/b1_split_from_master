

import {template} from '.././components/arrays.js';



export const caseStage = () => {
  if(template.Required.length > 1){
    document.querySelector('.status').innerText = 'Case ongoing';
  } else {
    document.querySelector('.status').innerText = 'Case Closed';
  }
}
