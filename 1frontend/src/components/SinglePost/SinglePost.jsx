import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SinglePost = () => {
  const [setTodos] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/clients').then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, [setTodos]);
  return <div>SinglePost</div>;
};

export default SinglePost;
