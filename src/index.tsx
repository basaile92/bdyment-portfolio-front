import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Console from './component/console/Console';
import reportWebVitals from './reportWebVitals';

//fonts
import "./fonts/UbuntuMono-Bold.ttf"
import "./fonts/UbuntuMono-Italic.ttf"
import "./fonts/UbuntuMono-BoldItalic.ttf"
import "./fonts/UbuntuMono-Regular.ttf"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Console />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
