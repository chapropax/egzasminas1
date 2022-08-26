import { useState } from 'react';
import Axios from 'axios';

import { RegisterContainer } from './Register.styled';

const Register = ({ title }) => {
  const url = 'http://localhost:5000/register';
  const [data, setData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      email: data.email,
      date: data.date,
      time: data.time,
    }).then((res) => {
      console.log(res.data);
    });
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  return (
    <RegisterContainer>
      <h1>{title} </h1>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id='name'
          defaultValue={data.name}
          type='text'
          placeholder='Vardas Pavardė'
        />
        <input
          onChange={(e) => handle(e)}
          id='email'
          defaultValue={data.email}
          type='text'
          placeholder='El.paštas'
        />
        <input
          onChange={(e) => handle(e)}
          id='date'
          defaultValue={data.date}
          type='date'
          placeholder='Registracijos  laikas'
        />

        <input
          onChange={(e) => handle(e)}
          id='time'
          defaultValue={data.date}
          type='time'
          placeholder='Registracijos laikas'
        />
        <button>Registruotis</button>
      </form>
      <p></p>
    </RegisterContainer>
  );
};

export default Register;
