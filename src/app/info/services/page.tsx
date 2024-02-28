"use client"
import React, { useState }from "react";
import Image from "next/image";
import { firestore } from "./firebase"
import { addDoc, collection } from 'firebase/firestore';


export default function ServicesPage() {
  const [formData, setFormData] = useState({
    recipientName: "",
    emailAddress: "",
    childName: "",
    childAge: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const docRef = await addDoc(collection(firestore, '(default-)'), formData);
      console.log('Document written with ID: ', docRef.id);
      // Clear form data after successful submission
      setFormData({
        recipientName: "",
        emailAddress: "",
        childName: "",
        childAge: "",
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  
  return (
    
    <>
      <div className="text-wrapper text-zinc-300 text-5xl">
        Services
      </div>
      <div className="w-3/4 text-zinc-300">
        <h1>CHEER Works!</h1>

        <p>
          In June, 2023, we opened an ice cream/variety store called
          Cheer Canteen and Roxy’s Putter Golf course at Rock Glen Resort, in
          Arkona, open street side to the public as well as the camp, so please
          come by and support us if you are in the area.
        </p>


        <br/>

        <p>
          CHEER Works employs members of the CHEER Group who have been
          developing their job skills. This is a safe and assisted working
          environment providing paid employment for our community members with
          intellectual disabilities. Caregivers and community supporters
          volunteer to help with this initiative. There are many different jobs
          to be done. Everyone enjoys working together, and we have a great
          team!
        </p>

        <br/>

        <h1>Cheer Connections</h1>
        <p>
          Cheer Connections is a group of parents and caregivers, some have
          adult children in the CHEER group and some don’t, but we are all in a
          similar situation. We meet at least once a month to offer each other
          support and share our knowledge. Our winter meetings were funded by
          the Ontario Caregivers Association, which provided a relaxing day, a
          eice lunch, and great guest speakers.
        </p>
        <br/>

        <p>
          The Cheer Connections regularly gather for various workshops so that
          we may discuss information and learn together. We are all concerned
          about ODSP, housing, employment, social opportunities, etc., and a lot
          of our energy is given to finding solutions for our loved ones’
          future. This group helps reduce isolation for caregivers as well. It
          is a requirement of the CHEER Group that family members become
          involved with Cheer Connections. We are a close-knit social group that
          includes siblings, friends, and neighbors who care about someone with
          an intellectual disability. We are committed to developing a community
          of inclusion. We are supported by Ontario Caregivers Association,
          Algarva 168 (Alhambra), and private community member donors. We also
          run various fundraisers, and donations are accepted online through
          Canada Helps.
        </p>

        <br/>

        <p>
          Looking for some social fun?… we have that too! Respite care is also
          available so you don’t have to worry about your loved one while you
          attend meetings.
        </p>
      </div>
      <div className="section-2">
        <div className="container">
          <div className="title-2">Newsletter Signup Registration</div>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <div className="title-7">Recipient Name</div>
              <div className="textfield">
                <input
                  type="text"
                  name="recipientName"
                  value={formData.recipientName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="input">
              <div className="title-7">Email Address</div>
              <div className="textfield">
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="input">
              <div className="title-7">Child's Name</div>
              <div className="textfield">
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  placeholder="Enter your child's name"
                />
              </div>
            </div>
            <div className="input">
              <div className="title-7">Child's Age</div>
              <div className="textfield">
                <input
                  type="text"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  placeholder="Enter your child's age"
                />
              </div>
            </div>

            <button type="submit" className="blueButton">
              <div className="primary">
                <div className="div">Register</div>
              </div>
            </button>
          </form>
        </div>
        <Image
          className="vector-3"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/65baa7f6c4b445bdbec0f000/releases/65baa8124ae9e26d265a295b/img/vector-200.svg"
          width={200}
          height={200}
        />
      </div>
    </>
  );
};
