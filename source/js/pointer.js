const elem = document.querySelector('#elem'),
  pointer = document.querySelector('#pointer'),
  pointerOffsetX = pointer.offsetWidth / 2,
  pointerOffsetY = pointer.offsetHeight / 2;

document.addEventListener('mousemove', function (e) {
  pointer.style.left = (e.clientX - pointerOffsetX) + 'px';
  pointer.style.top = (e.clientY - pointerOffsetY) + 'px';
});
