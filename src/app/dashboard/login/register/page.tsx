"use client"
import firebase_app from "../../firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(firebase_app);

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');

  const handleRegistration = async () => {
    console.log('Email:', email);
    console.log(`password ${password == cpassword ? "does" : "does not"} match`)
    if(password != cpassword) return; // password doesn't match
    let result = null, error = null;
    try {
      result = await createUserWithEmailAndPassword(auth, email, password);
      console.log("account created")
    } catch (e) {
      console.log(e);
      error = e;
    }

    return [result, error];
  };

  return (
    <div className="section-2">
      <form className="container" onSubmit={(e) => { e.preventDefault() }}>
        <div className="title-2">Account Registration</div>
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

          <div className="title-7">Confirm Password</div>
          <div className="textfield">
            <input
              type="password"
              placeholder="Enter your password"
              value={cpassword}
              onChange={(e) => setcPassword(e.target.value)}
            />
          </div>

        </div>
        <button className="center div" type="submit" onClick={handleRegistration}>
          <div className="title-wrapper">
            Register
          </div>
        </button>

      </form>
    </div >
  );
}

export default RegistrationForm;