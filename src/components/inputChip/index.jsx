import React, { useState } from 'react';

const InputChip = () => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState([]);

  const handleInputChange = (event) => { 
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      addChip(inputValue.trim());
      setInputValue('');
    }
  };

  const addChip = (value) => {
    setChips([...chips, value]);
  };

  const removeChip = (index) => {
    const updatedChips = [...chips];
    updatedChips.splice(index, 1);
    setChips(updatedChips);
  };

  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
        <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Enter a value"
      />
      <div>
        {chips.map((chip, index) => (
          <div key={index} className="chip">
            {chip}
            <button
              className="chip-remove"
              onClick={() => removeChip(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default InputChip;
