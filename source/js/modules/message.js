function showMessage() {
  // const message = document.querySelector('#message');

  document.querySelector('.me__header-wrap').addEventListener('mouseover', () => {
    if (!document.querySelector('.me__header-wrap').classList.contains('active')) {
      console.log('if !')
      message.classList.add('message--show');
    }
})

document.querySelector('.me__header-wrap').addEventListener('mouseout', () => {
  message.classList.remove('message--show');
})

document.querySelector('.me__header-wrap').addEventListener('mouseout', () => {
  if ( document.querySelector('.me__header-wrap').classList.contains('active')) {
    console.log('if message.classList.contains(active)');
    message.classList.remove('message--show');
  }
})
}

export default showMessage;
