import React from 'react'
import './components.css'

const Header = () => {
    return(
        <>
        <div className='header'>
       <button className='bar'> <i class="fa-solid fa-bars" style={{fontSize:'large'}}></i></button>
        <h1>Garo2</h1>
        <button className='chat'><i class="fa-brands fa-rocketchat" style={{fontSize:'large'}}></i></button>
        </div>
        </>
    );
};

export default Header;