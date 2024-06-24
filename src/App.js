import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import MyFooter from './MyComponents/MyFooter';
import AddTodo from './MyComponents/AddTodo';
import Planning from './MyComponents/Planning'; // Ensure this is correctly defined or imported

function BasicExample() {
  // Initialize todos from local storage or as an empty array
  const inittodo = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

  const [todos, setTodos] = useState(inittodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  return (
    <>
      <Header />
      <AddTodo addTodo={addTodo} /> {/* Corrected prop name */}
      <Todos todos={todos} onDelete={onDelete} />
      <Planning />
      <MyFooter />
    </>
  );
}

export default BasicExample;
