import React from 'react';
import Photo from './components/Photo';
import Summary from './components/Summary';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-light-texture bg-repeat bg-center text-gray-900 transition-colors duration-300">
      <div className="flex flex-col flex-grow w-full">
        <Photo />
        <Summary />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;