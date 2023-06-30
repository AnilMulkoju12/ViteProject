import React, { useState } from "react";
import "./styles.scss";
import FormInput from "../../components/InptForm";
const Form = () => {
  const [values,setValues] = useState({
    username:"",
    email:'',
    password:"",
    confirmPassword:'',

  })
  const inputs = [
    {
      id:1,
      name:"username",
      placeholder:"username",
      type:'text',
      errorMessage:"username must contain 3-16 letters",
      required:true,
    },
    {
      id:2,
      name:"email",
      placeholder:"email",
      type:'email',
      errorMessage:'Email should be valied !',
      required:true,
    },
    {
      id:3,
      name:"password",
      placeholder:"password",
      type:'password',
      errorMessage:'password must contain 1 numaric,1 Alphabet,1 SpecialCharecters',
      required:true,
    },
    {
      id:4,
      name:"confirmPassword",
      placeholder:"confirmPassword",
      type:'password',
      errorMessage:'password and confirm password should be same',
      required:true,
      pattern:values.password,
    },
  ]
  const handleSubmit  = (e)=>{
    e.preventDefault();
  }
  const onChange = (e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }
  console.log(values);
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {inputs.map((val)=>{
          return <FormInput key={val.id} {...val} value={values[val.name]} onChange={onChange}/>
        })}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
