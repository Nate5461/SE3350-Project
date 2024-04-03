"use client";
import firebase_app from "../firebase";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const app = firebase_app;
const auth = getAuth();
let currentUser;
function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [loggedIn, setLogggedIn] = useState(false);
    const router = useRouter();
    async function checkPerms(user: User | null) {
        if (user === null) {
            console.log("not logged in")
            window.location.href='/login'
            return;
        }
        setLogggedIn(true);
        currentUser = user;
        const token = await user.getIdToken();
        const uid = user.uid;
        const db = getFirestore(firebase_app);
        const perms = await getDoc(doc(db, 'users', uid));
    }
    onAuthStateChanged(auth, user => {
        checkPerms(user);
    })

    let loggedInChildren = () => {
        if(loggedIn) {
            return children;
        }
        else return <></>;
    }

    return (
        <>
            <div style={{width: '100%'}}>

                {loggedInChildren()}

            </div>
        </>
    )

}

export default DashboardLayout;
