import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PeopleList from './PeopleList';
import PeopleDetail from './PeopleDetail';

//import './assets/css/App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PeopleList />} />
        <Route path="/people/:id" element={<PeopleDetail />} />
      </Routes>
    </Router>
  );
};

export default App;