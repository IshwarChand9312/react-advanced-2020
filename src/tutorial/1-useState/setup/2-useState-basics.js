import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler)


  const [text, setText] = useState('random Title');
  const handleClick = () => {
    if(text === 'randome Title'){
      setText('hello world');
    }
    else{
      setText('randome Title');
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick = {handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
