import {useState} from "react";

import './ChatBot.css'
import ChatView from "./ChatView"

function ChatBot(){

const [isChatViewDisplayed, setIsChatViewDisplayed] = useState(false)

const toggleChatView = () => {
    setIsChatViewDisplayed(!isChatViewDisplayed)
}

return(
    <>
        { isChatViewDisplayed && <ChatView/> }
        <div className="chat-bot-icon" onClick={toggleChatView}></div>
    </>
)

}

export default ChatBot