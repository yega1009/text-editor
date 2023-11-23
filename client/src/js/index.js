import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

// Select the main DOM element
const main = document.querySelector('#main');
main.innerHTML = '';

// Function to load the spinner during loading process
const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

// Initialize the Editor
const editor = new Editor();

// Display spinner if the editor is not defined
if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
