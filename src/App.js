//------------------IMPORTS---------------------//

import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';


//----------------IMPORT COMPONENTS--------------//

import Home from './Home/Home.jsx';
 

//-----------------FUNCTION--------------//
function App() {
  return (
  
    <div className="App">
      
         <Routes>
         <Route  path='/home' component={Home} ></Route>

         </Routes>

    </div>
     

  );
}

export default App;





