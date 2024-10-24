import React from 'react';
import "./login5.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const login5 = () => {
  return (
    <div>
        <div className="con2">
        <div className= "left">
          <h1>INVOICE GENERATOR</h1>
          {/* <h3>We are the Leader in the Interior</h3> */}
          <p>
          "InvoEase" is a streamlined platform designed for businesses and freelancers to effortlessly generate professional invoices. 
           Users can create, customize, and manage invoices with ease. 
          making it perfect for ensuring timely payments and maintaining financial organization.</p>
             <div className="card-container">
        <div className="card-icon"><FontAwesomeIcon icon={faFacebookF} /></div>
        <div className="card-icon"><FontAwesomeIcon icon={faGooglePlusG} /></div>
        <div className="card-icon"><FontAwesomeIcon icon={faLinkedinIn} /></div>
      </div>
        </div>
        <div className="right">
          <div className="blank"></div>
          <form className="about">
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
        <br />
        <button type="submit" className="Lg">Login</button>
        <div className="signUp-text">
        Doesn't have an account yet? <span>Signup</span>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default login5