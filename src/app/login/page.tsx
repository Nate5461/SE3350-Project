"use client"
import { useState } from 'react';
import firebase_app from "../firebase";
import { signInWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const auth = getAuth(firebase_app);

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErr] = useState('');

  const router = useRouter(); // initialize useRouter

  const handleLogin = async (e: any) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
        });
      router.push('/dashboard'); // redirect to home page
    } catch (e) {
      console.error(e);
      console.log("Error signing in");
      if (e instanceof Error && typeof e.message === 'string') {
        setErr(e.message.slice(10));
      }
    }
  };

  return (

    <div className="section-2">
      <form className="container" onSubmit={(e) => { e.preventDefault() }}>
        <div className="text-red-400">{errorMsg}</div>
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

        <br /><br />

        <Link href="/login/register">
          <button className="center div">
            <div className="title-wrapper">
              Register
            </div>
          </button>
        </Link>


      </form>
    </div >
  );
}
export default LoginForm;
