
import {ncdTemplate} from '.././components/arrays.js';
import { clearNcd } from '.././utility/clearNcdSections.js';
import {copy} from '.././utility/copy.js';

// vairables
let tog = true;

// init arrays
let ncdClaims = {
    type: [],
    date: [],
    name: [],
    fault: []
  };

let  newClaim = [];

 let ncdCon = {
  code: [],
  date: [],
  name: []
}

 let newCon = [];

//slide in NCD temlpate section
export function ncdClick() {
  const x = document.querySelector('.ncd-template');
  const btn = document.querySelector('.btn-ncd');
  const y = document.querySelector('.side-notes');
  const yBtn = document.querySelector('.btn-notes');
  const check = document.querySelector('.previous');
  tog = !tog;
  if (tog === false) {
    if(check.value.length <= 0){
        document.querySelector('#focus-1').focus();
    } else {
      document.querySelector('#focus-2').focus();
    }
    x.style.right = '50%';
    btn.style.top = '5px';
    btn.classList.add('toggle');
    y.style.left = '-100%';
    yBtn.style.top = 0;
    yBtn.classList.remove('toggle');
  } else if (tog === true) {
    document.querySelector('.focus').focus();
    x.style.right = '-100%';
    btn.style.top = 0;
    btn.classList.remove('toggle');

  }
}

//handle NCD inputs
export const ncdInputHandler = (e) => {
  if (e.target.classList.contains('second')) {return};
  const cat = e.target.name;
  ncdTemplate[cat] = e.target.value;
  document.querySelector(`.${cat}`).innerText = `${ncdTemplate[cat]}`;

};


////////////////////////////////////////// claims ///////////////////////////
//clear claim arrays function

 export const clearClaim = () => {
  ncdClaims = {
    type: [],
    date: [],
    name: [],
    fault: []
  };
   newClaim = [];
  document.querySelectorAll('.claim').forEach(elem => {
    elem.value = '';
  })
}
// create claim and push to array
  export const createClaim = (e) => {
    const cat = e.target.name;
    ncdClaims[cat].pop();
    ncdClaims[cat].push(e.target.value);
  };

  document.querySelectorAll('.claim').forEach(elem => {
    elem.addEventListener('keyup', createClaim);
  });

// on button click append new claim to template
export const addCreatedClaim = () => {
  document.querySelector('.claim-span').innerText = '';
  newClaim.push(ncdClaims.type);
  newClaim.push(ncdClaims.date);
  newClaim.push(ncdClaims.name);
  newClaim.push(ncdClaims.fault);

  let node = document.createElement('p');
  let nodeText = document.createTextNode(`${newClaim.join(' - ')}`)
  node.appendChild(nodeText);
  document.querySelector('.claims').appendChild(node);
  clearClaim();
};
document.querySelector('.claim-button').addEventListener('click', addCreatedClaim);


//set default claims to dropdown menu option
export const setDefaultClaimOption = (e) => {
  let option = document.querySelector('.default-claim');
  option = option.options[option.selectedIndex].text;
  document.querySelector('.claim-span').innerText = option;
};
document.querySelector('.default-claim').addEventListener('click', setDefaultClaimOption);
/////////////////////////////////// convictions /////////////////////////////////////




export function clearCon() {
ncdCon = {
    code: [],
    date: [],
    name: []
  };
 newCon = [];
  document.querySelectorAll('.conviction').forEach(elem => {
    elem.value = '';
  });
}



//create conviction and add to array
  export const createConvcition = (e) => {
    const cat = e.target.name;
    ncdCon[cat].pop();
    ncdCon[cat].push(e.target.value);
  };

  document.querySelectorAll('.conviction').forEach(elem => {
    elem.addEventListener('keyup', createConvcition);
  });

//append created convcition to template
export const addCreatedConviction = () => {
  document.querySelector('.conviction-span').innerText = '';
  newCon.push(ncdCon.code.toString().toUpperCase());
  newCon.push(ncdCon.date);
  newCon.push(ncdCon.name);

  let node = document.createElement('p');
  let nodeText = document.createTextNode(`${newCon.join(' - ')}`);
  node.appendChild(nodeText);
  document.querySelector('.convictions').appendChild(node);
  clearCon();

};
document.querySelector('.conviction-button').addEventListener('click', addCreatedConviction);

// set default conviction by dropdown menu option
export const setDefaultConvictionOption = (e) => {
  let option = document.querySelector('.default-conviction');
  option = option.options[option.selectedIndex].text;
  document.querySelector('.conviction-span').innerText = option;
};
document.querySelector('.default-conviction').addEventListener('click', setDefaultConvictionOption);

/// clear NCD template event
document.querySelector('.clear-ncd-template').addEventListener('click', clearNcd)
