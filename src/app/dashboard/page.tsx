"use client"
import { useRouter } from 'next/navigation';
import { getAuth } from "firebase/auth";
import React from 'react';
import firebase_app from '../firebase';

const auth = getAuth(firebase_app);
const user = auth.currentUser;

function Dashboard() {

    const router = useRouter(); // initialize useRouter

    const handleLogin = async () => {
        router.push('/dashboard'); // redirect to home page
    }

    return (
        <>
            <div className="flex flex-row" style={{ width: '100%' }} >
                <div className="flex flex-col text-gray-700" style={{ width: '33%' }}>
                </div>
                <div className="flex flex-col text-gray-700" style={{ width: '33%' }}>
                    <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                        <div className="h-40 bg-gray-400 rounded-lg">

                        </div>
                        <div className="flex flex-col text-gray-800 items-start mt-4">
                            <h4 className="text-xl text-gray-900 font-semibold">Heading</h4>
                            <p className="text-sm">Some text about the thing that goes over a few lines.</p>
                            <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a>
                        </div>
                    </div>


                </div>
                <div className="flex flex-col text-gray-700" style={{ width: '33%' }}>
                    <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2 text-gray-700">
                        <div className="flex flex-col text-gray-800 items-start mt-4">
                            <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                                <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}
export default Dashboard;
