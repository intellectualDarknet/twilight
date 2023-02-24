import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/style.scss';
import './styles/reset.scss';

const rootNode = document.getElementById('app');
const modalRoot = document.getElementById('modal');
const contextMenu = document.getElementById('contextMenu');

console.log(rootNode);
console.log(modalRoot);
if (rootNode != null) {
  createRoot(rootNode).render(<App />);
}
if (modalRoot != null) {
  createRoot(modalRoot).render(<></>);
}
if (contextMenu != null) {
  createRoot(contextMenu).render(<></>);
}
