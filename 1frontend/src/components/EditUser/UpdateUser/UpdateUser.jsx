import { useState, useEffect } from 'react';
import Axios from 'axios';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { StyledContainer } from './UpdateUser.style';
const UpdateUser = ({ title }) => {
  const [message, setMessage] = useState('');
  const { id } = useParams();

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/clients/${id}`).then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, [id]);

  const url = `http://localhost:5000/clients/${id}`;
  const [data, setData] = useState({
    name: todos.name,
    email: todos.email,
    date: todos.date,
    time: todos.time,
  });

  function submit(e) {
    e.preventDefault();
    Axios.put(url, {
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
    setMessage('');
  }
  function buttonHandle(e) {
    setMessage('Informacija atnaujinta');
  }
  return (
    <StyledContainer>
      <h1>Informacijos atnaujinimas </h1>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id='name'
          defaultValue={todos.name}
          type='text'
          placeholder='Vardas Pavardė'
        />
        <input
          onChange={(e) => handle(e)}
          id='email'
          defaultValue={todos.email}
          type='text'
          placeholder='El.paštas'
        />
        <input
          onChange={(e) => handle(e)}
          id='date'
          defaultValue={todos.date}
          type='date'
          placeholder='Registracijos  laikas'
        />

        <input
          onChange={(e) => handle(e)}
          id='time'
          defaultValue={todos.time}
          type='time'
          placeholder='Registracijos laikas'
        />
        <button onClick={buttonHandle}>Atnaujinti informacija</button>
      </form>
      <p>{message}</p>
    </StyledContainer>
  );
};

export default UpdateUser;
