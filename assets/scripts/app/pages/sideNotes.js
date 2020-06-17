


let tog = true;
export function sideNotes() {

  const btn = document.querySelector('.btn-notes');
  const ybtn = document.querySelector('.btn-ncd');
  tog = !tog;
  if (tog === false) {
    document.querySelector('#further').focus();
    document.querySelector('.side-notes').style.left = '50%';
    btn.style.top = '5px';
    btn.classList.add('toggle')
    document.querySelector('.ncd-template').style.right = "-100%";
    ybtn.style.top = 0;
    ybtn.classList.remove('toggle');
  } else if (tog === true) {
    document.querySelector('.side-notes').style.left = "-100%";
    btn.style.top = 0;
    btn.classList.remove('toggle');

  };
};
