import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import './../styles/podcastAbout.scss'

import flash from './../img/podcast/daily/Flash.png'
import stars from './../img/podcast/daily/Stars.png'
import orangeLineBig from './../img/podcast/scribbles/OrangeLineBig.png'
import microphones from './../img/podcast/pictures/about/Microphones.png'
import orangeLines from './../img/podcast/scribbles/OrangeLines.png'
import blueFounder from './../img/podcast/scribbles/BlueFounder.png'
import porter from './../img/podcast/pictures/about/PorterSeverus.png'
import marques from './../img/podcast/pictures/about/MarquesKeith.png'
import founderSmile from './../img/podcast/scribbles/FounderSmile.png'
import founderStar from './../img/podcast/scribbles/FounderStar.png'
import tiktok from './../img/podcast/pictures/about/Tiktok.png'
import twitter from './../img/podcast/pictures/about/Twitter.png'
import inst from './../img/podcast/pictures/about/Inst.png'
import orangeSparkle from './../img/podcast/scribbles/OrangeSparkle.png'
import blackLisBtn from './../img/podcast/icons/BlackLisBtn.png'
import orangeLisBtn from './../img/podcast/icons/OrangeLisBtn.png'
import spotify from './../img/podcast/icons/Spotify.png'
import google from './../img/podcast/icons/GooglePodcasts.png'
import youtube from './../img/podcast/icons/Youtube.png'
import bluewave from './../img/podcast/scribbles/PGITBlueWave.png'
import gitstars from './../img/podcast/scribbles/benefits/Ben2.png'
import orangeLine from './../img/podcast/scribbles/OrangeLine.png'


import PodcastApp from "./PodcastApp.tsx";

