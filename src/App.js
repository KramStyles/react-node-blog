import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import ArticleList from './Components/ArticleList';
import ArticlePage from './Components/ArticlePage';

import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="article" element={<ArticlePage />} />
        <Route path="list/:endpoint" element={<ArticleList />} />
      </Routes>
      <NavBar />
    </Router>
  );
}

export default App;
