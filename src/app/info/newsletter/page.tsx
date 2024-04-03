"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import firebase_app from '@/app/firebase';
import { getAuth } from 'firebase/auth';

const auth = getAuth(firebase_app);
let user = auth.currentUser;

export default function Newsletter() {
    const [formData, setFormData] = useState({
        recipientName: '',
        emailAddress: '',
        childName: '',
        childAge: '',
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
            console.log('Form data:', formData); // Add console.log here
            const db = getFirestore(firebase_app);
            if (formData.emailAddress == null) return
            getDoc(doc(db, 'NewsletterSignup', formData.emailAddress)).then(signup => {
                if (!signup.exists()) {
                    console.log(signup.exists())
                    if (formData.emailAddress!= null) {
                        setDoc(doc(db, 'NewsletterSignup', formData.emailAddress),
                            formData
                        );
                    }
                }
            })

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return <>
        <div className="section-2">
            <div className="container">
                <div className="title-2">Newsletter Signup Registration</div>
                <form onSubmit={handleSubmit}>
                    <div className="input">
                        <div className="text-white ">Recipient Name</div>
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
                        <div className="text-white">Email Address</div>
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
                        <div className="text-white">Participant&apos;s Name</div>
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
                        <div className="text-white">Participant&apos;s Age</div>
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
}