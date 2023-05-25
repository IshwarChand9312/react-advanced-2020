import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name : 'peter',
    age : 24,
    message : 'randome message ',
  });

  const changeMessage = () => {
    setPerson({ ...person, message: 'hello world'});
  };

  const [name, setName] = useState('peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('random message');

  return (
    <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick = {changeMessage}>
      Change message
    </button>
    </>
  )
};

export default UseStateObject;
