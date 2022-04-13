import { React, useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import TodoItem from "./TodoItem";

function Todo() {
  const [newtodo, setnewtodo] = useState("");
  const handleinput = (e) => {
    setnewtodo(e.target.value);
  };
  const HandleSubmit = (e) => {
    console.log(newtodo);
  };

  const [data, setData] = useState([]);

  ///******
  async function fetchData() {
    const res = await fetch("../api/fauna");
    const newData = await res.json();
    setData(newData);
  }
  useEffect(() => {
    fetchData();
  }, [newtodo]);
  //******

  return (
    <div className={styles.maincont}>
      <h1>Todo App</h1>
      <div className={styles.newtodo}>
        <h3>Add new todo</h3>
        <div className={styles.semi}>
          <input
            type="text"
            value={newtodo}
            onChange={(e) => handleinput(e)}
          ></input>
          <button onClick={() => HandleSubmit()}>Add Todo</button>
        </div>
      </div>
      <div>
        <TodoItem />
        {
  data &&
    data.map((todo) => (
      <TodoItem key={todo.ref["@ref"].id} todo={todo} />
    ))
}
      </div>
    </div>
  );
}
export default Todo;
