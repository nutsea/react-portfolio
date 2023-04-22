import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './../styles/e-learning.css'
import './../styles/e-game.css'
import git from './../img/e-learning/Git.png'
import GT from './../img/e-learning/GT.png'
import youtube from './../img/e-learning/YouTube.png'
import audiogame from './../img/e-learning/AudioGame.png'
import megaphone from './../img/e-learning/Megaphone.png'

const EAudio = () => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
        const body = document.body
        body.classList.remove('Nav-lock')
        body.classList.add('Body-e')

    })

    const showGames = (e) => {
        const gamesMenu = document.querySelector('.Games-menu-area')
        gamesMenu.classList.add('Showgames')
    }

    const hideGames = (e) => {
        const gamesMenu = document.querySelector('.Games-menu-area')
        gamesMenu.classList.remove('Showgames')
        gamesMenu.classList.remove('Choosing')
    }

    const eBurger = (e) => {
        const burger = document.querySelector('.E-nav-burger')
        burger.classList.toggle('Active')
        const nav = document.querySelector('.E-nav-list')
        nav.classList.toggle('Nav-hide')
        const global = document.body
        global.classList.toggle('Nav-lock')
    }

    const handleNavigate = (e) => {
        navigate(`${e.target.id}`)
    }

    const chooseLevel = (e) => {
        const levels = document.getElementsByClassName('Level')
        for (let i of levels) {
            i.classList.remove(`${i.id}`)
        }
        e.target.classList.add(`${e.target.id}`)
        const button = document.querySelector('.E-game-start-btn')
        button.classList.add('Ready-to-start')
    } 

    return (
        <div className="E-global">
            <div className="E-header">
                <div className="E-header-container">
                    <div className="E-nav">
                        <ul>
                            <li className="E-logo" id="/e-learning" onClick={handleNavigate}>GlobalTalk</li>
                            <span className="After-e-logo"></span>
                            <li id="/e-learning" onClick={handleNavigate}>Home</li>
                            <li id="/e-textbook" onClick={handleNavigate}>Textbook</li>
                            <li id="/e-statistics" onClick={handleNavigate}>Statistics</li>
                            <li className="E-games" onMouseEnter={showGames}>
                                Games
                                <div className="Games-menu-area" onMouseLeave={hideGames}>
                                    <div className="Games-menu">
                                        <button id="/e-sprint" onClick={handleNavigate}>Sprint ➔</button>
                                        <button id="/e-audio">Audio-Call ➔</button>
                                    </div>
                                </div>
                            </li>
                            <div className="Games-arrow" onMouseEnter={showGames}></div>
                        </ul>
                    </div>
                    <div className="E-account">
                        <div className="E-avatar">A</div>
                        <div className="E-name">Alex</div>
                        <div className="E-sign">Sign out ➔</div>
                    </div>
                    <div className="E-nav-second">
                        <div className="E-nav-burger" onClick={eBurger}><span></span></div>
                        <div className="E-logo" id="/e-learning" onClick={handleNavigate}>GlobalTalk</div>
                        <div className="E-account-second">
                            <div className="E-avatar">A</div>
                            <div className="E-name">Alex</div>
                            <div className="Games-arrow"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="E-nav-list Nav-hide">
                <ul>
                    <li id="/e-learning" onClick={handleNavigate}>Home</li>
                    <li id="/e-textbook" onClick={handleNavigate}>Textbook</li>
                    <li id="/e-statistics" onClick={handleNavigate}>Statistics</li>
                    <li id="/e-sprint" onClick={handleNavigate}>Sprint</li>
                    <li id="/e-audio" className="E-place" onClick={eBurger}>Audio-Call</li>
                </ul>
            </div>

            <div className="E-game-s-content">
                <div className="E-game-s-container">
                    <div className="E-game-s-pic"><img src={audiogame} alt="audiogame" /></div>
                    <div className="E-game-s-pic-small Small-audio"><img src={megaphone} alt="megaphone" /></div>
                    <div className="E-game-s-text">
                        <div className="E-game-s-sub">
                            <div className="E-game-s-sub-text">Audio-Call</div>
                            <div className="E-game-s-sub-name">audition task</div>
                        </div>
                        <div className="E-game-s-desc">
                            The Audio-Call training develops vocabulary and improves listening comprehension.
                        </div>
                        <div className="E-game-choose-level">
                            <div className="E-game-choose-level-text">Choose a level:</div>
                            <div className="E-game-levels">
                                <button id="La1" className="E-g-a1 Level" onClick={chooseLevel}>A1</button>
                                <button id="La2" className="E-g-a2 Level" onClick={chooseLevel}>A2</button>
                                <button id="Lb1" className="E-g-b1 Level" onClick={chooseLevel}>B1</button>
                                <button id="Lb2" className="E-g-b2 Level" onClick={chooseLevel}>B2</button>
                                <button id="Lc1" className="E-g-c1 Level" onClick={chooseLevel}>C1</button>
                                <button id="Lc2" className="E-g-c2 Level" onClick={chooseLevel}>C2</button>
                            </div>
                            <div className="E-start-btn-container">
                                <button className="E-game-start-btn">Get started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="E-footer">
                <div className="E-footer-line1">
                    <div className="E-footer-nav">
                        <ul>
                            <li id="/e-learning" onClick={handleNavigate}>Home</li>
                            <li id="/e-textbook" onClick={handleNavigate}>Textbook</li>
                            <li id="/e-statistics" onClick={handleNavigate}>Statistics</li>
                            <li id="/e-sprint" onClick={handleNavigate}>Sprint</li>
                            <li id="/e-audio" onClick={handleNavigate}>Audio-Call</li>
                        </ul>
                    </div>
                    <div className="E-footer-authors">
                        <ul>
                            <li id="/e-about" onClick={handleNavigate}>Alex</li>
                            <li id="/e-about" onClick={handleNavigate}>Gabriel</li>
                            <li id="/e-about" onClick={handleNavigate}>Marcus</li>
                        </ul>
                    </div>
                </div>
                <span className="E-footer-slash"></span>
                <div className="E-footer-line2">
                    <div className="E-footer-links">
                        <ul>
                            <li><img src={git} alt="git" /></li>
                            <li><img src={GT} alt="GT" /></li>
                            <li><img src={youtube} alt="youtube" /></li>
                        </ul>
                    </div>
                    <div className="E-footer-copyright">
                        ©2021 GlobalTalk. Project for&nbsp;<span>GlobalTalk</span>.
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EAudio;