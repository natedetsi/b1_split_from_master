import {
  caseStage
} from './utility/caseStage.js';
import {
  template
} from './components/arrays.js';


//main button router function, takes the name and value of an event and assigns it to the corrisponding
//object key, then sets the paragraph to as needed
export const buttonRouterFunction = (e) => {
  let cat = e.target.value;
  let label = e.target.name;

  //filter out template data
  if (e.target.classList.contains('toggle')){
  template[cat] = template[cat].filter(item => item != label);
  console.log(template[cat]);
  document.querySelector(`.${cat}`).innerText = template[cat].join(' - ');
  e.target.classList.remove('toggle');
  return
}

  switchFunction(cat, e, label);

  caseStage();
};

//switch statement controls what each button does base on its catergory
const switchFunction = (cat, e, label) => {
  switch (cat) {
    case 'called':
    called(cat, e, label);
    break;

    case 'Called':
    calledDairyStage(cat, e, label);
    break;

    case 'Cost':
    cost(cat, e, label);
    break;

    case 'received':
    recievedOpen(cat, e, label);
    break;

    default:
    defaultRouter(cat, e, label);
  }
}

// individual router functions //

const called = (cat, e, label) => {
  document.querySelectorAll('.call').forEach(elem => {
    elem.classList.remove('toggle');
    document.querySelector('.called').innerText = 'Called: ' + label;
  })
  e.target.classList.add('toggle');
}

const calledDairyStage = (cat, e, label) => {
  document.querySelectorAll('.call-2').forEach(elem => {
    elem.classList.remove('toggle');
    document.querySelector('.Called').innerText = 'Called: ' + label;
  })
  e.target.classList.add('toggle');
}

const cost = (cat, e, label) => {
  document.querySelectorAll('.cost-btn').forEach(elem => {
    elem.classList.remove('toggle');
    document.querySelector('.Cost').innerText = 'Cost: ' + label;
  });
  e.target.classList.add('toggle');
}

const recievedOpen = (cat, e, label) => {
  document.querySelectorAll('.mail').forEach(elem => {
    elem.classList.remove('toggle');
    document.querySelector('.received').innerText = label;
  });
  e.target.classList.add('toggle');
}

const defaultRouter = (cat, e, label) => {
  if (cat === 'Qm' && template[cat].length > 4) {
    return
  };
  e.target.classList.add('toggle');
  //get button name and value push name to array = to template.name
  template[cat].push(label);
  document.querySelector(`.${cat}`).innerText = template[cat].join(' - ');
}
