import React from 'react';
import './App.css';
import Chat from './Components/Chat'
import NameList from './Components/NameList';



function App() {
  return (
    <div className='container'>
      <div className='row' >
        <NameList className='col-6' style={{margin: 3}} />
        <Chat className='col-6' style={{margin: 3}} />
      </div>
    </div>
  );
}

export default App;
