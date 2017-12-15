if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {
    scope: '/'
  }).then(registration => {
    console.log('Service Worker registration completed.');
  }).catch(err => {
    console.log('Service Worker registration failed:', err);
  });
}
