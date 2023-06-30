import React, { useState } from "react";
import "./styles.scss";
const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleClick = (e) => {
    setTodo([...todo,inputValue]);
  };
  const handleDelete =(e,index)=>{
    const updatedTodo = todo.filter((val,i)=>{
      return i!==index;
    })
    setTodo(updatedTodo);
  }
  return (
    <div className="todo_container">
      <div>
      <div>
        <input type="text" onChange={handleChange} value={inputValue} />
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Add
        </button>
      </div>
      <div className="todo_container__todo-list">
        {todo.map((val,i)=>{
          return(
            <div key={i}>
              {val}
              <button onClick={(e)=>{handleDelete(e,i)}}>X</button>
            </div>
          )
        })}
      </div>
      </div>
    </div>
  );
};

export default ToDo;
