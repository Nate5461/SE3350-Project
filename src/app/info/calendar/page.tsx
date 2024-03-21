import firebase_app from "../../firebase";
import React, { useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
const query = await getDoc(doc(db, 'calendar', "links"));

export default function CalendarPage() {

  let getSourceString = () => {
    let srcString = '';
    if (query.exists()) {
      for (let source of query.data().linksList ) {
        srcString += '&src=' + encodeURIComponent(source);
      }
      return srcString;
    }
    return "";
  }

  return (
    <>
      <iframe src={"https://calendar.google.com/calendar/embed?height=800&wkst=1&ctz=America%2FToronto&bgcolor=%23616161&showTitle=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0" + getSourceString()}
        style={{ border: 'solid 1px #777' }} width="100%" height="800" />
    </>
  );
}
