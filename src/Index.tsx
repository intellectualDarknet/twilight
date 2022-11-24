import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/style.scss'

const rootNode = document.getElementById('app');

console.log(rootNode)
if (rootNode) {
  createRoot(rootNode)
    .render(<App />);
}