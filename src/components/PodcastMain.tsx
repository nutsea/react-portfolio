import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import './../styles/podcastMain.scss'
import './../styles/podcastEpisodes.scss'

import PodcastEpisodes from "./PodcastEpisodes.tsx";
import Slider from "./Slider";
import PodcastApp from "./PodcastApp.tsx";

import flash from './../img/podcast/daily/Flash.png'
import stars from './../img/podcast/daily/Stars.png'
import spotify from './../img/podcast/icons/Spotify.png'
import google from './../img/podcast/icons/GooglePodcasts.png'
import youtube from './../img/podcast/icons/Youtube.png'
import orangeLine from './../img/podcast/scribbles/OrangeLine.png'
import thinking from './../img/podcast/scribbles/Thinking.png'
import idea from './../img/podcast/scribbles/Idea.png'
import blackstar from './../img/podcast/scribbles/BlackStar.png'
import orangeLineBig from './../img/podcast/scribbles/OrangeLineBig.png'
import johnSmith from './../img/podcast/pictures/inspire/JohnSmith.png'
import blackLine from './../img/podcast/scribbles/BlackLine.png'
import orangeSparkle from './../img/podcast/scribbles/OrangeSparkle.png'
import luna from './../img/podcast/pictures/reviews/Luna.png'
import emily from './../img/podcast/pictures/reviews/Emily.png'
import mia from './../img/podcast/pictures/reviews/Mia.png'
import blackLisBtn from './../img/podcast/icons/BlackLisBtn.png'
import orangeLisBtn from './../img/podcast/icons/OrangeLisBtn.png'
import membership from './../img/podcast/scribbles/Membership.png'
import ben1 from './../img/podcast/scribbles/benefits/Ben1.png'
import ben2 from './../img/podcast/scribbles/benefits/Ben2.png'
import ben3 from './../img/podcast/scribbles/benefits/Ben3.png'
import ben4 from './../img/podcast/scribbles/benefits/Ben4.png'
import ben5 from './../img/podcast/scribbles/benefits/Ben5.png'
import ben6 from './../img/podcast/scribbles/benefits/Ben6.png'
import orangeLines from './../img/podcast/scribbles/OrangeLines.png'
import blueLineBig from './../img/podcast/scribbles/BlueLineBig.png'
import article1 from './../img/podcast/pictures/news/Article1.png'
import article2 from './../img/podcast/pictures/news/Article2.png'
import blackstarThin from './../img/podcast/scribbles/BlackStarThin.png'

