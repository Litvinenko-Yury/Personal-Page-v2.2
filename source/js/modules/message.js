function showMessage() {
  const meHeaderWrap = document.querySelector('.me__header-wrap');

  meHeaderWrap.addEventListener('mouseover', () => {
    if (!document.querySelector('.me__header-wrap').classList.contains('active')) {
      console.log('if !')
      message.classList.add('message--show');
    }
  })

  meHeaderWrap.addEventListener('mouseout', () => {
    message.classList.remove('message--show');
  })

  meHeaderWrap.addEventListener('mouseout', () => {
    if (document.querySelector('.me__header-wrap').classList.contains('active')) {
      console.log('if message.classList.contains(active)');
      message.classList.remove('message--show');
    }
  })
}

export default showMessage;
