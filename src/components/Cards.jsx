import React from "react";
import './../styles/main.css'
import './../styles/project.css'
import cards1 from './../img/500/500-1.png'
import cards2 from './../img/500/500-2.png'
import cards3 from './../img/500/500-3.png'
import cards4 from './../img/500/500-4.png'
import cards5 from './../img/500/500-5.png'
import cards6 from './../img/500/500-6.png'
import arrow from './../img/arrow.png'

const Cards = () => {
    const handleLeftCard = (e) => {
        const cards = document.getElementsByClassName('Card-image')
        for (let i = 0; i < cards.length; i++) {
            if (!cards[i].classList.contains('Invisible')) {
                cards[i].classList.add('Invisible')
                if (i !== 0) cards[i - 1].classList.remove('Invisible')
                else cards[cards.length - 1].classList.remove('Invisible')
                break
            }
        }
    }

    const handleRightCard = (e) => {
        const cards = document.getElementsByClassName('Card-image')
        for (let i = 0; i < cards.length; i++) {
            if (!cards[i].classList.contains('Invisible')) {
                cards[i].classList.add('Invisible')
                if (i !== cards.length - 1) cards[i + 1].classList.remove('Invisible')
                else cards[0].classList.remove('Invisible')
                break
            }
        }
    }

    return (
        <div className="Container-2">
            <div className="Chat-container">
                <div className="Project-name- Box Element">
                    <p className="Project-name">Online chat</p>
                </div>
                <div className="Chat-project Box Element">
                    <div className="Slider">
                        <img src={cards1} alt="chat" className="Card-image" />
                        <img src={cards2} alt="chat" className="Card-image Invisible" />
                        <img src={cards3} alt="chat" className="Card-image Invisible" />
                        <img src={cards4} alt="chat" className="Card-image Invisible" />
                        <img src={cards5} alt="chat" className="Card-image Invisible" />
                        <img src={cards6} alt="chat" className="Card-image Invisible" />
                        <div className="Cards-slider">
                            <button className="Leftcard" onClick={handleLeftCard}>
                                <img src={arrow} alt="arrow" width='100%' className="Leftcard-2" />
                            </button>
                            <button className="Rightcard" onClick={handleRightCard}>
                                <img src={arrow} alt="arrow" width='100%' className="Rightcard-2" />
                            </button>
                        </div>
                    </div>
                    <div className="Chat-description">
                        <p className="Subtitle">Functionality</p>
                        <p className="Par-1">
                            I made a browser game. 
                            In this game you can create a room and your friends can join. 
                            Players get a card with question in turn. 
                            Every player gets 10 cards with funny answers. 
                            And when all players see a question they give the funniest answer card from their point of view. 
                            After that player, whose question it was, chooses the best answer. 
                            And author of this answer gets points. 
                            The winner is the one who gets 10 points first.
                        </p>
                        <p className="Par-1">
                            Players can leave the room. 
                            If all players quit, room is being blocked. 
                            The average game lasts for an hour. 
                            So every room has a timer for 3 hours in case of not all players quit. 
                            After that time is out room is being blocked to not overload the server with non-used rooms.
                        </p>
                        <p className="Par-1">
                            Also users can't join the room that is not exist. 
                            And if the user tries to take a nickname that some user in the room already has, he has to change it.
                        </p>
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
 
export default Cards;