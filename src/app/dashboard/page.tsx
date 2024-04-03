"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import firebase_app from '../firebase';
import Link from 'next/link';
import { Timestamp, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { ref, remove, set } from 'firebase/database';

const db = getFirestore(firebase_app);
const auth = getAuth(firebase_app);
let user = auth.currentUser;
type inquiry = {
    id: string,
    email: string,
    message: string,
    name: string,
    timestamp: Timestamp
}
type waiver = {
    id: string,
    link: string
}

function Dashboard() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminList, setAdminList] = useState([]);
    const [calendars, setcalendars] = useState([]);
    const [waivers, setWaivers] = useState([] as waiver[]);
    const router = useRouter(); // initialize useRouter
    const [dispInquiry, setDispInquiry] = useState('');

    const [inputEmail, setInputEmail] = useState('');
    const [inputLink, setInputLink] = useState('');
    const [formLink, setFormLink] = useState('');
    const [formName, setFormName] = useState('');



    let [inquiryList, setInquiryList] = useState([])
    let [inquiryI, setInquiryI] = useState(0);
    let getInqueries = () => {
        if (inquiryList.length == 0) {
            let inqueries = collection(db, 'inquiries')
            let inqList: inquiry[] = [];

            getDocs(inqueries).then(query => {
                query.forEach(doc => {
                    let obj = doc.data() as inquiry
                    obj.id = doc.id
                    inqList.push(obj)
                })
                setInquiryList(inqList as never[])
                if (inquiryI >= inqList.length) {
                    inquiryI = 0;

                }
                if (inqList.length > 0) {
                    let inq: inquiry = inqList[inquiryI]
                    let setString = inq.email + '\n'
                    setString += inq.name + '\n'
                    setString += inq.timestamp.toDate() + '\n'
                    setString += inq.message
                    setDispInquiry(setString);
                }
                return ""
            });
        }
    }
    useEffect(getInqueries, []);

    let setInquiry = (x: number) => {
        let i = inquiryI + x;
        if (inquiryList.length > 0) {
            if (i >= inquiryList.length) i = 0;
            if (i < 0) i = inquiryList.length - 1;

            let inq: inquiry = inquiryList[i]
            let setString = inq.email + '\n'
            setString += inq.name + '\n'
            setString += inq.timestamp.toDate() + '\n'
            setString += inq.message
            setDispInquiry(setString);
        }
        setInquiryI(i);
    }

    let deleteInquiry = () => {
        let inq: inquiry = inquiryList[inquiryI]
        deleteDoc(doc(db, "inquiries", inq.id)).then(() => {
            inquiryList.splice(inquiryI, 1)
            setInquiry(0);

        })
    }

    let addAdmin = () => {
        const email = inputEmail;
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
            getDoc(doc(db, 'users', 'admins')).then(perms => {
                if (perms.exists()) {
                    let list = perms.data().adminList;
                    list = list.sort((a: string, b: string) => { if (a == email) return 1; else if (b == email) return -1; else return 0; });
                    if (list[list.length - 1] == email) list.pop()
                    setDoc(doc(db, 'users', 'admins'), {
                        adminList: list,
                    });
                    setAdminList(list);
                }
            })
        }
    }

    let addCalendar = () => {
        getDoc(doc(db, 'calendar', 'links')).then(c => {
            if (c.exists()) {
                let list = c.data().linksList;
                list.push(inputLink)
                setDoc(doc(db, 'calendar', 'links'), {
                    linksList: list
                });
                setcalendars(list);
            }
        })
    }
    let removeCalendar = () => {
        getDoc(doc(db, 'calendar', 'links')).then(c => {
            if (c.exists()) {
                let list = c.data().linksList;
                list.splice(list.indexOf(inputLink), 1)
                setDoc(doc(db, 'users', 'admins'), {
                    linksList: list,
                });
                setcalendars(list);
            }
        })
    }

    let addForm = () => {
        getDoc(doc(db, 'calendar', 'waivers')).then(c => {
            if (c.exists()) {
                let twaivers = []
                let data = c.data();

                data[formName] = formLink;

                for (let key in data) {
                    twaivers.push({ id: key, link: data[key] })
                }

                setWaivers(twaivers as waiver[])
                setDoc(doc(db, 'calendar', 'waivers'), data);
            }
        })
    }

    let removeForm = () => {
        getDoc(doc(db, 'calendar', 'waivers')).then(c => {
            if (c.exists()) {
                let twaivers = []
                let data = c.data();

                delete data[formName];

                for (let key in data) {
                    twaivers.push({ id: key, link: data[key] })
                }

                setWaivers(twaivers as waiver[])
                setDoc(doc(db, 'calendar', 'waivers'), data);
            }
        })
    }


    useEffect(() => {
        getDoc(doc(db, 'calendar', 'links')).then(c => {
            if (c.exists()) {
                setcalendars(c.data().linksList as never[])
            }
        })

        getDoc(doc(db, 'calendar', 'waivers')).then(c => {
            if (c.exists()) {
                let data = c.data();
                let twaivers = []

                for (let key in data) {
                    twaivers.push({ id: key, link: data[key] })
                }
                setWaivers(twaivers as waiver[])
            }
        })
    }, [])

    onAuthStateChanged(auth, thisuser => {
        if (thisuser == null) {
            // if not logged in
            router.push('/');
            return;
        }
        user = thisuser;
        user.getIdToken().then(token => {
            const uid = thisuser;
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
                        <textarea className="border-2 border-black h-40 bg-gray-200 rounded-lg p-2" value={dispInquiry} readOnly >
                        </textarea>
                        <div className="flex flex-col text-gray-800 items-start mt-4">
                            <h4 className="text-xl text-gray-900 font-semibold">Inquiries</h4>
                            <div className="flex flex-row" style={{ width: '100%' }} >
                                <button className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" onClick={() => setInquiry(-1)}>previous</button>
                                <div style={{ width: '20px' }}></div>
                                <button className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" onClick={() => setInquiry(1)}>next</button>
                                <div style={{ width: '20px' }}></div>
                                <button className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" onClick={() => deleteInquiry()} >mark resolved</button>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col bg-gray-200 place-content-center rounded-lg p-4 m-2 text-gray-700">
                        <div className="text-gray-800 items-start place-content-center mt-4">
                            <h4 className="text-xl text-gray-900 font-semibold">Clock In / Clock Out</h4>
                            <div className="bg-gray-200 rounded-lg p-4 place-content-center m-2">
                                <Link className="p-3 rounded font-large mt-3 bg-gray-400 text-m uppercase place-content-center" href='dashboard/clockIn'>
                                    Clock In
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-gray-200 place-content-center rounded-lg p-4 m-2 text-gray-700">
                        <div className="text-gray-800 items-start place-content-center mt-4">
                            <h4 className="text-xl text-gray-900 font-semibold">Send New Newsletter</h4>
                            <div className="bg-gray-200 rounded-lg p-4 place-content-center m-2">
                                <button className="p-3 rounded font-large mt-3 bg-gray-400 text-m uppercase place-content-center" >
                                    Upload Newsletter
                                </button>
                                <div style={{height: '6px'}}></div>
                                <button className="p-3 rounded font-large mt-3 bg-gray-400 text-m uppercase place-content-center" >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col text-gray-700" style={{ width: '50%' }}>
                    <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                        <div className="h-40 bg-gray-200 rounded-lg overflow-y-scroll border-black border-2 p-2">

                            {adminList.map(email => <li key={email}> {email} </li>)}

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

                    <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                        <div className="h-40 bg-gray-200 rounded-lg overflow-y-scroll border-black border-2 p-2">

                            {calendars.map(c => <li key={c}> {c} </li>)}

                        </div>
                        <div className="flex flex-col text-gray-800 items-start mt-4">
                            <h4 className="text-xl text-gray-900 font-semibold">Calendar Links</h4>

                            <textarea onChange={(e) => setInputLink(e.target.value)} placeholder="google calendar link" style={{ height: '24px' }}></textarea>
                            <div className="flex flex-row" style={{ width: '100%' }} >
                                <br />

                                <button className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" onClick={addCalendar}>add</button>
                                <div style={{ width: '20px' }}></div>
                                <button className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" onClick={removeCalendar}>remove</button>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                        <div className="h-40 bg-gray-200 rounded-lg overflow-y-scroll border-black border-2 p-2">

                            {waivers.map(w => <li key={w.id}> {w.id}: <a href={w.link} target='_blank'>{w.link}</a> </li>)}

                        </div>
                        <div className="flex flex-col text-gray-800 items-start mt-4" style={{ width: '100%' }}>
                            <h4 className="text-xl text-gray-900 font-semibold">Event Waiver Links</h4>

                            <textarea onChange={(e) => setFormName(e.target.value)} placeholder="Event Name" style={{ height: '24px' }}></textarea>
                            <div style={{ height: '5px' }}></div>
                            <textarea onChange={(e) => setFormLink(e.target.value)} placeholder="Form Link" style={{ height: '24px', width: '80%' }}></textarea>
                            <div className="flex flex-row" style={{ width: '100%' }} >
                                <br />

                                <button className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" onClick={addForm}>add</button>
                                <div style={{ width: '20px' }}></div>
                                <button className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" onClick={removeForm}>remove</button>
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
                <div className="flex flex-col text-gray-700" style={{ width: '50%' }}>

                    <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                        <div className="h-40 bg-gray-200 rounded-lg overflow-y-scroll border-black border-2 text-xl p-2">

                            {waivers.map(w => <li key={w.id}> {w.id}: <a href={w.link} target='_blank'><button className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase"> Waiver</button></a> </li>)}

                        </div>
                        <div className="flex flex-col text-gray-800 items-start mt-4">
                            <h4 className="text-xl text-gray-900 font-semibold">Event Waivers</h4>

                        </div>

                    </div>
                </div>

                <div className="flex flex-col text-gray-700" style={{ width: '50%' }}>
                    <div className="flex flex-col bg-gray-200 place-content-center rounded-lg p-4 m-2 text-gray-700">
                            <h4 className="text-xl text-gray-900 font-semibold">Logout</h4>
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
