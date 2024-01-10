import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import PodcastMain from "./PodcastMain.tsx";
import PodcastAbout from "./PodcastAbout.tsx";
import PodcastDetail from "./PodcastDetail.tsx";
import PodcastBlog from "./PodcastBlog.tsx";
import PodcastSingleBlog from "./PodcastSingleBlog.tsx";


import './../styles/_podcast.scss'

import logo from './../img/podcast/PLogo.png'
import appstore from './../img/podcast/footer/FAppstore.png'
import google from './../img/podcast/footer/FGoogle.png'
import inst from './../img/podcast/footer/FInst.png'
import playmarket from './../img/podcast/footer/FPlayMarket.png'
import spotify from './../img/podcast/footer/FSpotify.png'
import tiktok from './../img/podcast/footer/FTikTok.png'
import twitter from './../img/podcast/footer/FTwitter.png'
import youtube from './../img/podcast/footer/FYouTube.png'

function Podcast() {
    const navigate = useNavigate()

    useEffect(() => {
        const revs = document.getElementsByClassName('PLisRev')
        let translate = 0
        for (let i of revs) {
            i.setAttribute('style', `transform: translate(${translate}px)`)
            translate += 560
        }

        const cards = document.getElementsByClassName('PSponsorCard')
        let translate2 = 0
        for (let i of cards) {
            i.setAttribute('style', `transform: translate(${translate2}px)`)
            translate2 += 560
        }
    })

    const handleNavigate = (e) => {
        navigate(`${e.target.id}`)
        const burger = document.querySelector('.PNavBurger')
        const nav = document.querySelector('.PNavList')
        const global = document.body
        if (burger?.classList.contains('Active')) {
            burger?.classList.toggle('Active')
            nav?.classList.toggle('NavHide')
            global.classList.toggle('NavLock')
        }
    }

    const eBurger = (e) => {
        const burger = document.querySelector('.PNavBurger')
        burger?.classList.toggle('Active')
        const nav = document.querySelector('.PNavList')
        nav?.classList.toggle('NavHide')
        const global = document.body
        global.classList.toggle('NavLock')
    }

    return (
        <div className="PGlobal">
            <div className="PMainContainer">
                <header className="PHeader">
                    <div className="PHeaderRow">
                        <div className="PHeaderLeft">
                            <div className="PLogo" id="/podcast" onClick={handleNavigate}><img src={logo} alt="logo" /></div>
                            <div className="PNav">
                                <ul>
                                    <li id="/podcast/detail" onClick={handleNavigate}>Episodes</li>
                                    <li id="/podcast/blog" onClick={handleNavigate}>Blog</li>
                                    <li id="/podcast/about" onClick={handleNavigate}>About</li>
                                </ul>
                            </div>
                        </div>
                        <div className="PHeaderBtns">
                            <div><a href="#PRecent" className="PRecentBtn">RECENT EPISODES</a></div>
                            <div><a href="#PPrice" className="PSubBtn">SUBSCRIBE</a></div>
                        </div>
                        <div className="PNavSecond">
                            <div className="PNavBurger" onClick={eBurger}><span></span></div>
                        </div>
                    </div>
                </header>
                <div className="PNavList NavHide">
                    <ul>
                        <li id="/podcast/detail" onClick={handleNavigate}>Episodes</li>
                        <li id="/podcast/blog" onClick={handleNavigate}>Blog</li>
                        <li id="/podcast/about" onClick={handleNavigate}>About</li>
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element = { <PodcastMain /> } />
                    <Route path="/about" element = { <PodcastAbout /> } />
                    <Route path="/detail" element = { <PodcastDetail /> } />
                    <Route path="/blog" element = { <PodcastBlog /> } />
                    <Route path="/singleblog" element = { <PodcastSingleBlog /> } />
                </Routes>
                <footer className="PFooter">
                    <div className="PFooterCols">
                        <div className="PFooterColMain">
                            <div className="PFooterLogo">
                                <img src={logo} alt="logo" />
                                <div className="PFooterYear">©2021.</div>
                            </div>
                            <div className="PFCMText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                            <div className="PFCMMedia">
                                <img src={twitter} alt="twitter" />
                                <img src={inst} alt="inst" />
                                <img src={tiktok} alt="tiktok" />
                            </div>
                        </div>
                        <ul className="PFooterColNav1">
                            <li id="/podcast/about" onClick={handleNavigate}>About</li>
                            <li className="FOrange">Testimonials</li>
                            <li>Features</li>
                        </ul>
                        <ul className="PFooterColNav2">
                            <li id="/podcast/detail" onClick={handleNavigate} className="FOrange">Episodes</li>
                            <li id="/podcast" onClick={handleNavigate}>Pricing</li>
                            <li id="/podcast/blog" onClick={handleNavigate}>Blog</li>
                        </ul>
                        <div className="PFooterColSocialMedia">
                            <div className="PFooterListen">
                                <div className="PFLText">Listen to episodes on your fav flatform:</div>
                                <div className="PFLMedia">
                                    <img src={google} alt="google" />
                                    <img src={spotify} alt="spotify" />
                                    <img src={youtube} alt="youtube" />
                                </div>
                            </div>
                            <div className="PFooterApp">
                                <div className="PFAText">App available on:</div>
                                <div className="PFAFrom">
                                    <img src={appstore} alt="appstore" />
                                    <img src={playmarket} alt="playmarket" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="PFooterSlash"></div>
                    <div className="PFooterRights">
                        <div className="PFooterCopyright">©2022. All Rights Reserved.&nbsp;<div>Pod of Cast</div></div>
                        <div className="PFRLinks">
                            <div className="PFRLink">Terms</div>
                            <div className="PFRDot">&nbsp;•&nbsp;</div>
                            <div className="PFRLink">Privacy</div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
 
export default Podcast;