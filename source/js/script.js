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
let meLink = document.querySelector('.me__link');

/**======================= */
/*===клик на CONTACT*/
contactHeaderWrap.addEventListener('click', function () {
  me.classList.toggle('me--none');
  contact.classList.toggle('contact--width');
  contactHeaderWrap.classList.toggle('contact__header-wrap--width');
  contactListWrap.classList.toggle('contact__list-wrap--width');
});

contactHeaderWrap.addEventListener('mouseover', function () {
  if (contactHeaderWrap.classList.contains('contact__header-wrap--width') === true) {
    addBackRight();
    //addBack();
  } else {
    addContactRight();
  }
});

contactHeaderWrap.addEventListener('mouseout', function () {
  if (contactHeaderWrap.classList.contains('contact__header-wrap--width') === true) {
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
  meHeaderWrap.classList.toggle('me__header-wrap--width');
  meListWrap.classList.toggle('me__list-wrap--width');
});

meHeaderWrap.addEventListener('mouseover', function () {
  if (meHeaderWrap.classList.contains('me__header-wrap--width') === true) {
    addBackleft();
  } else {
    addMeLeft();
  }
});

meHeaderWrap.addEventListener('mouseout', function () {
  if (meHeaderWrap.classList.contains('me__header-wrap--width') === true) {
    addMeLeft();
  } else {
    addMeLeft();
  }
});


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

function addBackMeLink() {
  meLink.innerHTML = "BACK";
};

function addSkillsMeLink() {
  meLink.innerHTML = "SKILLS";
};

/**======================= */
/*===клик на .me__link--skills*/
let meLinkSkills = meList.querySelector('.me__link--skills');
let meWrapper = me.querySelector('.me__wrapper');

//скрыть .me, изменить border, показать .me__wrapper, добавить .me__link--active
meLinkSkills.addEventListener('click', function () {
  meHeaderWrap.classList.add('me__header-wrap--none'); //скрыть .me
  meList.classList.add('me__list--border'); // изменить border
  meWrapper.classList.add('me__wrapper--width'); //показать .me__wrapper
  meLinkSkills.classList.add('me__link--active'); //добавить .me__link--active
  meLinkCard.classList.remove('me__link--active'); //удалить .me__link--active для Card
  meLinkEdu.classList.remove('me__link--active'); //удалить .me__link--active для Edu
});

//изменить содержимое на BACK
meLinkSkills.addEventListener('mouseover', function () {
  if (meLinkSkills.classList.contains('me__link--active') === true) {
    meLinkSkills.innerHTML = "BACK";
  }
});

//изменить содержимое на SKILLS
meLinkSkills.addEventListener('mouseout', function () {
  if (meLinkSkills.classList.contains('me__link--active') === true) {
    meLinkSkills.innerHTML = "SKILLS";
  }
});

/**======================= */
/*===клик на .me__link--card-list*/
let meLinkCard = meList.querySelector('.me__link--card-list');

meLinkCard.addEventListener('click', function () {
  meHeaderWrap.classList.add('me__header-wrap--none'); //скрыть .me
  meList.classList.add('me__list--border'); // изменить border
  meWrapper.classList.add('me__wrapper--width'); //показать .me__wrapper
  meLinkCard.classList.add('me__link--active'); //добавить .me__link--active
  meLinkSkills.classList.remove('me__link--active'); //удалить .me__link--active для Skills
  meLinkEdu.classList.remove('me__link--active'); //удалить .me__link--active для Edu
});

//изменить содержимое на BACK
meLinkCard.addEventListener('mouseover', function () {
  if (meLinkCard.classList.contains('me__link--active') === true) {
    meLinkCard.innerHTML = "BACK";
  }
});

//изменить содержимое на PORTFILIO
meLinkCard.addEventListener('mouseout', function () {
  if (meLinkCard.classList.contains('me__link--active') === true) {
    meLinkCard.innerHTML = "PORTFILIO";
  }
});

/**======================= */
/*===клик на .me__link--edu*/
let meLinkEdu = meList.querySelector('.me__link--edu');

meLinkEdu.addEventListener('click', function () {
  meHeaderWrap.classList.add('me__header-wrap--none'); //скрыть .me
  meList.classList.add('me__list--border'); // изменить border
  meWrapper.classList.add('me__wrapper--width'); //показать .me__wrapper
  meLinkEdu.classList.add('me__link--active'); //добавить .me__link--active
  meLinkSkills.classList.remove('me__link--active'); //удалить .me__link--active для Skills
  meLinkCard.classList.remove('me__link--active'); //удалить .me__link--active для Card
});

//изменить содержимое на BACK
meLinkEdu.addEventListener('mouseover', function () {
  if (meLinkEdu.classList.contains('me__link--active') === true) {
    meLinkEdu.innerHTML = "BACK";
  }
});

//изменить содержимое на PORTFILIO
meLinkEdu.addEventListener('mouseout', function () {
  if (meLinkEdu.classList.contains('me__link--active') === true) {
    meLinkEdu.innerHTML = "EDUCATION";
  }
});

