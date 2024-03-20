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
            Contact: <a href="mailto: ongoinglivinglearning@gmail.com">ongoinglivinglearning@gmail.com</a>
          </div>
        </>
      );
    }