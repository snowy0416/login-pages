import React from 'react';
import './login.css';
import { useTilt } from '../Component/Tilt.js'; 

export default function Login() {
    const tiltOptions = {
        scale: 1,
        speed: 400,
        max: 25,
        glare:true,
        "max-glare":1,
      };
      const tiltRef = useTilt(tiltOptions);
  return (
    <div>
    <div ref ={tiltRef} className="lg-cont">
    <form>
    <div className="signUp-text">
    <h1>Welcome Back :)</h1>
     </div>
     <br />
     <h3>Email Address</h3>
      <input type="text" name="email" placeholder="you@example.com" className="inputs" />
      <div className="pass-text">
       <h3>Password</h3>
      </div>
      <input type="password" name="password" placeholder="Enter 6 characters or more" className="inputs" />
      <span className='fp'>Forget Password?</span>
      <label htmlFor="remember-me">
       <input type="checkbox" id="remember-me" /> Remember Me
      </label>
        <br />
        <button type="submit" className="Lg">Login</button>
        <div className="signUp-text">
        Doesn't have an account yet? <span>Signup</span>
          </div>
        </form>
      </div>
    </div>
  );
}
