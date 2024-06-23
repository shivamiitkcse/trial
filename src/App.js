import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import MyFooter from './MyComponents/MyFooter';
import AddTodo from './MyComponents/AddTodo';

// import {Planning} from './MyComponents/Planning'; // Ensure this is correctly defined or imported

function BasicExample() {
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
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

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to get this job done"
    },
    {
      sno: 3,
      title: "Go to the gym",
      desc: "You need to go to the gym to get this job done"
    },
  ]);

  return (
    <>
      <Header />
      <AddTodo addTodo={addTodo} /> {/* Corrected prop name */}
      <Todos todos={todos} onDelete={onDelete} />
      {/* <Planning /> */}
      {/* </Container> */}
      <MyFooter />
    </>
  );
}

export default BasicExample;
