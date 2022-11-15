//------------------IMPORTS---------------------//

import React from 'react';
import { Route  } from 'react-router-dom';


//--------------------COMPONENTS------------------//
import Home from "./Home/Home.jsx";


function App() {
  return (

    <div className="App">
      
  
         <Route path='/' component={ Home } ></Route>

    
    </div>


  );
}

export default App;
