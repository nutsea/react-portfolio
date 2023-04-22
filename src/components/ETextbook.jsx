import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import './../styles/e-learning.css'
import './../styles/e-textbook.css'
import git from './../img/e-learning/Git.png'
import GT from './../img/e-learning/GT.png'
import youtube from './../img/e-learning/YouTube.png'
import textbook from './../img/e-learning/Textbook.png'
import sneakers from './../img/e-learning/Sneakers.png'
import megaphone from './../img/e-learning/Megaphone.png'
import remark from './../img/e-learning/Remark.png'
import remark2 from './../img/e-learning/Remark2.png'
import awful from './../img/e-learning/Awful.png'
import audioword from './../img/e-learning/AudioWord.png'
import remarksound from './../sounds/RemarkSound.mp3'
import awfulsound from './../sounds/AwfulSound.mp3'


const ETextbook = () => {
    const navigate = useNavigate()

    let first = 1, 
    last = 30,
    thisP = 1,
    nextP = 2,
    prevP = 0

    useEffect (() => {
        window.scrollTo(0, 0)
        const lastE = document.querySelector('.E-last')
        lastE.innerText = `${last}`
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

    const addOrRem = (e) => {
        if (e.target.classList.contains('E-word-learned')) {
            e.target.classList.toggle('E-learn-add')
            e.target.classList.toggle('E-learn-rem')
            if (e.target.classList.contains('E-learn-add')) e.target.innerText = 'Add to learned'
            else e.target.innerText = 'Remove from learned'
        }
        else {
            e.target.classList.toggle('E-dict-add')
            e.target.classList.toggle('E-dict-rem')
            if (e.target.classList.contains('E-dict-add')) e.target.innerText = 'Add to dictionary'
            else e.target.innerText = 'Remove from dictionary'
        }
    }

    const handleNavigate = (e) => {
        navigate(`${e.target.id}`)
    }

    const [remarkPlay] = useSound(remarksound)
    const [awfulPlay] = useSound(awfulsound)

    const handlePagination = (e) => {
        const thisE = document.getElementById(`${e.target.id}`)
        const hide_1_2 = document.querySelector('.Hide-1-2')
        const hide_29_30 = document.querySelector('.Hide-29-30')
        const buttons = document.getElementsByClassName('E-pag')
        for (let i of buttons) {
            i.classList.remove('E-this')
        }

        switch (e.target.id) {
            case 'left':
                if (prevP !== 0) {
                    thisP--
                    nextP--
                    prevP--
                }
                break

            case 'right':
                if (nextP !== last + 1) {
                    thisP++
                    prevP++
                    nextP++
                }
                break

            case 'first':
                thisP = first
                nextP = first + 1
                prevP = first - 1
                break

            case 'mid1':
                thisP = Number(thisE.innerText)
                nextP = thisP + 1
                prevP = thisP - 1
                break

            case 'mid2':
                thisP = Number(thisE.innerText)
                nextP = thisP + 1
                prevP = thisP - 1
                break

            case 'mid3':
                thisP = Number(thisE.innerText)
                nextP = thisP + 1
                prevP = thisP - 1
                break

            case 'last':
                thisP = last
                prevP = last - 1
                nextP = last + 1
                break
        
            default:
                break
        }

        switch (thisP) {
            case 1:
                hide_1_2.classList.add('Removed')
                hide_29_30.classList.remove('Removed')
                buttons[0].classList.add('E-inactive')
                buttons[1].classList.add('E-this')
                buttons[2].innerText = '2'
                buttons[3].innerText = '3'
                buttons[4].innerText = '4'
                buttons[6].classList.remove('E-inactive')
                break

            case last:
                hide_29_30.classList.add('Removed')
                hide_1_2.classList.remove('Removed')
                buttons[0].classList.remove('E-inactive')
                buttons[2].innerText = `${last - 3}`
                buttons[3].innerText = `${last - 2}`
                buttons[4].innerText = `${last - 1}`
                buttons[5].classList.add('E-this')
                buttons[6].classList.add('E-inactive')
                break

            case 2:
                hide_1_2.classList.add('Removed')
                hide_29_30.classList.remove('Removed')
                buttons[0].classList.remove('E-inactive')
                buttons[2].classList.add('E-this')
                buttons[2].innerText = '2'
                buttons[3].innerText = '3'
                buttons[4].innerText = '4'
                buttons[6].classList.remove('E-inactive')
                break

            case last - 1:
                hide_29_30.classList.add('Removed')
                hide_1_2.classList.remove('Removed')
                buttons[0].classList.remove('E-inactive')
                buttons[2].innerText = `${last - 3}`
                buttons[3].innerText = `${last - 2}`
                buttons[4].innerText = `${last - 1}`
                buttons[4].classList.add('E-this')
                buttons[6].classList.remove('E-inactive')
                break

            case 3:
                hide_1_2.classList.add('Removed')
                hide_29_30.classList.remove('Removed')
                buttons[0].classList.remove('E-inactive')
                buttons[2].innerText = `${prevP}`
                buttons[3].classList.add('E-this')
                buttons[3].innerText = `${thisP}`
                buttons[4].innerText = `${nextP}`
                buttons[6].classList.remove('E-inactive')
                break

            case last - 2:
                hide_1_2.classList.remove('Removed')
                hide_29_30.classList.add('Removed')
                buttons[0].classList.remove('E-inactive')
                buttons[2].innerText = `${prevP}`
                buttons[3].classList.add('E-this')
                buttons[3].innerText = `${thisP}`
                buttons[4].innerText = `${nextP}`
                buttons[6].classList.remove('E-inactive')
                break
        
            default:
                hide_1_2.classList.remove('Removed')
                hide_29_30.classList.remove('Removed')
                buttons[0].classList.remove('E-inactive')
                buttons[2].innerText = `${prevP}`
                buttons[3].classList.add('E-this')
                buttons[3].innerText = `${thisP}`
                buttons[4].innerText = `${nextP}`
                buttons[6].classList.remove('E-inactive')
                break
        }
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
                            <li id="/e-textbook" className="E-place">Textbook</li>
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
                    <li id="/e-textbook" className="E-place" onClick={eBurger}>Textbook</li>
                    <li id="/e-statistics" onClick={handleNavigate}>Statistics</li>
                    <li id="/e-sprint" onClick={handleNavigate}>Sprint</li>
                    <li id="/e-audio" onClick={handleNavigate}>Audio-Call</li>
                </ul>
            </div>

            <div className="E-textbook-content">
                <div className="E-textbook-header">
                    <div className="E-textbook-cathegory">
                        <div className="E-textbook">
                            <img src={textbook} alt="textbook" />
                            <div>Textbook</div>
                        </div>
                    </div>
                    <div className="E-textbook-games">
                        <button className="E-textbook-sprint-btn" id="/e-sprint" onClick={handleNavigate}>
                            <img id="/e-sprint" src={sneakers} alt="sneakers" />
                            Sprint
                        </button>
                        <button className="E-textbook-audio-btn" id="/e-audio" onClick={handleNavigate}>
                            <img id="/e-audio" src={megaphone} alt="megaphone" />
                            Audio-Call
                        </button>
                    </div>
                </div>

                <div className="E-textbook-levels">
                    <div className="E-this-level">
                        <div className="E-level-num">A1</div>
                        <div className="E-easy E-this-mini-level">Easy</div>
                    </div>
                    <div className="E-level">
                        <div className="E-level-num">A2</div>
                        <div className="E-easy E-mini-level">Easy</div>
                    </div>
                    <div className="E-level">
                        <div className="E-level-num">B1</div>
                        <div className="E-medium E-mini-level">Medium</div>
                    </div>
                    <div className="E-level">
                        <div className="E-level-num">B2</div>
                        <div className="E-medium E-mini-level">Medium</div>
                    </div>
                    <div className="E-level">
                        <div className="E-level-num">C1</div>
                        <div className="E-hard E-mini-level">Hard</div>
                    </div>
                    <div className="E-level">
                        <div className="E-level-num">C2</div>
                        <div className="E-hard E-mini-level">Hard</div>
                    </div>
                </div>

                <div className="E-textbook-words">
                    <div className="E-word">
                        <div className="E-word-img-container">
                            <img src={remark} alt="remark" className="E-word-img" />
                            <img src={remark2} alt="remark2" className="E-word-img-2" />
                        </div>
                        <div className="E-word-content">
                            <div className="E-word-sub">
                                <div className="E-word-word">remark<span className="E-tr-slash">&nbsp; / &nbsp;</span><span>note</span></div>
                                <button className="E-word-audio" onClick={remarkPlay}>
                                    <img src={audioword} alt="audioword" />
                                </button>
                            </div>
                            <div className="E-word-pronounce">
                                <div className="E-word-transcription">[rimɑ́ːrk]</div>
                                <div className="E-word-status E-compound">compound</div>
                            </div>
                            <div className="E-word-desc">To remark is to say something. - Замечать, то есть что-то говорить</div>
                            <div className="E-word-slash"></div>
                            <div className="E-word-example">The teacher remarked on how quickly the students were learning. Учитель заметил, как быстро ученики учатся.</div>
                            <div className="E-word-buttons">
                                <button id="Learn-1" className="E-word-learned E-learn-add" onClick={addOrRem}>Add to learned</button>
                                <button id="Dict-2" className="E-word-dictionary E-dict-rem" onClick={addOrRem}>Remove from dictionary</button>
                            </div>
                        </div>
                    </div>
                    <div className="E-word">
                        <div className="E-word-img-container"> 
                            <img src={awful} alt="awful" className="E-word-img" />
                            <img src={remark2} alt="remark2" className="E-word-img-2" />
                        </div>
                        <div className="E-word-content">
                            <div className="E-word-sub">
                                <div className="E-word-word">awful<span className="E-tr-slash">&nbsp; / &nbsp;</span><span>terrible</span></div>
                                <button className="E-word-audio" onClick={awfulPlay}>
                                    <img src={audioword} alt="audioword" />
                                </button>
                            </div>
                            <div className="E-word-pronounce">
                                <div className="E-word-transcription">[ɔ́ːfəl]</div>
                                <div className="E-word-status E-learned">learned</div>
                            </div>
                            <div className="E-word-desc">To remark is to say something. - Замечать, то есть что-то говорить</div>
                            <div className="E-word-slash"></div>
                            <div className="E-word-example">The teacher remarked on how quickly the students were learning. Учитель заметил, как быстро ученики учатся.</div>
                            <div className="E-word-buttons">
                                <button id="Learn-2" className="E-word-learned E-learn-rem" onClick={addOrRem}>Remove from learned</button>
                                <button id="Dict-2" className="E-word-dictionary E-dict-add" onClick={addOrRem}>Add to dictionary</button>
                            </div>
                        </div>
                    </div>
                    <div className="E-word">
                        <div className="E-word-img-container">
                            <img src={remark} alt="remark" className="E-word-img" />
                            <img src={remark2} alt="remark2" className="E-word-img-2" />
                        </div>
                        <div className="E-word-content">
                            <div className="E-word-sub">
                                <div className="E-word-word">remark<span className="E-tr-slash">&nbsp; / &nbsp;</span><span>note</span></div>
                                <button className="E-word-audio" onClick={remarkPlay}>
                                    <img src={audioword} alt="audioword" />
                                </button>
                            </div>
                            <div className="E-word-pronounce">
                                <div className="E-word-transcription">[rimɑ́ːrk]</div>
                                <div className="E-word-status E-compound">compound</div>
                            </div>
                            <div className="E-word-desc">To remark is to say something. - Замечать, то есть что-то говорить</div>
                            <div className="E-word-slash"></div>
                            <div className="E-word-example">The teacher remarked on how quickly the students were learning. Учитель заметил, как быстро ученики учатся.</div>
                            <div className="E-word-buttons">
                                <button id="Learn-3" className="E-word-learned E-learn-add" onClick={addOrRem}>Add to learned</button>
                                <button id="Dict-3" className="E-word-dictionary E-dict-rem" onClick={addOrRem}>Remove from dictionary</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="E-pagination">
                    <button id="left" className="E-pag E-left E-margin-0 E-inactive" onClick={handlePagination}>➔</button>
                    <button id="first" className="E-pag E-this" onClick={handlePagination}>1</button>
                    <div className="Hide-1-2 Removed">. . .</div>
                    <button id="mid1" className="E-pag E-mid-1" onClick={handlePagination}>2</button>
                    <button id="mid2" className="E-pag" onClick={handlePagination}>3</button>
                    <button id="mid3" className="E-pag E-mid-3" onClick={handlePagination}>4</button>
                    <div className="Hide-29-30">. . .</div>
                    <button id="last" className="E-pag E-last" onClick={handlePagination}>30</button>
                    <button id="right" className="E-pag" onClick={handlePagination}>➔</button>
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
 
export default ETextbook;