"use strict";

let contact = document.querySelector('.contact');
let me = document.querySelector('.me');

let contactHeaderWrap = document.querySelector('.contact__header-wrap');
let meHeaderWrap = document.querySelector('.me__header-wrap');

let contactHeader = document.querySelector('.contact__header');
let meHeader = document.querySelector('.me__header');

let contactListWrap = document.querySelector('.contact__list-wrap');
let meListWrap = document.querySelector('.me__list-wrap');

/*====*/
contactHeaderWrap.addEventListener('click', function () {
  me.classList.toggle('me--none');
  contact.classList.toggle('contact--width');
  contactHeaderWrap.classList.toggle('contact__header-wrap--width');
  contactListWrap.classList.toggle('contact__list-wrap--width');
});

contactHeaderWrap.addEventListener('mouseover', function () {
  if (contactHeaderWrap.classList.contains('contact__header-wrap--width') === true) {
    addBackRight();
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

/*====*/
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


/*====*/
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
