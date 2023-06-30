import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="signup">
      <form>
        <div className="signup__header">
            <p>SignUp</p>
        </div>
        <div className="signup__inputs">
          <input type="text" placeholder="Enter your Email" />
          <input type="text" placeholder="Create Password" />
          <input type="text" placeholder="Confirm Password" />
          <button>SignUp</button>
          <p>Already have an Account ? <span><Link to={"/"}>Login</Link></span></p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
