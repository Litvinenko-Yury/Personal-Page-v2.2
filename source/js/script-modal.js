/**=== script-modal.js ===*/

/**======================= */
/*===ZOOM IMG */

let eduImgWrap = document.querySelector('.education__img-wrap');
let modalOverlay = document.querySelector('.modal-overlay');
let modal = document.querySelector('.modal');
let modalImg1 = document.querySelector('.modal__img--1');
let modalImg2 = document.querySelector('.modal__img--2');

function showModal() {
  modalOverlay.classList.add('modal-overlay--show');
  modal.classList.add('modal--show');
}

function closeModal() {
  modalImg1.classList.remove('modal__img--show');
  modalImg2.classList.remove('modal__img--show');
  modal.classList.remove('modal--show');
  modalOverlay.classList.remove('modal-overlay--show');
}


eduImgWrap.onclick = function (event) {
  let target = event.target; // где был клик?

  if (target.classList.contains('education__img--1')) {
    showModal();
    modalImg1.classList.add('modal__img--show'); // показать  img--1
  }

  if (target.classList.contains('education__img--2')) {
    showModal();
    modalImg2.classList.add('modal__img--show'); // показать  img--2
  }
};

/*1-Закрыть модальное окно:*/
/*события по клику на изображение*/
modal.onclick = function (event) {
  let target = event.target; // где был клик?

  if (target.classList.contains('modal__img')) {
    closeModal();
  }
};

/*2-Закрыть модальное окно:*/
/*события по клику на затененный фон*/
modalOverlay.addEventListener("click", function (event) {
  closeModal();
});

/*3-Закрыть модальное окно:*/
/*события по нажатию ESC*/
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    closeModal();
  }
});
