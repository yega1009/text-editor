const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Handles the 'beforeinstallprompt' event
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  // Makes the install button visible
  butInstall.classList.toggle("hidden", false);
});

// Click event handler for the install button
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  // Checks if the prompt event is available
  if (!promptEvent) {
    return;
  }
  // Displays the installation prompt to the user
  promptEvent.prompt();
  // Clears the deferred prompt after use
  window.deferredPrompt = null;
  // Hides the install button after prompt is shown
  butInstall.classList.toggle("hidden", true);
});

// Event handler for 'appinstalled' event
window.addEventListener('appinstalled', (event) => {
  // Clears the deferredPrompt variable after the app is installed
  window.deferredPrompt = null;
});