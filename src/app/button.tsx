"use client"
import React, { useState } from 'react';

const TextToSpeechButton = () => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [speechSynthesisInstance, setSpeechSynthesisInstance] = useState<SpeechSynthesisUtterance | null>(null);

    const startSpeech = (text: string) => {
        var msg = new SpeechSynthesisUtterance(text);
        msg.onend = () => {
            setIsSpeaking(false); // Set isSpeaking to false when speech ends
            setSpeechSynthesisInstance(null); // Reset the instance
        };
        window.speechSynthesis.speak(msg);
        setSpeechSynthesisInstance(msg);
        setIsSpeaking(true);
    };

    const stopSpeech = () => {
        if (speechSynthesisInstance) {
            window.speechSynthesis.cancel();
            setSpeechSynthesisInstance(null); // Reset the instance
        }
        setIsSpeaking(false);
        console.log('speak?' + isSpeaking);

    };

    const textSpeech = () => {
        if (isSpeaking) {
            stopSpeech();
        } else {
            const selection = window.getSelection();
            if (selection && selection.toString().trim() !== "") {
                startSpeech(selection.toString().trim());
            } else {
                // If no text is selected, read the entire document
                startSpeech(document.body.innerText);
            }
        }
    };

    return (
        <div className="fixed right-0 bottom-0">
            <button
                className= {`bg-${isSpeaking ? 'red' : 'blue'}-500 text-black font-bold py-2 px-4 rounded`}
                //className={`bg-${isSpeaking ? 'red' : 'blue'}-500 hover:bg-${isSpeaking ? 'red' : 'blue'}-700 text-white font-bold py-2 px-4 rounded`}
                onClick={textSpeech}
            >
                {isSpeaking ? 'Stop Speaking' : 'Start Speaking'}
            </button>
        </div>
    );
};

export default TextToSpeechButton;
