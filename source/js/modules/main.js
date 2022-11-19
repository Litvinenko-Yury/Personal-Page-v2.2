/*****/
/*main script*/

function main() {
  const contact = document.querySelector('.contact');
  const me = document.querySelector('.me');

  const contactHeaderWrap = document.querySelector('.contact__header-wrap');
  const meHeaderWrap = document.querySelector('.me__header-wrap');

  const contactHeader = document.querySelector('.contact__header');
  const meHeader = document.querySelector('.me__header');

  const contactListWrap = document.querySelector('.contact__list-wrap');
  const meListWrap = document.querySelector('.me__list-wrap');

  const meList = document.querySelector('.me__list');


  /*===Functions===*/
  function addBackRight() {
    contactHeader.innerHTML = "BACK";
  }

  function addBackleft() {
    meHeader.innerHTML = "BACK";
  }

  function addBack(a) {
    a.innerHTML = "BACK";
  }

  function addContactRight() {
    contactHeader.innerHTML = "CONTACT";
  }

  function addMeLeft() {
    meHeader.innerHTML = "ME";
  }

  /*скрыть .me__header-wrap*/
  function hideMeHeaderWrap() {
    meHeaderWrap.classList.remove('me__header-wrap--width-0-50');
    meHeaderWrap.classList.add('me__header-wrap--width-50-0');
  }

  /*показать .me__header-wrap*/
  function showMeHeaderWrap() {
    meHeaderWrap.classList.remove('me__header-wrap--width-50-0');
    meHeaderWrap.classList.add('me__header-wrap--width-0-50');
  }

  /*показать .me__wrapper*/
  const meWrapper = me.querySelector('.me__wrapper');
  function showMeWrapper() {
    meWrapper.classList.add('me__wrapper--show'); //показать .me__wrapper
    meList.classList.add('me__list--border'); // изменить border
  }

  /*скрыть .me__wrapper*/
  function hideMeWrapper() {
    meWrapper.classList.remove('me__wrapper--show'); //скрыть .me__wrapper
    meList.classList.remove('me__list--border'); // изменить border в первоначальное состояние
  }

  /*удалить .me__link--ххх*/
  function removeActive() {
    meLinkSkills.classList.remove('me__link--active'); //remove .me__link--active для Skills
    meLinkCard.classList.remove('me__link--active'); //remove .me__link--active для Card
    meLinkEdu.classList.remove('me__link--active'); //remove .me__link--active для Edu
    meLinkAbout.classList.remove('me__link--active'); //remove .me__link--active для About
  }

  /*click on CONTACT*/
  function clickContactHeaderWrap() {
    if (contact.classList.contains('contact--width-50-100')) {
      // уменьшить ширину .contact
      contact.classList.remove('contact--width-50-100');
      contact.classList.add('contact--width-100-50');
      function removeContactWidth_100_50() {
        contact.classList.remove('contact--width-100-50');
      }
      setTimeout(removeContactWidth_100_50, 400);

      // уменьшить ширину .contact__list-wrap
      contactListWrap.classList.remove('contact__list-wrap--width-0-50');
      contactListWrap.classList.add('contact__list-wrap--width-50-0');
      function removeContactListWrap_50_0() {
        contactListWrap.classList.remove('contact__list-wrap--width-50-0');
      }
      setTimeout(removeContactListWrap_50_0, 400);

      // изменить  содержимое .contact__header
      addContactRight();

      // увеличить ширину .me
      me.classList.remove('me--width-50-0')
      me.style.display = "";
      me.classList.add('me--width-0-50');
      function removeMeWidth_0_50() {
        me.classList.remove('me--width-0-50');
      }
      setTimeout(removeMeWidth_0_50, 400);

      // и удалить .active
      contactHeaderWrap.classList.remove('active');

    } else {
      contact.classList.add('contact--width-50-100');
      contactListWrap.classList.add('contact__list-wrap--width-0-50');
      contactHeaderWrap.classList.add('active');
      if (document.documentElement.clientWidth < 960) {
        addBackRight();
      }

      me.classList.add('me--width-50-0');
      function addMeDisplayNone() {
        me.style.display = "none";
      }
      setTimeout(addMeDisplayNone, 400);
    }
  }

  /*click on ME*/
  function clickMeHeaderWrap() {
    if (me.classList.contains('me--width-50-100')) {
      //уменьшить ширину .me
      me.classList.remove('me--width-50-100');
      me.classList.add('me--width-100-50');
      function removeMeWidth_100_50() {
        me.classList.remove('me--width-100-50');
      }
      setTimeout(removeMeWidth_100_50, 400);

      // уменьшить ширину .me__list-wrap
      meListWrap.classList.remove('me__list-wrap--width-0-50');
      meListWrap.classList.add('me__list-wrap--width-50-0');
      function removeMeListWrap_50_0() {
        meListWrap.classList.remove('me__list-wrap--width-50-0');
      }
      setTimeout(removeMeListWrap_50_0, 400);

      // изменить  содержимое .contact__header
      addMeLeft();

      // увеличить ширину .contact
      contact.classList.remove('contact--width-50-0');
      contact.style.display = "";
      contact.classList.add('contact--width-0-50');
      function removeContactWidth_0_50() {
        contact.classList.remove('contact--width-0-50');
      }
      setTimeout(removeContactWidth_0_50, 400);

      // удалить .active и модификатор &--width-0-50
      meHeaderWrap.classList.remove('active');
      meHeaderWrap.classList.remove('me__header-wrap--width-0-50');

    } else {
      me.classList.add('me--width-50-100');
      meListWrap.classList.add('me__list-wrap--width-0-50');
      meHeaderWrap.classList.add('active');
      if (document.documentElement.clientWidth < 960) {
        addBackleft();
      }

      contact.classList.add('contact--width-50-0');
      function addContactDisplayNone() {
        contact.style.display = "none";
      }
      setTimeout(addContactDisplayNone, 400);
    }
  }


  /**===Events===*/
  /*events - на CONTACT (.contact__header-wrap)*/
  contactHeaderWrap.addEventListener('pointerdown', function () {
    clickContactHeaderWrap();
  });

  contactHeaderWrap.addEventListener('mouseover', function () {
    if (this.classList.contains('active')) {
      addBackRight();
    } else {
      addContactRight();
    }
  });

  contactHeaderWrap.addEventListener('mouseout', function () {
    if (this.classList.contains('active')) {
      addContactRight();
    }
  });

  /*events -  на ME*/
  meHeaderWrap.addEventListener('pointerdown', function () {
    clickMeHeaderWrap();
  });

  meHeaderWrap.addEventListener('mouseover', function () {
    if (this.classList.contains('active')) {
      addBackleft();
    } else {
      addMeLeft();
    }
  });

  meHeaderWrap.addEventListener('mouseout', function () {
    if (this.classList.contains('active')) {
      addMeLeft();
    }
  });


  /*events - на .me__link--skills*/
  const meLinkSkills = meList.querySelector('.me__link--skills');
  meLinkSkills.addEventListener('pointerdown', function () {
    if (this.innerHTML === 'BACK') {
      hideMeWrapper();
      showMeHeaderWrap();
      this.classList.remove('me__link--active'); //удалить .me__link--active
      this.innerHTML = 'SKILLS'; //изменить BACK на SKILLS
    } else {
      hideMeHeaderWrap();
      showMeWrapper();

      removeActive();
      this.classList.add('me__link--active'); //добавить .me__link--active

      //для $mob-width изменить содержимое на BACK
      if (document.documentElement.clientWidth < 960) {
        addBack(this);
      }
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


  /*events - на .me__link--card-list*/
  const meLinkCard = meList.querySelector('.me__link--card-list');
  meLinkCard.addEventListener('pointerdown', function () {
    if (this.innerHTML === 'BACK') {
      hideMeWrapper();
      showMeHeaderWrap();
      this.classList.remove('me__link--active'); //удалить .me__link--active
      this.innerHTML = 'WORK'; //изменить BACK на Work
    } else {
      hideMeHeaderWrap();
      showMeWrapper();

      removeActive();
      this.classList.add('me__link--active'); //добавить .me__link--active

      //для $mob-width изменить содержимое на BACK
      if (document.documentElement.clientWidth < 960) {
        addBack(this);
      }
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
      this.innerHTML = "WORK";
    }
  });


  /*events на .me__link--edu*/
  const meLinkEdu = meList.querySelector('.me__link--edu');
  meLinkEdu.addEventListener('pointerdown', function () {
    if (this.innerHTML === 'BACK') {
      hideMeWrapper();
      showMeHeaderWrap();
      this.classList.remove('me__link--active'); //удалить .me__link--active
      this.innerHTML = 'Education'; //изменить BACK на Education
    } else {
      hideMeHeaderWrap();
      showMeWrapper();

      removeActive();
      this.classList.add('me__link--active'); //добавить .me__link--active

      //для $mob-width изменить содержимое на BACK
      if (document.documentElement.clientWidth < 960) {
        addBack(this);
      }
    }
  });

  //изменить содержимое на BACK
  meLinkEdu.addEventListener('mouseover', function () {
    if (this.classList.contains('me__link--active') === true) {
      this.innerHTML = "BACK";
    }
  });

  //изменить содержимое на EDUCATION
  meLinkEdu.addEventListener('mouseout', function () {
    if (this.classList.contains('me__link--active') === true) {
      this.innerHTML = "EDUCATION";
    }
  });


  /*events на .me__link--about*/
  const meLinkAbout = meList.querySelector('.me__link--about');
  meLinkAbout.addEventListener('pointerdown', function () {
    if (this.innerHTML === 'BACK') {
      hideMeWrapper();
      showMeHeaderWrap();
      this.classList.remove('me__link--active'); //удалить .me__link--active


      this.innerHTML = 'About'; //изменить BACK на ABOUT
    } else {
      hideMeHeaderWrap();
      showMeWrapper();
      removeActive();
      this.classList.add('me__link--active'); //добавить .me__link--active

      //для $mob-width изменить содержимое на BACK
      if (document.documentElement.clientWidth < 960) {
        addBack(this);
      }
    }
  });

  //изменить содержимое на BACK
  meLinkAbout.addEventListener('mouseover', function () {
    if (this.classList.contains('me__link--active') === true) {
      this.innerHTML = "BACK";
    }
  });

  //изменить содержимое на ABOUT
  meLinkAbout.addEventListener('mouseout', function () {
    if (this.classList.contains('me__link--active') === true) {
      this.innerHTML = "ABOUT";
    }
  });
}
export default main;
