import React from 'react';
import AddTask from './components/AddTask';
import DisplayTask from './components/DisplayTask';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
       <Particles className="particles"  width='100vw' height="100vh"
                params={{
                    particles: {
                        number : {
                          value: 30,
                          density: {
                            enable: true,
                            value_area: 500
                          }
                        }
                     
                    }
                }} />
    <AddTask />
    <DisplayTask/>
    </div>
  );
}

export default App;
