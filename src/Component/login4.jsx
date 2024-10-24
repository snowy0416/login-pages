import React, { useState } from "react";
import "./login4.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useTilt } from '../Component/Tilt.js'; 

function App() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };
  const tiltOptions = {
    scale: 1,
    speed: 400,
    max: 25,
    glare:true,
    "max-glare":1,
  };
  const tiltRef = useTilt(tiltOptions);

  return (
    <>
      <div className={`container ${isSignUpActive ? "right-panel-active" : ""}`} id="container" ref ={tiltRef} >
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <div className="social-container">
              <a  className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a  className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
              <a  className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form >
            <h1>Log in</h1>
            <div className="social-container">
              <a className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
              <a className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a>Forgot your password?</a>
            <button type="submit">Log In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, There!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