const PodcastMain = () => {
    const navigate = useNavigate();

    const handleNavigate = (e) => {
        navigate(`${e.target.id}`)
    }

    useEffect(() => {
        window.scroll(0, 0)
    })

    let thisRev: number = 0
    const maxRev: number = 3

    const swipeRev = (e: any) => {
        const revs = document.getElementsByClassName('PLisRev')
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

    return (
        <div>
            <div className="PHelloContainer">
                <div className="PHelloDaily">
                    <img className="FlashImg" src={flash} alt="flash" />
                    <div className="PHelloText">
                        <div className="PHelloSubBlack">Your Daily</div>
                        <div className="PHelloSubOrange">Podcast</div>
                        <div className="PHelloPar">We cover all kinds of categories and a weekly special guest.</div>
                        <div className="IncludeClick"><a href="#PPrice" className="PHelloSubBtn">SUBSCRIBE</a></div>
                    </div>
                    <img className="StarsImg" src={stars} alt="stars" />
                </div>
                <div className="PodcastsSlider">
                    <Slider />
                </div>
                <div className="PodcastSupport">
                    <div className="PSupportText">Supported by:</div>
                    <div className="PSocialMedias">
                        <img className="Spotify" src={spotify} alt="spotify" />
                        <img className="Google" src={google} alt="google" />
                        <img className="Youtube" src={youtube} alt="youtube" />
                    </div>
                </div>
                <div className="LineContainer"><div className="OrangeLine"><img src={orangeLine} alt="orangeLine" /></div></div>
            </div>
            <div className="PInspireContainer">
                <div className="PInspireSub">Talk. Listen. Get inspired by every minute of it.</div>
                <div className="PInsImages">
                    <div className="PThinking">
                        <div className="PThImg"><img src={thinking} alt="thinking" /></div>
                        <div className="PThText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</div>
                    </div>
                    <div className="PIdea">
                        <div className="PIdeaImg"><img src={idea} alt="idea" /></div>
                        <div className="PIdeaText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</div>
                    </div>
                </div>
                <div className="PBestContainer">
                    <div className="PBestCommas">“</div>
                    <div className="PBestSub">One of the best daily podcasts that covers every topic on Spotify.</div>
                    <img className="JohnSmith" src={johnSmith} alt="johnSmith" />
                    <img className="OrangeLineBig" src={orangeLineBig} alt="orangeLineBig" />
                    <img className="BlackStar" src={blackstar} alt="blackstar" />
                </div>
                <div className="LineContainer"><div className="BlackLine"><img src={blackLine} alt="blackLine" /></div></div>
            </div>
            <div className="PListenersContainer">
                <div className="PLisSub"><div><img src={orangeSparkle} alt="orangeSparkle" />What our listeners say</div></div>
                <div className="PLisPar">Their experience throughout every platform</div>
                <div className="PLisReviews">
                    <div className="PLisRev Rev0">
                        <div className="PLisRevCommas">“</div>
                        <div className="PLisRevText">
                            Lorem ipsum dolor sit amet consectet 
                            piscing elit, sed do eiusmod tempor 
                            incidi ut labore et dolore magna aliqua. 
                        </div>
                        <div className="PLisRevAuthor"><img src={luna} alt="luna" /></div>
                    </div>
                    <div className="PLisRev Rev1">
                        <div className="PLisRevCommas">“</div>
                        <div className="PLisRevText">
                            Lorem ipsum dolor sit amet consectet 
                            piscing elit, sed do eiusmod tempor 
                            incidi ut labore et dolore magna aliqua. 
                        </div>
                        <div className="PLisRevAuthor"><img src={emily} alt="emily" /></div>
                    </div>
                    <div className="PLisRev Rev2">
                        <div className="PLisRevCommas">“</div>
                        <div className="PLisRevText">
                            Lorem ipsum dolor sit amet consectet 
                            piscing elit, sed do eiusmod tempor 
                            incidi ut labore et dolore magna aliqua. 
                        </div>
                        <div className="PLisRevAuthor"><img src={mia} alt="mia" /></div>
                    </div>
                    <div className="PLisRev Rev3">
                        <div className="PLisRevCommas">“</div>
                        <div className="PLisRevText">
                            Lorem ipsum dolor sit amet consectet 
                            piscing elit, sed do eiusmod tempor 
                            incidi ut labore et dolore magna aliqua. 
                        </div>
                        <div className="PLisRevAuthor"><img src={luna} alt="luna" /></div>
                    </div>
                </div>
                <div className="PLisRevBtns">
                    <div className="PLisLeft">
                        <div className="LeftBlack"><img id="left" src={blackLisBtn} alt="blackLisBtn" onClick={swipeRev} /></div>
                        <div className="LeftOrange BtnInvis"><img id="left" src={orangeLisBtn} alt="orangeLisBtn" onClick={swipeRev} /></div>
                    </div>
                    <div className="PLisRight">
                        <div className="RightBlack BtnInvis"><img id="right" src={blackLisBtn} alt="blackLisBtn" onClick={swipeRev} /></div>
                        <div className="RightOrange"><img id="right" src={orangeLisBtn} alt="orangeLisBtn" onClick={swipeRev} /></div>
                    </div>
                </div>
                <div className="LineContainer"><div className="BlackLine"><img src={blackLine} alt="blackLine" /></div></div>
            </div>
            <div className="PMembershipContainer">
                <div className="PMemSub"><img src={membership} alt="membership" />Membership benefits</div>
                <div className="PMemPar">Become our sponsor and get all benefits</div>
                <div className="PMemBenefits">
                    <div className="PBenefit">
                        <img src={ben1} alt="ben1" />
                        <div className="PBenSub">Topic by Request</div>
                        <div className="PBenPar">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</div>
                    </div>
                    <div className="PBenefit">
                        <img src={ben2} alt="ben2" />
                        <div className="PBenSub">Exclusive Content</div>
                        <div className="PBenPar">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</div>
                    </div>
                    <div className="PBenefit">
                        <img src={ben3} alt="ben3" />
                        <div className="PBenSub">Join the Community</div>
                        <div className="PBenPar">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</div>
                    </div>
                    <div className="PBenefit">
                        <img src={ben4} alt="ben4" />
                        <div className="PBenSub">Livestreaming Access</div>
                        <div className="PBenPar">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</div>
                    </div>
                    <div className="PBenefit">
                        <img src={ben5} alt="ben5" />
                        <div className="PBenSub">Exclusive Episodes & Merch</div>
                        <div className="PBenPar">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</div>
                    </div>
                    <div className="PBenefit">
                        <img src={ben6} alt="ben6" />
                        <div className="PBenSub">And much more!</div>
                        <div className="PBenPar">Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</div>
                    </div>
                </div>
                <div className="IncludeClick"><a href="#PPrice" className="SeePricingBtn">SEE PRICING</a></div>
                <div className="LineContainer"><div className="BlackLine"><img src={blackLine} alt="blackLine" /></div></div>
            </div>
            <div id="PRecent" className="PEpisodes">
                <div className="PEpSub">Recent Episodes</div>
                <div className="PEpPar">Available on your favorite platform</div>
                <div className="MainPodcastEpisodesContainer">
                    <img className="EpsLinesImg" src={orangeLines} alt="orangeLines" />
                    <PodcastEpisodes />
                </div>
                <button className="PEpsBtn" id="/podcast/detail" onClick={handleNavigate}>BROWSE ALL EPISODES</button>
                <div className="LineContainer"><div className="BlackLine"><img src={blackLine} alt="blackLine" /></div></div>
            </div>
            <div id="PPrice" className="PSponsor">
                <div className="PSpSub">
                    Become our sponsor
                    <img src={orangeLines} alt="orangeLines" />
                </div>
                <div className="PSpPar">Get exclusive episodes, merch and more</div>
                <div className="PPricingContainer">
                    <img className="PPLine" src={blueLineBig} alt="blueLineBig" />
                    <img className="PPStar" src={blackstar} alt="blackstar" />
                    <div className="PPrice">
                        <div className="PPriceTop">
                            <div className="PPSub">Member</div>
                            <div className="PPText">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</div>
                            <div className="PPBuy">
                                <button className="PPBuyBtn">SUBSCRIBE</button>
                                <div className="PPDollars">
                                    <div className="PPCost">$9.99</div>
                                    <div className="PPMonth">/month</div>
                                </div>
                            </div>
                        </div>
                        <div className="PPriceBottom">
                            <div className="PPInclude">What’s included:</div>
                            <ul className="PPList">
                                <li>• Exclusive Content</li>
                                <li>• 5% Discount on Merch</li>
                                <li>• Join the Community</li>
                                <li>• Livestreaming Access</li>
                            </ul>
                        </div>
                    </div>
                    <div className="PPrice PricePopular">
                    <div className="PPriceTop">
                            <div className="PPSub">
                                Family
                                <div className="PPSubPopular">MOST POPULAR</div>
                            </div>
                            <div className="PPText">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</div>
                            <div className="PPBuy">
                                <button className="PPBuyBtn">SUBSCRIBE</button>
                                <div className="PPDollars">
                                    <div className="PPCost">$14.99</div>
                                    <div className="PPMonth">/month</div>
                                </div>
                            </div>
                        </div>
                        <div className="PPriceBottom">
                            <div className="PPInclude">What’s included:</div>
                            <ul className="PPList">
                                <li className="PPLiBold">• Everything in Tier 1</li>
                                <li>• Free tickets to Events</li>
                                <li>• Limited Edition Merch</li>
                                <li>• Promote your Product</li>
                                <li>• Request Topic</li>
                            </ul>
                        </div>
                    </div>
                    <div className="PPrice">
                    <div className="PPriceTop">
                            <div className="PPSub">Official</div>
                            <div className="PPText">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</div>
                            <div className="PPBuy">
                                <button className="PPBuyBtn">SUBSCRIBE</button>
                                <div className="PPDollars">
                                    <div className="PPCost">$29.99</div>
                                    <div className="PPMonth">/month</div>
                                </div>
                            </div>
                        </div>
                        <div className="PPriceBottom">
                            <div className="PPInclude">What’s included:</div>
                            <ul className="PPList">
                                <li className="PPLiBold">• Everything in Tier 2</li>
                                <li>• Exclusive Badge on Livestreaming</li>
                                <li>• Become an Official Sponsor</li>
                                <li>• Early Access to All Episodes</li>
                                <li>• Free Stikers and Merch</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="LineContainer"><div className="BlackLine"><img src={blackLine} alt="blackLine" /></div></div>
            </div>
            <div className="PNews">
                <div className="PNewsSub">Article and News</div>
                <div className="PNewsPar">News, tips, tricks and more</div>
                <div className="PNewsContainer">
                    <img className="PNewsStar" src={blackstarThin} alt="blackstarThin" />
                    <img className="PNewsWave" src={membership} alt="membership" />
                    <div className="PArticle PArtShadow">
                        <img src={article1} alt="article1" />
                        <div className="PArtType">PODCAST</div>
                        <div className="PArtSub" id="/podcast/singleblog" onClick={handleNavigate}>Setup your own podcast</div>
                        <div className="PArtPar">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minimvel iam, quis nostrud exercitation 
                            ullamco laboris...
                        </div>
                        <div className="PArtSlash"></div>
                        <div className="PArtChar">
                            <div className="PArtThemes">
                                <div className="PArtTheme">business</div>
                                <div className="PArtTheme">startup</div>
                            </div>
                            <div className="PArtData">Sep 14, 2021</div>
                        </div>
                    </div>
                    <div className="PArticle">
                        <img src={article2} alt="article2" />
                        <div className="PArtType">TIPS & TRICKS</div>
                        <div className="PArtSub" id="/podcast/singleblog" onClick={handleNavigate}>Doodle artwork 101</div>
                        <div className="PArtPar">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minimvel iam, quis nostrud exercitation 
                            ullamco laboris...
                        </div>
                        <div className="PArtSlash"></div>
                        <div className="PArtChar">
                            <div className="PArtThemes">
                                <div className="PArtTheme">art</div>
                                <div className="PArtTheme">creative</div>
                                <div className="PArtTheme">tips and tricks</div>
                            </div>
                            <div className="PArtData">Sep 12, 2021</div>
                        </div>
                    </div>
                </div>
                <button className="BrowseAllBtn" id="/podcast/blog" onClick={handleNavigate}>BROWSE ALL</button>
                <div className="LineContainer"><div className="OrangeLine"><img src={orangeLine} alt="orangeLine" /></div></div>
            </div>
            <PodcastApp />
        </div>
    );
}
 
export default PodcastMain;