import React from 'react';
import './login3.css';
import { FaUser, FaLock, FaChevronRight, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Login() {

  return (
    <div className="container" >
   <div className="screen">
    <div className="screen__content">
     <form className="login">
     <div className="login__field">
    <FaUser className="login__icon" />
    <input type="text" className="login__input" placeholder="User name / Email" />
     </div>
    <div className="login__field">
    <FaLock className="login__icon" />
     <input type="password" className="login__input" placeholder="Password" />
     </div>
     <button className="button login__submit">
    <span className="button__text">Log In Now</span>
    <FaChevronRight className="button__icon" />
     </button>
    </form>
    <div className="social-login">
     <h3>log in via</h3>
     <div className="social-icons">
     <a className="social-login__icon"><FaInstagram /></a>
      <a className="social-login__icon"><FaFacebook /></a>
       <a  className="social-login__icon"><FaTwitter /></a>
        </div>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>    
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>    
      </div>
    </div>
  );
}
