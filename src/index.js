import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faUser);

<style>
  @import url('https://fonts.googleapis.com/css2?family=Alkatra&family=Delicious+Handrawn&family=PT+Serif&family=Poppins:wght@300&display=swap');
</style>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

