"use client";
import React, { useState } from "react";
import firebase_app from "../../firebase";
import { getFirestore, addDoc, collection, serverTimestamp } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "inquiries"), {
        name,
        email,
        message,
        timestamp: serverTimestamp(),
      });
      setName("");
      setEmail("");
      setMessage("");
      alert("Message sent!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto text-center text-zinc-300 text-5xl">
        Inquiry Form
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="mb-4 bg-red-300 rounded-lg w-1/3 placeholder-gray-700 text-black pl-2"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="mb-4 bg-red-300 rounded-lg w-1/3 placeholder-gray-700 text-black pl-2"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
          className="mb-4 bg-red-300 rounded-lg max-w-lg w-full h-32 placeholder-gray-700 text-black pl-2"
        />
        <button type="submit" className=" w-1/6 self-center bg-red-900 rounded-lg">Send</button>
      </form>
      <div className="w-3/4 text-zinc-300 text-2xl font-bold text-center">
        Email: <a href="mailto: ongoinglivinglearning@gmail.com">ongoinglivinglearning@gmail.com</a>
        <br></br>
        Address: 8685 Rockglen Rd. Arkona ON, N0M 1B0
        <br></br>
        <br></br>
        <br></br>
        <p className="text-xxl">
          Our Hours:
          <br />
        </p>
        <table className='text-xxs' style={{ width: '100%' }}>
          <thead>
            <th>CHEER Group</th>
            <th>CHEER Works</th>
          </thead>
          <tbody>
            <td>
              <b>Monday:   </b> 8:00-4:00 <br />
              <b>Tuesday:  </b> 8:00-4:00 <br />
              <b>Wednesday:</b> 8:00-4:00 <br />
              <b>Thursday: </b> 8:00-4:00 <br />
              <b>Friday:   </b> 8:00-4:00 <br />
              <b>Saturday: </b> CLOSED    <br />
              <b>Sunday:   </b> CLOSED    <br />
            </td>
            <td>
              <b>Monday:   </b> CLOSED    <br />
              <b>Tuesday:  </b> CLOSED    <br />
              <b>Wednesday:</b> 10:00-8:00<br />
              <b>Thursday: </b> 10:00-8:00<br />
              <b>Friday:   </b> 10:00-8:00<br />
              <b>Saturday: </b> 8:00-8:00 <br />
              <b>Sunday:   </b> 8:00-8:00 <br />
            </td>
          </tbody>
        </table>
        <br /><br />
        CHEER Connections <br />
        Friday Summer Nights
        from 5:00-9:00 pm

        <br /><br />

        Hours may differ for long weekends*<br />
        *Store opens May 18th 2024*<br />
        *outing times may differ*<br />
      </div>
    </>
  );
}