"use strict";

let me = document.querySelector('.me');
let contact = document.querySelector('.contact');
let contactHeaderWrap = document.querySelector('.contact__header-wrap');
let contactHeader = document.querySelector('.contact__header');
let contactListWrap = document.querySelector('.contact__list-wrap');


contactHeaderWrap.addEventListener('click', function () {
  me.classList.toggle('me--none');
  contact.classList.toggle('contact--width');
  contactHeaderWrap.classList.toggle('contact__header-wrap--width');
  contactListWrap.classList.toggle('contact__list-wrap--width');
});

contactHeaderWrap.addEventListener('mouseover', function () {
  if (contactHeaderWrap.classList.contains('contact__header-wrap--width') === true) {
    addBACK();
  } else {
    addCONTACT();
  }
});

contactHeaderWrap.addEventListener('mouseout', function () {
  if (contactHeaderWrap.classList.contains('contact__header-wrap--width') === true) {
    addCONTACT();
  } else {
    addCONTACT();
  }
});

function addBACK() {
  contactHeader.innerHTML = "BACK";
};

function addCONTACT() {
  contactHeader.innerHTML = "CONTACT";
};
