import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './../styles/e-learning.css'
import './../styles/e-statistics.css'
import git from './../img/e-learning/Git.png'
import GT from './../img/e-learning/GT.png'
import youtube from './../img/e-learning/YouTube.png'
import sprintres from './../img/e-learning/SprintRes.png'
import audiores from './../img/e-learning/AudioRes.png'

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
} from "chart.js"

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)

const EStatistics = () => {
    const navigate = useNavigate()
    // ChartJS.register(
    //     LineElement,
    //     CategoryScale,
    //     LinearScale,
    //     PointElement
    // )

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Audio-Call',
            data: [7, 60, -17, 20, -82, -77, 18],
            backgroundColor: '#2b788b6c',
            borderColor: '#2B788B',
            borderWidth: 2.5,
        },
        {
            label: 'Sprint',
            data: [82, 84, 50, 80, -63, -5, -76],
            backgroundColor: '#9450696a',
            borderColor: '#945069',
            borderWidth: 2.5
        }
        ],
    }
    const options = {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true
                }
            }
        },
        scales: {
            y: {
                min: -100,
                max: 100
            }
        },
        hoverRadius: 12,
        hitRadius: 20,
        pointRadius: 3,
        pointBorderWidth: 1,
    }

    useEffect (() => {
        window.scrollTo(0, 0)
        const body = document.body
        body.classList.remove('Nav-lock')
        body.classList.add('Body-e')
        const digitsWords = document.querySelector('.Digits-1')
        digitsWords.innerText = '0'
        let numWords = Number(digitsWords.innerText)
        const intervalWords = setInterval(() => {
            digitsWords.innerText = `${numWords}`
            numWords += 1
            if (digitsWords.innerText === '10') clearInterval(intervalWords)
        }, 50)
        const digitsAnswers = document.querySelector('.Digits-2')
        digitsAnswers.innerText = '0'
        let numAnswers = Number(digitsAnswers.innerText)
        const intervalAnswers = setInterval(() => {
            digitsAnswers.innerText = `${numAnswers}`
            numAnswers += 1
            if (digitsAnswers.innerText === '43') clearInterval(intervalAnswers)
        }, 11.6279)
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
                            <li id="/e-statistics" className="E-place">Statistics</li>
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
                    <li id="/e-statistics" className="E-place" onClick={eBurger}>Statistics</li>
                    <li id="/e-sprint" onClick={handleNavigate}>Sprint</li>
                    <li id="/e-audio" onClick={handleNavigate}>Audio-Call</li>
                </ul>
            </div>

            <div className="E-statistics-content">
                <div className="E-statistics-header">
                    <div className="E-statistics-day">For the day</div>
                    <div className="E-statistics-alltime E-this-statistic">For all the time</div>
                </div>
                <div className="E-statistics-boxes">

                    <div className="E-statistics-text">
                        <div className="E-statistics-sub">All-time statistics</div>
                        <div className="E-statistics-sub-text">Your statistics on all activities</div>
                        <div className="E-statistics-results">
                            <div className="E-words-results">
                                <div className="E-st-result"><div className="Digits-1">10</div><span>+</span></div>
                                <div className="E-st-result-name">words studied</div>
                            </div>
                            <span className="E-st-res-slash"></span>
                            <div className="E-words-results">
                                <div className="E-st-result"><div className="Digits-2">43</div><span>%</span></div>
                                <div className="E-st-result-name">correct answers</div>
                            </div>
                        </div>
                        <div className="E-statistics-game E-st-g-1">
                            <div className="E-st-game-pic"><img src={sprintres} alt="sprintres" /></div>
                            <div className="E-st-game-text">
                                <div className="E-st-game-sub">
                                    <div className="E-st-game-sub-text">Sprint</div>
                                    <div className="E-st-game-sub-name">speed task</div>
                                </div>
                                <div className="E-st-game-results">
                                    <div>5&nbsp;<span>words studied</span></div>
                                    <div>90%&nbsp;<span>correct answers</span></div>
                                    <div>7%&nbsp;<span>best series of correct answers</span></div>
                                </div>
                            </div>
                        </div>
                        <span className="E-st-games-slash"></span>
                        <div className="E-statistics-game E-st-g-2">
                            <div className="E-st-game-pic"><img src={audiores} alt="audiores" /></div>
                            <div className="E-st-game-text E-st-g-t-2">
                                <div className="E-st-game-sub">
                                    <div className="E-st-game-sub-text">Audio-Call</div>
                                    <div className="E-st-game-sub-name">audition task</div>
                                </div>
                                <div className="E-st-game-results">
                                    <div>5&nbsp;<span>words studied</span></div>
                                    <div>90%&nbsp;<span>correct answers</span></div>
                                    <div>7%&nbsp;<span>best series of correct answers</span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="E-statistics-chart">
                        {/* <canvas id="E-chart" className="E-chart"></canvas> */}
                        <div className="E-chart">
                            <Line data={data} options={options}>
                                {/* data={data}
                                options={options} */}
                            </Line>
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
 
export default EStatistics;