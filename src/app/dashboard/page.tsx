"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState } from 'react';
import firebase_app from '../firebase';
import Link from 'next/link';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { ref, remove, set } from 'firebase/database';

const auth = getAuth(firebase_app);
let user = auth.currentUser;

function Dashboard() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminList, setAdminList] = useState([]);
    const router = useRouter(); // initialize useRouter

    const [inputEmail, setInputEmail] = useState('');

    let getInqueries = () => {
        return <>
        </>
    }

    let addAdmin = () => {
        const email = inputEmail;
        console.log(inputEmail)
        const db = getFirestore(firebase_app);
        getDoc(doc(db, 'users', 'admins')).then(perms => {
            if (perms.exists()) {
                let list = perms.data().adminList;
                list.push(email)
                setDoc(doc(db, 'users', 'admins'), {
                    adminList: list,
                });
                setAdminList(list);
            }
        })
    }
    let removeAdmin = () => {
        const email = inputEmail;
        if (user != null && user.email != email) {
            const db = getFirestore(firebase_app);
            getDoc(doc(db, 'users', 'admins')).then(perms => {
                if (perms.exists()) {
                    let list = perms.data().adminList;
                    list = list.sort((a: string, b:string) => { if(a == email) return 1;else if(b == email)return -1; else return 0; });
                    if (list[list.length - 1] == email) list.pop()
                    console.log(list[list.length - 1])

                    setDoc(doc(db, 'users', 'admins'), {
                        adminList: list,
                    });
                    setAdminList(list);
                }
            })
        }
    }

    let newsletterButton = () => {
        return <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-l uppercase" href="#">sign up</a>
    }
    onAuthStateChanged(auth, thisuser => {
        if (thisuser == null) {
            // if not logged in
            router.push('/');
            return;
        }
        user = thisuser;
        user.getIdToken().then(token => {
            const uid = thisuser;
            const db = getFirestore(firebase_app);
            getDoc(doc(db, 'users', 'admins')).then(perms => {
                if (perms.exists()) {
                    if (thisuser.email != null && perms.data().adminList.includes(thisuser.email)) {
                        if (!isAdmin) {
                            setIsAdmin(true);
                            setAdminList(perms.data().adminList);
                        }
                    }
                }

            });
        });

    })

    let adminPanel = () => {
        if (!isAdmin) {
            return <></>
        }

        return <>
            <div className="flex flex-row" style={{ width: '100%' }} >

                <div className="flex flex-col text-gray-700" style={{ width: '50%' }}>
                    <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                        <div className="h-40 bg-gray-400 rounded-lg">

                        </div>
                        <div className="flex flex-col text-gray-800 items-start mt-4">
                            <h4 className="text-xl text-gray-900 font-semibold">Inquiries</h4>
                            <p className="text-sm">{getInqueries()}</p>
                            <div className="flex flex-row" style={{ width: '100%' }} >
                                <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">next</a>
                                <div style={{ width: '20px' }}></div>
                                <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">mark resolved</a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col text-gray-700" style={{ width: '50%' }}>
                    <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                        <div className="h-40 bg-gray-400 rounded-lg overflow-y-scroll">
                            <p className="text-m">
                                {adminList.map(email => <><li key={email}>{email}</li></>)}
                            </p>

                        </div>
                        <div className="flex flex-col text-gray-800 items-start mt-4">
                            <h4 className="text-xl text-gray-900 font-semibold">Admins</h4>

                            <textarea onChange={(e) => setInputEmail(e.target.value)} placeholder="user email" style={{ height: '24px' }}></textarea>
                            <div className="flex flex-row" style={{ width: '100%' }} >
                                <br />

                                <button className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" onClick={addAdmin}>add</button>
                                <div style={{ width: '20px' }}></div>
                                <button className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" onClick={removeAdmin}>remove</button>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </>
    }

    return (
        <>
            {adminPanel()}

            <div className="flex flex-row" style={{ width: '100%' }} >

                <div className="flex flex-col text-gray-700" style={{ width: '33%' }}>
                </div>

                <div className="flex flex-col text-gray-700" style={{ width: '33%' }}>

                    <div className="flex flex-col bg-gray-200 place-content-center rounded-lg p-4 m-2 text-gray-700">
                        <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                            <div className="flex flex-col text-gray-800 items-start mt-4">
                                <h4 className="text-xl text-gray-900 font-semibold">Newsletter</h4>
                                <p className="text-sm">{getInqueries()}</p>
                                <div className="flex flex-row" style={{ width: '100%' }} >
                                    {newsletterButton()}
                                    <div style={{ width: '20px' }}></div>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>

                <div className="flex flex-col text-gray-700" style={{ width: '33%' }}>
                    <div className="flex flex-col bg-gray-200 place-content-center rounded-lg p-4 m-2 text-gray-700">
                        <div className="text-gray-800 items-start place-content-center mt-4">
                            <div className="bg-gray-200 rounded-lg p-4 place-content-center m-2">
                                <Link className="p-3 rounded font-large mt-3 bg-gray-400 text-m uppercase place-content-center" href='login/logout'>
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}
export default Dashboard;
