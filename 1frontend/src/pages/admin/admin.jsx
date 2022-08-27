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
    <StyledAdmin>
      {todos ? (
        <div>
          {todos.map((todo) => {
            const { name, email, date, time, _id } = todo;

            return (
              <StyledTodo key={_id}>
                <StyledText>
                  <p>{name}</p>

                  <p>{email}</p>
                  <p>{date}</p>
                  <p>{time}</p>
                </StyledText>
                <StyledUP>
                  <StyledButtonDelete onClick={() => RemoveUserHandler(_id)}>
                    delete
                  </StyledButtonDelete>
                  <StyledButtonUpdate key={_id}>
                    <a href={`admin/edituser/${_id}`}>edit</a>
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
