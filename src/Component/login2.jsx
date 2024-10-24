import React,{useState} from 'react';
import './login2.css';
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login2() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault(); 
      if (!email || !password) {
        toast.error('Please fill out all required fields!');
        return;
      }
      toast.success('Login successful!');
    };
  return (
    <div>
    <section>
    <div className="lg-cont">
     <form onSubmit={handleSubmit} >
      <div className="signUp-text main">
       <h1>Login</h1>
        </div>
        <br />
        <div className="input-container">
        <label htmlFor ="email">Email</label>
        <input type="text" name="email" className="inputs" value ={email} onChange ={(e) => setEmail(e.target.value)} />
      </div>
    <div className="input-container">
    <label htmlFor ="password">Password</label>
    <input type="password" name="password"className="inputs" value={password} onChange ={(e) => setPassword(e.target.value)} />
      </div>
      <span className='fp'>Forget Password?</span>
      <br />
      <button type="submit" className="Lg">Login</button>
       <div className="signUp-text">
        Doesn't have an account yet? <span>Signup</span>
        </div>
        </form>
        <ToastContainer />
        </div>
        </section>
        </div>
  );
}
