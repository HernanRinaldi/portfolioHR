
import React from 'react';
// import imagen from '../About/HernanRinaldi.jpg'
import '../About/Styles.css';

const About = () => {
  return (
    <div className='container-about' >
        
     <div className='container-texto' >
     <p className='texto' >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> 
     </div>
    <div className='container-imagen' >
    {/* <image className='imagen' alt='imagen de Hernan Rinaldi' >{imagen}</image> */}
    </div>

    </div>
  )
}

export default About
