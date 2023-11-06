import React from 'react';
import ThemeContext from './ThemeContext';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

import Home from './views/home';
import Contact from './views/Contact';
import News from './views/news';
import NewsDetails from './views/newsdetails'; 


const Main = () => {

  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>

    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/news' element={<News />} />
          <Route path='/newsdetails/:id' element={<NewsDetails />} />
          <Route path='/' element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeContext.Provider>

  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
