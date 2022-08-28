import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  StyledAdmin,
  StyledTodo,
  StyledUP,
  StyledButtonDelete,
  StyledButtonUpdate,
  StyledText,
  StyledExample,
  StyledExampleInside,
} from './admin.style';

const AdminPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/clients').then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);

  const getData = () => {
    axios.get('http://localhost:5000/clients').then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  };

  const RemoveUserHandler = async (_id) => {
    axios.delete(`http://localhost:5000/clients/${_id}`);

    getData();
  };

  return (
    <>
      <StyledExample>
        <StyledExampleInside>
          <p className='name'>Vardas Pavardė</p>
          <p className='email'>El.paštas</p>
          <p className='date'>Užregistruota data</p>
          <p className='time'>Užregistruotas laikas</p>
        </StyledExampleInside>
      </StyledExample>
      <StyledAdmin>
        {todos ? (
          <div>
            {todos.map((todo) => {
              const { name, email, date, time, _id } = todo;

              return (
                <StyledTodo key={_id}>
                  <StyledText>
                    <p className='name'>{name}</p>
                    <p className='email'>{email}</p>
                    <p className='date'>{date}</p>
                    <p className='time'>{time}</p>
                  </StyledText>
                  <StyledUP>
                    <StyledButtonDelete onClick={() => RemoveUserHandler(_id)}>
                      <i className='fa-solid fa-trash-can'></i>
                    </StyledButtonDelete>
                    <StyledButtonUpdate key={_id}>
                      <a href={`admin/edituser/${_id}`}>
                        <i className='fa-solid fa-pen'></i>
                      </a>
                    </StyledButtonUpdate>
                  </StyledUP>
                </StyledTodo>
              );
            })}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </StyledAdmin>
    </>
  );
};

export default AdminPage;
