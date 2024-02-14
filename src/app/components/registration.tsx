"use client"

import { useState } from 'react';

function RegistrationForm() {
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');

  const handleRegistration = () => {
    console.log('Parent Name:', parentName);
    console.log('Email:', email);
    console.log('Child Name:', childName);
    console.log('Child Age:', childAge);
  };

  return (
    <div className="section-2">
      <div className="container">
        <div className="title-2">Parent Registration</div>
        <div className="input">
          <div className="title-7">Parent Name</div>
          <div className="textfield">
            <input
              type="text"
              placeholder="Enter your name"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
            />
          </div>
        </div>
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
        </div>
        <div className="input">
          <div className="title-7">Child's Name</div>
          <div className="textfield">
            <input
              type="text"
              placeholder="Enter your child's name"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
            />
          </div>
        </div>
        <div className="input">
          <div className="title-7">Child's Age</div>
          <div className="textfield">
            <input
              type="number"
              placeholder="Enter your child's age"
              value={childAge}
              onChange={(e) => setChildAge(e.target.value)}
            />
          </div>
        </div>
        
        <div className="title-wrapper">
            <button className="div" onClick={handleRegistration}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
