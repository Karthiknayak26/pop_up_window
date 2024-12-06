'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodel = document.querySelector('.close-modal');
const btnopenmodel = document.querySelectorAll('.show-modal');
console.log(btnopenmodel);

const openModel = function () {
  console.log('button clicked');
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnopenmodel.length; i++)
  // console.log(btnopenmodel[i].textContent);
  btnopenmodel[i].addEventListener('click', openModel);


btnclosemodel.addEventListener('click', closeModel);


overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  console.log('a key was pressed');
  console.log(e.key);

  if (e.key === 'Escape') {
    console.log('exc was pressed');
    if (!model.classList.contains('hidden')) {
      closeModel();
    }
  }
})
