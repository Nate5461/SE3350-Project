"use client"
import { useState } from 'react';
import firebase_app from "../firebase";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import Link from 'next/link';
const auth = getAuth(firebase_app);

function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("dsada");
  };


  return (

    <div className="section-2">
      <form className="container" onSubmit={(e) => { e.preventDefault() }}>
        <div className="title-2">Account Login</div>
        <div className="input">
          <div className="title-7">Email Address</div>
          <div className="textfield">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="title-7">Password</div>
          <div className="textfield">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

        </div>

        <button className="center div" type="submit" onClick={handleLogin}>
          <div className="title-wrapper">
            Login 
          </div>
        </button>

        <br/><br/>

        <Link href="/dashboard/login/register">
          <button className="center div">
            <div className="title-wrapper">
              Register
            </div>
          </button>
        </Link>
      </form>
    </div >
  );
};
export default LoginForm;