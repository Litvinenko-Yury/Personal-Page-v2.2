/**=== script modal-innerHTML.js ===*/
/**======================= */
function modal() {
  const eduImgWrap = document.querySelector('.education__img-wrap'),
    modalOverlay = document.querySelector('.modal-overlay');


  /**===================== */
  function showModal() {
    modalOverlay.classList.add('modal-overlay--show');
  }

  function showModalContent1() {
    modalOverlay.insertAdjacentHTML('afterEnd', "<img class='modal-content' src='img/rastr/img-certificate-1-1080@1x.jpg' loading='lazy' alt='Certificate №1'>");
  }

  function showModalContent2() {
    modalOverlay.insertAdjacentHTML('afterEnd', "<img class='modal-content' src='img/rastr/img-certificate-2-1080@1x.jpg' loading='lazy' alt='Certificate №1'>");
  }

  function closeModal() {
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
      modalContent.remove();
      modalOverlay.classList.remove('modal-overlay--show');
    }
  }


  /*=============================*/
  /*Показать модальное окно:*/
  /*события по клику на img-preview*/
  eduImgWrap.addEventListener('click', function (event) {
    let target = event.target; // где был клик?

    if (target.classList.contains('education__img--1')) {
      showModal();
      showModalContent1();
    }

    if (target.classList.contains('education__img--2')) {
      showModal();
      showModalContent2();
    }
  });


  /*=============================*/
  /*1-Закрыть модальное окно:*/
  /*события по клику на изображение*/
  document.addEventListener('click', function (event) {
    let target = event.target; // где был клик?

    if (target.classList.contains('modal-content')) {
      closeModal();
    }
  });

  /*2-Закрыть модальное окно:*/
  /*события по клику на затененный фон*/
  modalOverlay.addEventListener("click", function (event) {
    closeModal();
  });

  /*3-Закрыть модальное окно:*/
  /*события по нажатию ESC*/
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    } else if (event.keyCode === 27) {
      closeModal();
    }
  });
}

export default modal;
