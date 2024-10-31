import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import getResponseFromServer from './ServerAPI'

import './css/ChatView.css'

function ChatView(){

    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const messagesEndRef = useRef(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
    }, [messages])

    const handleInputChange = (event) => {
        setNewMessage(event.target.value)
    }

    //axioksella haetaan 
    const handleButtonClick = async (event) => {
        event.preventDefault();
        //newMessage, messages
        //let response = await getResponseFromServer(newMessage)

        if (newMessage.trim() === '') {
            return;
        } try {
            const botResponse = await getResponseFromServer(newMessage);

            setMessages(
                [
                    ...messages, 
                    {id: messages.length+1, text: newMessage, sender: "user"},
                    {id: messages.length+2, text: botResponse, sender: "bot"}
                ]
            );
            setNewMessage("")
        } catch (error) {
            console.error("Error while sending message:", error);
        }
    };

    return(
        <div className="chat-view">
            <div className="top-bar">OAMK bot</div>
            <div 
                className="conversation"
                style={{overflow: "auto"}}
                ref={messagesEndRef}
            >
                {messages.map((message) => (
                    <div key={message.id} style={{"padding-bottom" : 25}}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div style={{border: "solid", padding: 5, position: "relative"}}>
                <input 
                    style={{position: "relative", left: 0}}
                    onChange={handleInputChange}
                    value={newMessage}
                />
                <button 
                    style={{position: "relative", right: 0, height: "15px", width: "20px"}}
                    onClick={handleButtonClick}
                />
            </div>
        </div>
    )
}

export default ChatView