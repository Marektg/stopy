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
import Stop042 from './042';
import Stop043 from './043';
import Stop045k from './k045';
import Stop042k from './k042';
import Stop048k from './k048';
import Stop032 from './032';
import Stop040 from './040';
import Stop050 from './050';
import Stop039k from './k039';
import Stop040k from './k040';
import Stop044k from './k044';
import Stop043k from './k043';
import Stop049k from './k049';
import Stop050k from './k050';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/nowy' element={<NowyStop />} />
        <Route path='/nowy/032' element={<Stop032 />} />
        <Route path='/nowy/033' element={<Stop033 />} />
        <Route path='/nowy/035' element={<Stop035 />} />
        <Route path='/nowy/048' element={<Stop048 />} />
        <Route path='/nowy/039' element={<Stop039 />} />
        <Route path='/nowy/040' element={<Stop040 />} />
        <Route path='/nowy/042' element={<Stop042 />} />
        <Route path='/nowy/043' element={<Stop043 />} />
        <Route path='/nowy/045' element={<Stop045 />} />
        <Route path='/nowy/049' element={<Stop049 />} />
        <Route path='/nowy/050' element={<Stop050 />} />

        <Route path='/korekta' element={<Korekta />} />
        <Route path='/korekta/032' element={<Korekta />} />
        <Route path='/korekta/033' element={<Stop033k />} />
        <Route path='/korekta/035' element={<Korekta />} />
        <Route path='/korekta/039' element={<Stop039k />} />
        <Route path='/korekta/040' element={<Stop040k />} />
        <Route path='/korekta/042' element={<Stop042k />} />
        <Route path='/korekta/043' element={<Stop043k />} />
        <Route path='/korekta/044' element={<Stop044k />} />
        <Route path='/korekta/045' element={<Stop045k />} />
        <Route path='/korekta/048' element={<Stop048k />} />
        <Route path='/korekta/049' element={<Stop049k />} />
        <Route path='/korekta/050' element={<Stop050k />} />
     

      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

