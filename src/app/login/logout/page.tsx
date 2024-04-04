'use client'
import firebase_app from "../../firebase";
import { User, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const app = firebase_app;
const auth = getAuth();

let currentUser;
function Logout() {
    const router = useRouter();
    async function checkPerms(user: User | null) {
        if (user === null) {
            router.push('/')
            return;
        }
        signOut(auth)
        router.replace('/');
    }

    onAuthStateChanged(auth, user => {
        checkPerms(user);
    })

    return (
        <>
        </>
    )

}

export default Logout;
