
///// module imports//////
import {shortcuts} from './app/shortcuts.js';
import {sideNotes} from './app/pages/sideNotes.js';
import {ncdClick, ncdInputHandler} from './app/pages/ncdTemplate.js';
import {statementSlide} from './app/pages/statements.js';
import {question, questionsArrayPusher} from './app/pages/questions.js';
import {slideTools} from './app/pages/tools.js';
import {buttonRouterFunction} from './app/buttonRouter.js';
import {handleInputs} from './app/handleInputs.js';
import {clearTemplate} from './app/utility/clearTemplate.js';
import {copy} from './app/utility/copy.js';
import {policyInputHandler} from './app/policyInformationInputHandler.js';
import {questions, statements} from './app/components/objects.js';
import {dateCalc} from './app/components/tools/dateCalculator.js';
import {interestCalculatorHandler, interDiff} from './app/components/tools/interestCalculator.js';
import {calculator} from './app/components/tools/calculator.js';
import {clearDairy} from './app/utility/clearDairy.js';
import {clearText} from './app/utility/clearText.js';

let tog = true;
//////////// event listeners/////////////////////////

document.addEventListener('keydown', shortcuts);

document.querySelector('#side-notes').addEventListener('click', sideNotes);

document.querySelector('#ncd-slide').addEventListener('click', ncdClick);

document.querySelector('#statement-slide').addEventListener('click', statementSlide);

document.querySelector('#tools-slide').addEventListener('click', slideTools);

document.querySelector('#questions-slide').addEventListener('click', question);

//main button router function handler
document.querySelectorAll('div[data="filter"] button').forEach((elem) => {
  elem.addEventListener('click', (e) => {
    buttonRouterFunction(e);
    questionsArrayPusher(e);
  });
  });



///handle input fields events
document.querySelectorAll('.handle').forEach( elem => {
  elem.addEventListener('keyup', handleInputs)
});

// policy information event handler
document.querySelectorAll('.second').forEach((elem) => {
  elem.addEventListener('keyup', policyInputHandler)
});



//Copy by id events
document.querySelector('.copy-para').addEventListener('click', () => {copy('para')});

document.querySelector('.copy-notes').addEventListener('click', () => {copy('further')});

document.querySelector('.copy-dairy-template').addEventListener('click', () => {copy('para-dairy')})

document.querySelector('.copy-ncd-template').addEventListener('click', () => {copy('ncd-template')})



/// clear template eventlistener

document.querySelector('.clear-open-template').addEventListener('click', clearTemplate);

/////////////////////////////////////// Clear dairy function /////////////////////////////////
document.querySelector('.clear-dairy-template').addEventListener('click', clearDairy);

////////////////////////////////////// clear further notes section ///////////////////////
document.querySelector('.clear-notes').addEventListener('click', () => {clearText('further')});

//////// if input value is less than one hide paragraph//////////
  setInterval(() => {
    const a = document;
    a.querySelectorAll('.handle').forEach(elem => {

     if(elem.value.length < 1 && elem.name != 'called' && elem.name != 'Called' && elem.name != 'Cost'){
        a.querySelector(`.${elem.name}`).innerText = '';
      }
    })
  },500)



// NCD pages input handler function
document.querySelectorAll('.ncdInputs input').forEach(elem => {
  elem.addEventListener('keyup',
  ncdInputHandler);
});


/////////////////////////////////// save light choice /////////////////////////////////////
var theme = localStorage.getItem('theme');
var togglePosition = localStorage.getItem('togglePosition');

if(theme) {
  document.querySelector('body').classList.remove('light-mode');
  document.querySelector('body').classList.add('dark-mode');
  document.querySelector('body').classList.add(theme);
}
if(togglePosition) {
  document.querySelector('.mode-switch').style.left = `${togglePosition}`;
}

//////////////////////////////////// change light mode ////////////////////////////////////
document.querySelector('.mode').addEventListener('click', () => {
tog =!tog;
if(tog === false){
  document.querySelector('body').classList.replace('light-mode', 'dark-mode');
  document.querySelector('.mode-switch').style.left = '50%';
  localStorage.setItem('theme', 'dark-mode');
  localStorage.setItem('togglePosition', '50%');
} else {
  document.querySelector('body').classList.replace('dark-mode', 'light-mode');
  document.querySelector('.mode-switch').style.left = '0';
  localStorage.setItem('theme', 'light-mode');
  localStorage.setItem('togglePosition', '0');
}
});
///////////////////////////// mode switching ////////////////////////////////////////
/// switch between the open stage buttons and the dairy stage buttons
document.querySelector('.btn-mode').addEventListener('click', () => {
  tog =!tog;
  if(tog === false){
    document.querySelectorAll('.dairy').forEach(elem => {
      elem.style.height = 'auto';
      elem.style.visibility = 'visible';
    });
    document.querySelectorAll('.open').forEach(elem => {
      elem.style.height = 0;
      elem.style.visibility = 'collapse';
    })
    document.querySelector('.btn-switch').style.left = '50%';
  } else {
    document.querySelectorAll('.dairy').forEach((elem) => {
      elem.style.height = 0;
      elem.style.visibility = 'collapse';
    });
    document.querySelectorAll('.open').forEach(elem => {
      elem.style.height = 'auto';
      elem.style.visibility = 'visible';
    })
    document.querySelector('.btn-switch').style.left = '0';
  }
})
