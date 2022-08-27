import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SinglePost = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/clients').then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);
  return <div>SinglePost</div>;
};

export default SinglePost;
