const registerServiceWorker = async () => {
  try {
    await navigator.serviceWorker.register('/widgets-pwa-no-screenshots/sw.js', { scope: '/widgets-pwa-no-screenshots/' });
    console.log('Service worker registered');
  } catch (e) {
    console.log(`Registration failed: ${e}`);
  }
}

if (navigator.serviceWorker) {
  registerServiceWorker();
}