import React, { useEffect } from "react";
import './../styles/base.css'
import './../styles/main.css'
import './../styles/project.css'
import chat from './../img/chat/chat.png'

const Chat = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        console.log('done')
    }, [])

    return (
        <div className="Container-2">
            <div className="Chat-container">
                <div className="Project-name- Box Element">
                    <p className="Project-name">Online chat</p>
                </div>
                <div className="Chat-project Box Element">
                    <img src={chat} alt="chat" className="Chat-image" />
                    <div className="Chat-description">
                        <p className="Subtitle">Functionality</p>
                        <p className="Par-1">This is a chat with rooms. A person can enter the room and send a message to the participants.</p>
                        <p className="Par-1">When one person enters the room other users of this room get a message about new user's joining.</p>
                        <p className="Par-1">At the top of chat window users can see amount of participants. Also every user can leave the room by clicking the corresponding button.</p>
                        <p className="Subtitle-2">Technologies</p>
                        <div className="Technologies">
                            <p className="Tech">● React</p>
                            <p className="Tech">● Socket.io</p>
                            <p className="Tech">● Node.js</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Chat;