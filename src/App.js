import React from 'react';
import AboutSection from './Components/AboutSection';
import Footer from './Components/Footer'
import InfoSection from './Components/InfoSection'
import InterestSection from './Components/InterestSection'
import './App.css';

function App() {
  return (
    <div className="App bg-slate-700">
      <div className='max-w-sm mx-auto py-4 bg-slate-800 text-white rounded-xl' >

     <InfoSection/>
     <div className='px-8 bg-slate-900'>
     <AboutSection />
     <InterestSection/>
     </div>
     <Footer/>
      </div>
    </div>
  );
}

export default App;
