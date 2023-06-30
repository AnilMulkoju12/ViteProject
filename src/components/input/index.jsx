import React, { useState } from "react";
import "./styles.scss";
const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const addChip = (value) => {
    setChips([...chips, value]);
  };
  const handleKeyDown = (e) => {
    // console.log("handleKeyDown");
    if (e.key === "Enter" && inputValue.trim() !== "") {
      addChip(inputValue.trim());
      setInputValue("");
    }
  };
const handleDelete = (i)=>{
  const updatedChips = [...chips];
  updatedChips.splice(i,1)
  setChips(updatedChips)
}
  // console.log("chips", chips);
  return (
    <div className="input-container">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={inputValue}
      />
      {chips.map((val, i) => {
        return <div key={i}>{val}
        <button onClick={()=>{handleDelete(i)}}>X</button>
        </div>;
      })}
    </div>
  );
};

export default Input;
