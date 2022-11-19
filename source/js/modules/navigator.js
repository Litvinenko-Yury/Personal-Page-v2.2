/**===Browser detection function: Internet Explorer===*/
function navigator() {
  function isInternetExplorer() {
    return window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
  }

  // console.log(window.navigator.userAgent);

  if (isInternetExplorer() === false) {
    console.log('Browser not IE');
  } else {
    console.log('I\'m a big fan of vintage stuff, but your browser is too old. Install the latest Microsoft Edge browser.');
  }
}

export default navigator;
