import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  StyledAdmin,
  StyledTodo,
  StyledUP,
  StyledButtonDelete,
  StyledButtonUpdate,
  StyledText,
} from './admin.style';

const AdminPage = () => {
  const [todos, setTodos] = useState();

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

  const RemoveUserHandler = (email) => {
    axios.delete(`http://localhost:5000/clients/${email}`).then((res) => {
      getData();
    });
  };

  return (
    <StyledAdmin>
      {todos ? (
        <div>
          {todos.map((todo) => {
            const { name, email, date, time, id } = todo;

            return (
              <StyledTodo key={email}>
                <StyledText>
                  <p>{name}</p>
                  <p>{id}</p>
                  <p>{email}</p>
                  <p>{date}</p>
                  <p>{time}</p>
                </StyledText>
                <StyledUP>
                  <StyledButtonDelete
                    onClick={(e) => RemoveUserHandler({ id })}
                  >
                    delete
                  </StyledButtonDelete>
                  <StyledButtonUpdate key={id}>
                    <a href={`admin/edituser/${email}`}>edit</a>
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
  );
};

export default AdminPage;
