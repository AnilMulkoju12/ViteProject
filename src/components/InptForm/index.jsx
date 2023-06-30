import React,{useState} from 'react'
import './styles.scss';
const FormInput = (props) => {
  const {onChange, errorMessage, ...inputProps} = props;
  const[focused,setFocused] = useState(false)
  const handleFocuse = ()=>{
    setFocused(true)
  }
  return (
    <div className='form-input'>
      <input {...inputProps} onChange={onChange} onBlur={handleFocuse} focused={focused.toString()}/><br/>
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput