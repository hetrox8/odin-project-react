import React from 'react';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Generalnfo from './Components/Generalnfo';
import './Styles/Education.css';

function App() {
  return (
    <div className="edu">
      <h1 className='heading'> Resume</h1>
      <Generalnfo />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
