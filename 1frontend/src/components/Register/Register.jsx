import { useState } from 'react';
import Axios from 'axios';

import { RegisterContainer, RegisterContainerInput } from './Register.styled';

const Register = ({ title }) => {
  const [message, setMessage] = useState('');
  const url = 'http://localhost:5000/register';
  const [data, setData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  function submit(e) {
    e.preventDefault();
    setMessage(`Užregistruota vizitui ${data.date} ${data.time}`);
    Axios.post(url, {
      name: data.name,
      email: data.email,
      date: data.date,
      time: data.time,
    });
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  function buttonHandle(e) {}
  return (
    <RegisterContainer>
      <RegisterContainerInput>
        <h1>{title} </h1>
        <form onSubmit={(e) => submit(e)}>
          <input
            onChange={(e) => handle(e)}
            id='name'
            defaultValue={data.name}
            type='text'
            placeholder='Vardas Pavardė'
            required
          />
          <input
            onChange={(e) => handle(e)}
            id='email'
            defaultValue={data.email}
            type='text'
            placeholder='El.paštas'
            required
          />
          <input
            onChange={(e) => handle(e)}
            id='date'
            defaultValue={data.date}
            type='date'
            placeholder='Registracijos  laikas'
            required
          />

          <input
            onChange={(e) => handle(e)}
            id='time'
            defaultValue={data.date}
            type='time'
            placeholder='Registracijos laikas'
            required
          />
          <button type='submit' id='registerButton' onClick={buttonHandle}>
            Registruotis
          </button>

          <p className='message'>{message}</p>
        </form>
      </RegisterContainerInput>
    </RegisterContainer>
  );
};

export default Register;
