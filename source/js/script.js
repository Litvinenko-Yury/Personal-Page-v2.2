"use strict";

let contact = document.querySelector('.contact');
let me = document.querySelector('.me');

let contactHeaderWrap = document.querySelector('.contact__header-wrap');
let meHeaderWrap = document.querySelector('.me__header-wrap');

let contactHeader = document.querySelector('.contact__header');
let meHeader = document.querySelector('.me__header');

let contactListWrap = document.querySelector('.contact__list-wrap');
let meListWrap = document.querySelector('.me__list-wrap');

let meList = document.querySelector('.me__list');


/**======================= */
/*===ФУНКЦИИ*/
function addBackRight() {
  contactHeader.innerHTML = "BACK";
};

function addBackleft() {
  meHeader.innerHTML = "BACK";
};

function addContactRight() {
  contactHeader.innerHTML = "CONTACT";
};

function addMeLeft() {
  meHeader.innerHTML = "ME";
};

let meWrapper = me.querySelector('.me__wrapper');
function showMeWrapper() {
  meHeaderWrap.classList.add('me__header-wrap--none'); //скрыть .me
  meList.classList.add('me__list--border'); // изменить border
  meWrapper.classList.add('me__wrapper--width'); //показать .me__wrapper
};

function hideMeWrapper() {
  meHeaderWrap.classList.remove('me__header-wrap--none'); //показать .me
  meList.classList.remove('me__list--border'); // изменить border в первоначальное состояние
  meWrapper.classList.remove('me__wrapper--width'); //скрыть .me__wrapper
};

function removeActive() {
  meLinkSkills.classList.remove('me__link--active'); //удалить .me__link--active для Skills
  meLinkCard.classList.remove('me__link--active'); //удалить .me__link--active для Card
  meLinkEdu.classList.remove('me__link--active'); //удалить .me__link--active для Edu
};


/**======================= */
/*===клик на CONTACT*/
contactHeaderWrap.addEventListener('click', function () {
  me.classList.toggle('me--none');
  contact.classList.toggle('contact--width');
  this.classList.toggle('contact__header-wrap--width');
  contactListWrap.classList.toggle('contact__list-wrap--width');
});

contactHeaderWrap.addEventListener('mouseover', function () {
  if (this.classList.contains('contact__header-wrap--width')) {
    addBackRight();
  } else {
    addContactRight();
  }
});

contactHeaderWrap.addEventListener('mouseout', function () {
  if (this.classList.contains('contact__header-wrap--width')) {
    addContactRight();
  } else {
    addContactRight();
  }
});

/**======================= */
/*===клик на ME*/
meHeaderWrap.addEventListener('click', function () {
  contact.classList.toggle('contact--none');
  me.classList.toggle('me--width');
  this.classList.toggle('me__header-wrap--width');
  meListWrap.classList.toggle('me__list-wrap--width');
});

meHeaderWrap.addEventListener('mouseover', function () {
  if (this.classList.contains('me__header-wrap--width')) {
    addBackleft();
  } else {
    addMeLeft();
  }
});

meHeaderWrap.addEventListener('mouseout', function () {
  if (this.classList.contains('me__header-wrap--width')) {
    addMeLeft();
  } else {
    addMeLeft();
  }
});


/**======================= */
/*===клик на .me__link--skills*/
let meLinkSkills = meList.querySelector('.me__link--skills');

meLinkSkills.addEventListener('click', function () {
  showMeWrapper();
  removeActive();
  this.classList.add('me__link--active'); //добавить .me__link--active

  if (this.innerHTML === 'BACK') {
    hideMeWrapper();
    this.classList.remove('me__link--active'); //удалить .me__link--active
    this.innerHTML = 'SKILLS'; //изменить BACK на SKILLS
  }
});

//изменить содержимое на BACK
meLinkSkills.addEventListener('mouseover', function () {
  if (this.classList.contains('me__link--active') === true) {
    this.innerHTML = "BACK";
  }
});

//изменить содержимое на SKILLS
meLinkSkills.addEventListener('mouseout', function () {
  if (this.classList.contains('me__link--active') === true) {
    this.innerHTML = "SKILLS";
  }
});

/**======================= */
/*===клик на .me__link--card-list*/
let meLinkCard = meList.querySelector('.me__link--card-list');

meLinkCard.addEventListener('click', function () {
  showMeWrapper();
  removeActive();
  this.classList.add('me__link--active'); //добавить .me__link--active

  if (this.innerHTML === 'BACK') {
    hideMeWrapper();
    this.classList.remove('me__link--active'); //удалить .me__link--active
    this.innerHTML = 'PORTFOLIO'; //изменить BACK на Work
  }
});

//изменить содержимое на BACK
meLinkCard.addEventListener('mouseover', function () {
  if (this.classList.contains('me__link--active') === true) {
    this.innerHTML = "BACK";
  }
});

//изменить содержимое на PORTFILIO
meLinkCard.addEventListener('mouseout', function () {
  if (this.classList.contains('me__link--active') === true) {
    this.innerHTML = "PORTFILIO";
  }
});

/**======================= */
/*===клик на .me__link--edu*/
let meLinkEdu = meList.querySelector('.me__link--edu');

meLinkEdu.addEventListener('click', function () {
  showMeWrapper();
  removeActive();
  this.classList.add('me__link--active'); //добавить .me__link--active

  if (this.innerHTML === 'BACK') {
    hideMeWrapper();
    this.classList.remove('me__link--active'); //удалить .me__link--active
    this.innerHTML = 'Education'; //изменить BACK на Education
  }
});

//изменить содержимое на BACK
meLinkEdu.addEventListener('mouseover', function () {
  if (this.classList.contains('me__link--active') === true) {
    this.innerHTML = "BACK";
  }
});

//изменить содержимое на PORTFILIO
meLinkEdu.addEventListener('mouseout', function () {
  if (this.classList.contains('me__link--active') === true) {
    this.innerHTML = "EDUCATION";
  }
});