const PodcastAbout = () => {
    const navigate = useNavigate()

    const handleNavigate = (e) => {
        navigate(`${e.target.id}`)
    }

    useEffect(() => {
        window.scroll(0, 0)
    })

    let thisRev: number = 0
    const maxRev: number = 3

    const swipeRev = (e: any) => {
        const revs = document.getElementsByClassName('PSponsorCard')
        const leftBlack = document.querySelector('.LeftBlack')
        const leftOrange = document.querySelector('.LeftOrange')
        const rightBlack = document.querySelector('.RightBlack')
        const rightOrange = document.querySelector('.RightOrange')
        switch (e.target.id) {
            case 'right':
                if (thisRev < maxRev - 1) {
                    rightBlack?.classList.add('BtnInvis')
                    rightOrange?.classList.remove('BtnInvis')
                    if (thisRev > maxRev - 3) {
                        rightBlack?.classList.remove('BtnInvis')
                        rightOrange?.classList.add('BtnInvis')
                    }
                    leftBlack?.classList.add('BtnInvis')
                    leftOrange?.classList.remove('BtnInvis')
                    let translate = -(thisRev + 1) * 560
                    for (let i of revs) {
                        i.setAttribute('style', `transform: translateX(${translate}px)`)
                        translate += 560
                    }
                    thisRev++
                }
                else {
                    rightBlack?.classList.remove('BtnInvis')
                    rightOrange?.classList.add('BtnInvis')
                }
                break;

            case 'left':
                if (thisRev > 0) {
                    leftBlack?.classList.add('BtnInvis')
                    leftOrange?.classList.remove('BtnInvis')
                    if (thisRev < 2) {
                        leftBlack?.classList.remove('BtnInvis')
                        leftOrange?.classList.add('BtnInvis')
                    }
                    rightBlack?.classList.add('BtnInvis')
                    rightOrange?.classList.remove('BtnInvis')
                    let translate = -(thisRev - 1) * 560
                    for (let i of revs) {
                        i.setAttribute('style', `transform: translateX(${translate}px)`)
                        translate += 560
                    }
                    thisRev--
                }
                else {
                    leftBlack?.classList.remove('BtnInvis')
                    leftOrange?.classList.add('BtnInvis')
                }
                break
        
            default:
                break;
        }
    }

    function emailValidation(value) {
        // DO NOT DELETE NEXT LINE!!!
        // eslint-disable-next-line
        let txt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return txt.test(value);
    }

    const handleChange = (e) => {
        if (e.target.value.length !== 0) {
            e.target.classList.remove('PGITInputEmpty')
        }
        else {
            e.target.classList.add('PGITInputEmpty')
        }
    }

    const handleChangeEmail = (e) => {
        if (emailValidation(e.target.value)) {
            e.target.classList.remove('PGITInputEmpty')
        }
        else {
            e.target.classList.add('PGITInputEmpty')
        }

        if (e.target.value.length === 0) {
            e.target.classList.add('PGITInputEmpty')
        }
    }

    const sendMessage = () => {
        const name = document.querySelector('.PGITName')
        const email = document.querySelector('.PGITMail')
        const phone = document.querySelector('.PGITPhone')
        const subject = document.querySelector('.PGITSubject')
        const textarea = document.querySelector('.PGITTextarea')
        if (name.value.length !== 0 && email.value.length !== 0 && phone.value.length !== 0 && subject.value.length !== 0 && textarea.value.length !== 0 && emailValidation(email.value)) {
            const inputs = document.getElementsByClassName('PGITInput')
            for (let i of inputs) {
                i.value = ''
                i.classList.remove('PGITInputEmpty')
            }
            textarea.value = ''
            textarea?.classList.remove('PGITInputEmpty')
        }
        else {
            if (name.value.length === 0) {
                name?.classList.add('PGITInputEmpty')
            }
    
            if (email.value.length === 0) {
                email?.classList.add('PGITInputEmpty')
            }
    
            if (phone.value.length === 0) {
                phone?.classList.add('PGITInputEmpty')
            }
    
            if (subject.value.length === 0) {
                subject?.classList.add('PGITInputEmpty')
            }
    
            if (textarea.value.length === 0) {
                namtextarea?.classList.add('PGITInputEmpty')
            }
        }
    }
    
    return (
        <div>
            <div className="PAboutContainer">
                <img className="FlashImg" src={flash} alt="flash" />
                <img className="StarsImg" src={stars} alt="stars" />
                <img className="PAboutOrangeLineBig" src={orangeLineBig} alt="orangeLineBig" />
                <div className="PAboutSubBlack">About</div>
                <div className="PAboutSubOrange">Pod of Cast</div>
                <div className="PAboutPar">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.
                </div>
                <div className="PAboutBtns">
                    {/* eslint-disable-next-line */}
                    <div className="PAboutBecomeBtn" id="/podcast" onClick={handleNavigate}><a id="/podcast">BECOME SPONSOR</a></div>
                    {/* eslint-disable-next-line */}
                    <div className="PAboutSubBtn" id="/podcast" onClick={handleNavigate}><a id="/podcast">SUBSCRIBE</a></div>
                </div>
                <div className="PAboutDigits">
                    <div className="PADCard">
                        <div className="PADCount">76<span>K</span></div>
                        <div className="PADText">Community Members</div>
                    </div>
                    <div className="PADCard">
                        <div className="PADCount">128<span>K</span></div>
                        <div className="PADText">Podcast Subscribers</div>
                    </div>
                    <div className="PADCard">
                        <div className="PADCount">59<span>K</span></div>
                        <div className="PADText">Daily Listeners</div>
                    </div>
                </div>
            </div>
            <div className="PListenersAboutContainer">
                <div className="PLACSub">What our listeners say</div>
                <div className="PLACPar">Their experience throughout every platform</div>
                <div className="PLACImg"><img src={microphones} alt="microphones" /></div>
                <div className="PAboutHistory">
                    About and History
                    <img className="OrangeLines" src={orangeLines} alt="orangeLines" />
                </div>
                <div className="PAHTextContainer">
                    <div className="PAHText">
                        <div className="PAHTPar">
                            Eu non <strong>diam</strong> phasellus vestibulum lorem. 
                            Fringilla est ullamcorper eget nulla facilisi etiam dignissim. 
                            Id diam vel quam <strong>elementum pulvinar.</strong>
                        </div>
                        <div className="PAHTPar">
                            Elementum eu facilisis sed odio morbi quis commodo.
                            Sed odio morbi quis commodo odio aenean sed adipiscing odio diam. 
                            Uno fablotoson louw uit.
                        </div>
                    </div>
                    <div className="PAHText">
                        <div className="PAHTPar">
                            Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit. 
                            Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. 
                            Sit vulputate et integer in. Sit vel, senectus iaculis morbi. <strong>Amet</strong> interdum imperdiet laoreet <strong>morbi</strong> tincidunt fermentum, libero. 
                            Ante enim eget. 
                        </div>
                        <div className="PAHTPar">
                            Viverra at porttitor accumsan. <span className="Underlined">Orci non here</span>
                        </div>
                    </div>
                </div>
                <div className="PAHLine"></div>
                <div className="PFounder">Founder and Main Host <img src={blueFounder} alt="blueFounder" /></div>
                <div className="PFFounders">
                    <div className="PFCard">
                        <img className="PFCardHuman" src={porter} alt="porter" />
                        <div className="PFCContent">
                            <div className="PFCImg">
                                <img src={founderSmile} alt="founderSmile" />
                            </div>
                            <div className="PFCText">
                                <div className="PFCHost">Host 1</div>
                                <div className="PFCName">
                                    <div className="PFCN">Porter</div>
                                    <div className="PFCC">Severus</div>
                                </div>
                                <div className="PFCPar">
                                    Lorem ipsum dolor sit amet con
                                    sectet piscing elit, sed do eiusmod 
                                    tempor rarylet podofcast.
                                </div>
                                <div className="PFCLine"></div>
                                <div className="PFCSocial">
                                    <div className="PFCSText">follow me:</div>
                                    <div className="PFCSImgs">
                                        <img src={tiktok} alt="tiktok" />
                                        <img src={twitter} alt="twitter" />
                                        <img src={inst} alt="inst" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="PFCard">
                        <img className="PFCardHuman" src={marques} alt="marques" />
                        <div className="PFCContent">
                            <div className="PFCImg">
                                <img src={founderStar} alt="founderStar" />
                            </div>
                            <div className="PFCText">
                                <div className="PFCHost">Host 2</div>
                                <div className="PFCName">
                                    <div className="PFCN">Marques</div>
                                    <div className="PFCC">Keith</div>
                                </div>
                                <div className="PFCPar">
                                    Lorem ipsum dolor sit amet con
                                    sectet piscing elit, sed do eiusmod 
                                    tempor rarylet podofcast.
                                </div>
                                <div className="PFCLine"></div>
                                <div className="PFCSocial">
                                    <div className="PFCSText">follow me:</div>
                                    <div className="PFCSImgs">
                                        <img src={tiktok} alt="tiktok" />
                                        <img src={twitter} alt="twitter" />
                                        <img src={inst} alt="inst" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="PSponsorContainer">
                <div className="PSponsorSub">Our Sponsor <img src={orangeSparkle} alt="orangeSparkle" /></div>
                <div className="PSponsorPar">Our current official sponsor</div>
                <div className="PSponsors">
                    <div className="PSponsorCard Rev0">
                        <div className="PSPCIcon">
                            <img className="PSPCGoogle" src={google} alt="spotify" />
                        </div>
                        <div className="PSPCLine"></div>
                        <div className="PSPCText">
                            Quis dictum cursus faucibus mattis <span>dignissim.</span> Pellentes
                            que purus in sed sodales in mauris molestie. Eleifend estcon
                            sctetur interdum eu in auctor. Gravida leo et.
                        </div>
                    </div>
                    <div className="PSponsorCard Rev1">
                        <div className="PSPCIcon">
                            <img className="PSPCSpotify" src={spotify} alt="spotify" />
                        </div>
                        <div className="PSPCLine"></div>
                        <div className="PSPCText">
                            Quis dictum cursus faucibus mattis <span>dignissim.</span> Pellentes
                            que purus in sed sodales in mauris molestie. Eleifend estcon
                            sctetur interdum eu in auctor. Gravida leo et.
                        </div>
                    </div>
                    <div className="PSponsorCard Rev2">
                        <div className="PSPCIcon">
                            <img className="PSPCYoutube" src={youtube} alt="youtube" />
                        </div>
                        <div className="PSPCLine"></div>
                        <div className="PSPCText">
                            Quis dictum cursus faucibus mattis <span>dignissim.</span> Pellentes
                            que purus in sed sodales in mauris molestie. Eleifend estcon
                            sctetur interdum eu in auctor. Gravida leo et.
                        </div>
                    </div>
                    <div className="PSponsorCard Rev3">
                        <div className="PSPCIcon">
                            <img className="PSPCGoogle" src={google} alt="google" />
                        </div>
                        <div className="PSPCLine"></div>
                        <div className="PSPCText">
                            Quis dictum cursus faucibus mattis <span>dignissim.</span> Pellentes
                            que purus in sed sodales in mauris molestie. Eleifend estcon
                            sctetur interdum eu in auctor. Gravida leo et.
                        </div>
                    </div>
                </div>
                <div className="PSPCBtnsContainer">
                    <div className="PSponsorCardBtns">
                        <div className="PLisLeft">
                            <div className="LeftBlack"><img id="left" src={blackLisBtn} alt="blackLisBtn" onClick={swipeRev} /></div>
                            <div className="LeftOrange BtnInvis"><img id="left" src={orangeLisBtn} alt="orangeLisBtn" onClick={swipeRev} /></div>
                        </div>
                        <div className="PLisRight">
                            <div className="RightBlack BtnInvis"><img id="right" src={blackLisBtn} alt="blackLisBtn" onClick={swipeRev} /></div>
                            <div className="RightOrange"><img id="right" src={orangeLisBtn} alt="orangeLisBtn" onClick={swipeRev} /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="PGetInTouchContainer">
                <img className="GITOrangeLineBig" src={orangeLineBig} alt="orangeLineBig" />
                <img className="GITStars" src={gitstars} alt="gitstars" />
                <div className="PGITSub">Get in touch<img src={bluewave} alt="bluewave" /></div>
                <div className="PGITPar">Send your message to us</div>
                <div className="PGITLine"></div>
                <div className="PGITForm">
                    <div className="PGITInputContainer">
                        <div className="PGITInputElement">
                            <div className="PGITInputText">Full name&nbsp;<span>*</span></div>
                            <input 
                                className='PGITInput PGITName' 
                                type="text" 
                                name="user_name" 
                                placeholder='Name' 
                                onChange={handleChange}
                                onClick={handleChange}
                            />
                        </div>
                        <div className="PGITInputElement">
                            <div className="PGITInputText">Email&nbsp;<span>*</span></div>
                            <input 
                                className='PGITInput PGITMail' 
                                type="text" 
                                name="user_name" 
                                placeholder='jondoe@gmail.com' 
                                onChange={handleChangeEmail}
                                onClick={handleChangeEmail}
                            />
                        </div>
                    </div>
                    <div className="PGITInputContainer">
                        <div className="PGITInputElement">
                            <div className="PGITInputText">Phone&nbsp;<span>*</span></div>
                            <input 
                                className='PGITInput PGITPhone' 
                                type="text" 
                                name="user_name" 
                                placeholder='Phone' 
                                onChange={handleChange}
                                onClick={handleChange}
                            />
                        </div>
                        <div className="PGITInputElement">
                            <div className="PGITInputText">Subject&nbsp;<span>*</span></div>
                            <input 
                                className='PGITInput PGITSubject' 
                                type="text" 
                                name="user_name" 
                                placeholder='Subject...' 
                                onChange={handleChange}
                                onClick={handleChange}
                            />
                        </div>
                    </div>
                    <div className="PGITInputElement PGITInputMessage">
                        <div className="PGITInputText">Message&nbsp;<span>*</span></div>
                        <textarea
                            className='PGITTextarea PGITMessage'
                            name="message"
                            placeholder='Your message goes gere...'
                            onChange={handleChange}
                            onClick={handleChange}
                        />
                    </div>
                    <div className="PGITAfterForm SmallScreen">
                        <div className="PGITRequired"><span>*</span>required</div>
                        <div className="PGITLink">Viverra at port accumsan.&nbsp;<span>Orci non</span></div>
                    </div>
                    <div className="PGITAfterForm">
                        <div className="PGITRequired BigScreen"><span>*</span>required</div>
                        {/* eslint-disable-next-line */}
                        <div className="PGITSendContainer" onClick={sendMessage}><a className="PGITSend">SEND MESSAGE</a></div>
                        <div className="PGITLink BigScreen">Viverra at port accumsan.&nbsp;<span>Orci non</span></div>
                    </div>
                </div>
                <div className="LineContainer"><div className="OrangeLine"><img src={orangeLine} alt="orangeLine" /></div></div>
            </div>
            <PodcastApp />
        </div>
    );
}
 
export default PodcastAbout;