import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Breeds, Favorites, Landing, Quiz } from '../views';

const Main = () => {
  return (
    <main className="y-wrap">
      <Routes>
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Landing />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </main>
  );
};

export default Main;
