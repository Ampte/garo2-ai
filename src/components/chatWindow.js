import React from 'react'
import { useState } from 'react';

const Chat = (props) => {

    const [inputValue, setInputValue] = useState('');
    const [displayInputValue, setDisplayInputValue] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = () => {
        setDisplayInputValue(inputValue);
    }
    return(
        <>
        <div className='chatWindow'>
        <div className='inputvalue'>
            <p>{displayInputValue}</p>
        </div>
        <div className='message'>
            
        </div>
        <div className='form'>
          <input type='text' placeholder='Search..' 
            onChange={handleInputChange}/>
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>
        </div>
        </>
    );
};

export default Chat;