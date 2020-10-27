/**===Функция определения браузера Internet Explorer===*/
function navigator() {
  function isInternetExplorer() {
    return window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
  }

  console.log(window.navigator.userAgent);

  if (isInternetExplorer() === false) {
    console.log('Браузер не IE');
  } else {
    console.log('Я большой поклонник винтажных вещей, но ваш браузер слишком старомоден. Текущая версия вашего браузера устарела. Установите браузер Microsoft Edge последней версии.');
  }
}

export default navigator;
