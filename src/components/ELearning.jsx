import React, { useEffect } from "react";
import './../styles/e-learning.css'
import mainboy from './../img/e-learning/MainBoy.png'
import flash from './../img/e-learning/Flash.svg'
import play from './../img/e-learning/Play.svg'
import whitegirl from './../img/e-learning/WhiteGirl.png'
import sneakers from './../img/e-learning/Sneakers.png'
import megaphone from './../img/e-learning/Megaphone.png'
import greygirl from './../img/e-learning/GreyGirl.png'
import girlboy from './../img/e-learning/Girl&Boy.png'
import git from './../img/e-learning/Git.png'
import GT from './../img/e-learning/GT.png'
import youtube from './../img/e-learning/YouTube.png'
import { useNavigate } from "react-router-dom";

const ELearning = () => {
    const navigate = useNavigate()

    useEffect (() => {
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

    const closeBurger = (e) => {
        const burger = document.querySelector('.E-nav-burger')
        burger.classList.remove('Active')
        const nav = document.querySelector('.E-nav-list')
        nav.classList.add('Nav-hide')
        const global = document.body
        global.classList.remove('Nav-lock')
    }

    const handleNavigate = (e) => {
        navigate(`${e.target.id}`)
    }

    return (
        <div className="E-global">

            <div className="E-header">
                <div className="E-header-container">
                    <div className="E-nav">
                        <ul>
                            <li className="E-logo" id="/e-learning" onClick={handleNavigate}>GlobalTalk</li>
                            <span className="After-e-logo"></span>
                            <li id="/e-learning" className="E-place">Home</li>
                            <li id="/e-textbook" onClick={handleNavigate}>Textbook</li>
                            <li id="/e-statistics" onClick={handleNavigate}>Statistics</li>
                            <li className="E-games" onMouseEnter={showGames}>
                                Games
                                <div className="Games-menu-area" onMouseLeave={hideGames}>
                                    <div className="Games-menu">
                                        <button id="/e-sprint" onClick={handleNavigate}>Sprint ➔</button>
                                        <button id="/e-audio" onClick={handleNavigate}>Audio-Call ➔</button>
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
                        <div className="E-logo" onClick={closeBurger}>GlobalTalk</div>
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
                    <li id="/e-learning" className="E-place" onClick={eBurger}>Home</li>
                    <li id="/e-textbook" onClick={handleNavigate}>Textbook</li>
                    <li id="/e-statistics" onClick={handleNavigate}>Statistics</li>
                    <li id="/e-sprint" onClick={handleNavigate}>Sprint</li>
                    <li id="/e-audio" onClick={handleNavigate}>Audio-Call</li>
                </ul>
            </div>

            <div className="E-main-container">
                <div className="E-main-content">
                    <div className="E-main-text">
                        <div className="E-main-subtitle">E-COURSE PLATFORM</div>
                        <div className="E-main-slogan">
                            Learning and
                            teaching online,
                            made easy.
                        </div>
                        <div className="E-main-practice">
                            Practice your English and learn new things with the platform.
                        </div>
                        <button className="E-main-about-btn" id="/e-about" onClick={handleNavigate}>About platform</button>
                        <div className="E-main-services">
                            <div className="E-main-words">
                                <div className="E-main-words-sub">
                                    <img className="E-words-img" src={flash} alt="flash" />
                                    <div className="E-words-amount">600</div>
                                    <div className="E-words-plus">+</div>
                                </div>
                                <div className="E-main-words-text">Popular words</div>
                            </div>
                            <span className="After-main-words"></span>
                            <div className="E-main-games">
                                <div className="E-main-games-sub">
                                    <img className="E-games-img" src={play} alt="play" />
                                    <div className="E-games-amount">2</div>
                                    <div className="E-games-plus">+</div>
                                </div>
                                <div className="E-main-games-text">Mini-games</div>
                            </div>
                        </div>
                    </div>
                    <div className="E-main-images">
                        <img className="Mainboy" src={mainboy} alt="mainboy" />
                    </div>
                </div>
            </div>

            <div className="E-white-container">
                <div className="E-white-content-first">
                    <div className="E-white-pic-first">
                        <img src={whitegirl} alt="whitegirl" />
                    </div>
                    <div className="E-white-text-first">
                        <div className="E-white-sub-first">Learn a language in a playful way</div>
                        <div className="E-white-info-first">Make learning words more fun with mini-games</div>
                        <div className="E-white-games-first">
                            <div className="E-white-sprint" id="/e-sprint" onClick={handleNavigate}>
                                <img id="/e-sprint" src={sneakers} alt="sneakers" />
                                <div id="/e-sprint" className="E-white-sprint-text">Sprint ➔</div>
                            </div>
                            <div className="E-white-audio" id="/e-audio" onClick={handleNavigate}>
                                <img id="/e-audio" src={megaphone} alt="megaphone" />
                                <div id="/e-audio" className="E-white-audio-text">Audio-Call ➔</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="E-grey-container">
                <div className="E-grey-content-first">
                    <div className="E-grey-text-first">
                        <div className="E-grey-sub-first">Increase your vocabulary</div>
                        <div className="E-grey-info-first">Traditional and new effective approaches to word study</div>
                        <button id="/e-textbook" className="E-grey-textbook-btn" onClick={handleNavigate}>Textbook ➔</button>
                    </div>
                    <div className="E-grey-pic-first">
                        <img src={greygirl} alt="greygirl" />
                    </div>
                </div>
            </div>

            <div className="E-white-container E-white-sec">
                <div className="E-white-content-second">
                    <div className="E-white-pic-second">
                        <img src={girlboy} alt="girlboy" />
                    </div>
                    <div className="E-white-text-second">
                        <div className="E-white-sub-second">Watch your progress every day</div>
                        <div className="E-white-info-second">Save statistics on your achievements, words learned, and mistakes</div>
                        <button id="/e-statistics" className="E-white-statistics-btn" onClick={handleNavigate}>Statistics ➔</button>
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
 
export default ELearning;