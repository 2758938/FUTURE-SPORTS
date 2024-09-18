// index.js sets up the rendering process and index

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Function to change the text of the paragraph element - experimenting
function changeText() {
  const greetingElement = document.getElementById('greeting');
  greetingElement.textContent = 'The text has been changed!';
}

// Attach the function to the button's click event
document.getElementById('changeTextButton').addEventListener('click', changeText);

