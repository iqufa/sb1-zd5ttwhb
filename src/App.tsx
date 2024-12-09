import React from 'react';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto shadow-xl">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;