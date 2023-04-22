import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './../styles/e-learning.css'
import './../styles/e-about.css'
import git from './../img/e-learning/Git.png'
import GT from './../img/e-learning/GT.png'
import youtube from './../img/e-learning/YouTube.png'
import alex from './../img/e-learning/EAlex.png'
import gabriel from './../img/e-learning/EGabriel.png'
import marcus from './../img/e-learning/EMarcus.png'

const EAbout = () => {
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
                    <li id="/e-audio" onClick={handleNavigate}>Audio-Call</li>
                </ul>
            </div>

            <div className="E-about-content">
                <div className="E-dev">
                    <div className="E-dev-pic"><img src={alex} alt="alex" /></div>
                    <div className="E-dev-text">
                        <div className="E-dev-sub">
                            <div className="E-dev-sub-name">Alex</div>
                            <div className="E-dev-sub-git">github</div>
                        </div>
                        <div className="E-dev-desc">
                            Made design, api queries, statistics, sprint game, did some layout and supervised development.
                        </div>
                    </div>
                </div>
                <div className="E-dev">
                    <div className="E-dev-pic"><img src={gabriel} alt="gabriel" /></div>
                    <div className="E-dev-text">
                        <div className="E-dev-sub">
                            <div className="E-dev-sub-name">Gabriel</div>
                            <div className="E-dev-sub-git">github</div>
                        </div>
                        <div className="E-dev-desc">
                            Authorization / registration module, Audio Challenge game, collection of statistics, routing, typing of the studied words.
                        </div>
                    </div>
                </div>
                <div className="E-dev">
                    <div className="E-dev-pic"><img src={marcus} alt="marcus" /></div>
                    <div className="E-dev-text">
                        <div className="E-dev-sub">
                            <div className="E-dev-sub-name">Marcus</div>
                            <div className="E-dev-sub-git">github</div>
                        </div>
                        <div className="E-dev-desc">
                            Made the application home page, e-textbook, layout, and adaptive.
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
 
export default EAbout;