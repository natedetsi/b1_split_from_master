import {sideNotes} from './pages/sideNotes.js';
import {ncdClick} from './pages/ncdTemplate.js';
import {statementSlide} from './pages/statements.js';
import {question} from './pages/questions.js'
import {slideTools} from './pages/tools.js'




export const shortcuts = (e) => {

  if (e.ctrlKey === true && e.keyCode === 37) {
    ncdClick();
  } else if (e.ctrlKey === true && e.keyCode == 40 ) {
    question();
  } else if (e.ctrlKey === true && e.keyCode == 39 ) {
    sideNotes();
  } else if (e.ctrlKey === true && e.keyCode == 38  ) {
    statementSlide();
  } else if (e.ctrlKey === true && e.keyCode == 191 ) {
    slideTools();
  } else if (e.ctrlKey === true && e.keyCode == 73 ) {
    e.preventDefault();
  } else if (e.ctrlKey === true && e.keyCode == 40) {
    question();
  } else if (e.ctrlKey === true && e.keyCode == 39) {
    sideNotes();
  } else if (e.ctrlKey === true && e.keyCode == 38) {
    statementSlide();
  } else if (e.ctrlKey === true && e.keyCode == 191) {
    slideTools();
  } else if (e.ctrlKey === true && e.keyCode == 73) {
    information();
  }
};
