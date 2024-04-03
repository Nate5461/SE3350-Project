"use client";
import React, { useState } from "react";
import firebase_app from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";

const db = getFirestore(firebase_app);
const auth = getAuth(firebase_app);

let userEmail = auth.currentUser;


const ClockInPage: React.FC = () => {
    const [clockInTime, setClockInTime] = useState<Date | null>(null);
    const [clockOutTime, setClockOutTime] = useState<Date | null>(null);
    const [clockedIn, setClockedIn] = useState<boolean>(false);
    const [docId, setDocId] = useState<string | null>(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            userEmail = user;
        } else {
            userEmail = null;
        }
    });


    const handleClock = async () => {
        const currentTime = new Date();

        if (!clockedIn) {
            // Clock in
            setClockInTime(currentTime);

            // Store clock in time in Firebase
            try {
                if (userEmail == null) {
                    console.log("No user logged in");
                    return;
                }

                const docRef = await addDoc(collection(db, "clocks"), {
                    clockIn: currentTime,
                    user: userEmail.email
                });

                setDocId(docRef.id);
                setClockedIn(true);
                console.log("Clock in time added!");
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        } else {
            // Clock out
            setClockOutTime(currentTime);

            // Calculate duration in milliseconds
            const durationMs = currentTime.getTime() - (clockInTime?.getTime() || 0);

            // Convert duration to hours, minutes, and seconds
            const seconds = Math.floor((durationMs / 1000) % 60);
            const minutes = Math.floor((durationMs / (1000 * 60)) % 60);
            const hours = Math.floor((durationMs / (1000 * 60 * 60)) % 24);

            // Format duration as a string
            const duration = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            // Update clock out time in Firebase
            try {
                if (userEmail == null || docId == null) {
                    console.log("No user logged in or no clock in time");
                    return;
                }

                const docRef = doc(db, "clocks", docId);
                await updateDoc(docRef, {
                    clockOut: currentTime,
                    duration: duration
                });

                setClockedIn(false);
                console.log("Clock out time added!");
            } catch (e) {
                console.error("Error updating document: ", e);
            }
        }
    };




    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <button onClick={handleClock} className="bg-red-500 text-white py-2 px-4 rounded-lg text-lg">{clockedIn ? 'Clock Out' : 'Clock In'}</button>
        </div>
    );
};

export default ClockInPage;