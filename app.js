// Register ServiceWorker will allow our browser to install it
window.addEventListener('load', e => {
  registerSW(); 
});

/*To check browser supports service worker registration or not
will add following functionality after event listener
The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner 
style, avoiding the need to explicitly configure promise chains.*/
async function registerSW() { 
  //Checking the browser support for ServiceWorker before trying to register one.
  if ('serviceWorker' in navigator) { 
    try {
      await navigator.serviceWorker.register('./sw.js'); //Register service worker
    } catch (e) {
      alert('Failed to register ServiceWorker. Sorry for the inconvenience!!'); 
    }
  } else { //showing error message for browser does not support Service worker
    document.querySelector('.alert').removeAttribute('hidden'); 
  }
}