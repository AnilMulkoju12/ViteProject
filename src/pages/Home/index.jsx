import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
const Home = () => {
  const [signInView, setSignInView] = useState(true);
  const [signUpInputValue, setSignUpInputValue] = useState({
    email:"",
    password:"",
    confirmPassword:"",
    errorValue:"userShould be 3-16 charecters",
  });
  const[signupValue,setSignupValue] = useState("");
  const handleLink1 = () => {
    setSignInView(!signInView);
  };
  const handleSignUpInput = (e)=>{
    setSignUpInputValue({...signUpInputValue,[e.target.name]:e.target.value})
  }
  const signUp = (e)=>{
    e.preventDefault();
    if (!signUpInputValue.email || !signUpInputValue.password || !signUpInputValue.confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (signUpInputValue.password !== signUpInputValue.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setSignupValue(signUpInputValue);
    setSignInView(true)
    setSignUpInputValue({
      email: "",
      password: "",
      confirmPassword: ""
    });
  }
  console.log(signupValue,"signupvalue");
  return (
    <div className="homepage">
      <div className="homepage__header">
        <div className="homepage__logo">
          <Link to={"/"}>LOGO</Link>
        </div>
        <div className="homepage__nav-links">
          <Link to={"/drag-drop"}>DRAG&DROP</Link>
          <Link to={"/input"}>INPUTCHIP</Link>
          <Link to={"/products"}>APICALL</Link>
        </div>
      </div>
      <div className="homepage__main">
        {signInView ? (
          <form className="homepage__form">
            <div className="homepage__form-heading">
              <p>LOGIN</p>
            </div>
            <div className="homepage__form-inputs">
              <input type="text" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <Link to={"/forgot-password"}>Forgot Password ?</Link>
            </div>
            <div className="homepage__form-button">
              <button>LOGIN</button>
              <Link onClick={handleLink1}>
                <span>Not A Member ?</span> SignUp Now
              </Link>
            </div>
          </form>
        ) : (
          <form className="homepage__signup-form">
            <div className="homepage__signup-header">
              <p>SignUp</p>
            </div>
            <div className="homepage__signup-inputs">
              <input type="text" placeholder="Enter your Email" name="email" value={signUpInputValue.email || ""} onChange={handleSignUpInput}/>
              <span style={{color:'red'}}>{signUpInputValue.errorValue}</span>
              <input type="text" placeholder="Create Password" name="password" value={signUpInputValue.password || ""} onChange={handleSignUpInput}/>
              <input type="text" placeholder="Confirm Password" name="confirmPassword" value={signUpInputValue.confirmPassword || ""} onChange={handleSignUpInput}/>
              <button onClick={signUp}>SignUp</button>
              <p>
                Already have an Account ?{" "}
                <span>
                  <Link onClick={handleLink1}>Login</Link>
                </span>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Home;
