import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import HomePage from './homePage';
import NowyStop from './nowyStop';
import Korekta from './Korekta';
import Stop033 from './033.jsx'
import Stop035 from './035';
import Stop039 from './039';
import Stop045 from './045';
import Stop048 from './048';
import Stop049 from './049';
import Stop033k from './k033';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/nowy' element={<NowyStop />} />
        <Route path='/nowy/033' element={<Stop033 />} />
        <Route path='/nowy/035' element={<Stop035 />} />
        <Route path='/nowy/039' element={<Stop039 />} />
        <Route path='/nowy/045' element={<Stop045 />} />
        <Route path='/nowy/048' element={<Stop048 />} />
        <Route path='/nowy/049' element={<Stop049 />} />

        <Route path='/korekta' element={<Korekta />} />
        <Route path='/korekta/033' element={<Stop033k />} />
        <Route path='/korekta/035' element={<Korekta />} />
        <Route path='/korekta/039' element={<Korekta />} />
        <Route path='/korekta/045' element={<Korekta />} />
        <Route path='/korekta/048' element={<Korekta />} />
        <Route path='/korekta/049' element={<Korekta />} />
     

      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

