/**===Функция определения браузера Internet Explorer===*/
function navigator() {
  function isInternetExplorer() {
    return window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
  }

  console.log(window.navigator.userAgent);

  if (isInternetExplorer() === false) {
    console.log('Браузер не IE');
  } else {
    console.log('Сочувствую, но ваш браузер IE');
  }
}

export default navigator;
