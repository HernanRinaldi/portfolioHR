import React from 'react';
import NavBar from '../NavBar/NavBar.js';
import './Styles.css'
import Body from '../Body/Body.js';


export default function Home(){

return(
    <div 
    className='container-home' >
        <NavBar/>
        <Body/>
    </div>
)

}