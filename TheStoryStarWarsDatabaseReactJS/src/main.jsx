import React from 'react'
//import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';

import App from './App.jsx'
import Header from './components/Header.jsx'; // Adjust path as per your actual structure
import Navbar from './components/Navbar.jsx'; // Adjust path as per your actual structure
import Footer from './components/Footer'; // Adjust path as per your actual structure
  

import './index.css'

const containerMainSchedule = document.getElementById('react-schedule-root');
const rootMain = createRoot(containerMainSchedule);

rootMain.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const containerHeadSetUp = document.getElementById('headSetUp');
const rootHeadSetUp = createRoot(containerHeadSetUp);

rootHeadSetUp.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);


const container = document.getElementById('navbar');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

const containerFooter = document.getElementById('footer');
const rootFooter = createRoot(containerFooter);

rootFooter.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);


