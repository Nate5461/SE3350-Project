"use client"

import React from "react";




export default function Button() {
  
  const textSpeech = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim() !== "") {
        var msg = new SpeechSynthesisUtterance(selection.toString().trim());
        window.speechSynthesis.speak(msg);
    } else {
        // If no text is selected, read the entire document
        var fullText = document.body.innerText;
        var msg = new SpeechSynthesisUtterance(fullText);
        window.speechSynthesis.speak(msg);
    }
};

  return (
    <div className="fixed right-0 bottom-0">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => textSpeech()}
      >
        Text-to-speech
      </button>
    </div>
  );
}