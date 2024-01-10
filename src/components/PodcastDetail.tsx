import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import './../styles/podcastDetail.scss'
import './../styles/podcastEpisodes.scss'

import perplexed from './../img/podcast/pictures/detail/PDPerplexed.png'
import janedoe from './../img/podcast/pictures/detail/JaneDoe.png'
import play from './../img/podcast/pictures/detail/PDEPlay.png'
import flash from './../img/podcast/daily/Flash.png'
import stars from './../img/podcast/daily/Stars.png'
import orangeLineBig from './../img/podcast/scribbles/OrangeLineBig.png'
import blackwave from './../img/podcast/scribbles/Membership.png'
import orangeLines from './../img/podcast/scribbles/OrangeLines.png'
import orangeLine from './../img/podcast/scribbles/OrangeLine.png'

import PodcastEpisodes from "./PodcastEpisodes.tsx";
import PodcastApp from "./PodcastApp.tsx";

const PodcastDetail = () => {
    const navigate = useNavigate()

    const handleNavigate = (e) => {
        navigate(`${e.target.id}`)
    }

    useEffect(() => {
        window.scroll(0, 0)
    })

    const handleItem = (e: any) => {
        const sub = document.querySelector('.PEpsSubNotYet')
        const wave = document.querySelector('.PDBlackWave')
        const thisItem = document.getElementById(`${e.target.id}`)
        const items = document.getElementsByClassName('PDLMItem')
        for (let i of items) {
            i.classList.remove('ActiveItem')
        }
        thisItem?.classList.add('ActiveItem')
        const episodes = document.getElementsByClassName('PEps')
        let visibleEpisodes = []
        if (e.target.innerText !== 'All') {
            for (let i of episodes) {
                i.classList.remove('EpsShadow')
                if (e.target.innerText.toLowerCase() !== i.id) {
                    i.classList.add('None')
                }
                else {
                    i.classList.remove('None')
                    visibleEpisodes.push(i.id)
                }
            }
            const eps1 = document.getElementById(`${visibleEpisodes[0]}`)
            const eps2 = document.getElementById(`${visibleEpisodes[3]}`)
            const eps3 = document.getElementById(`${visibleEpisodes[4]}`)
            eps1?.classList.add('EpsShadow')
            eps2?.classList.add('EpsShadow')
            eps3?.classList.add('EpsShadow')
            if (visibleEpisodes.length > 0) {
                sub?.classList.add('None')
                wave?.classList.remove('None')
            }
            else {
                sub?.classList.remove('None')
                wave?.classList.add('None')
            }
        }
        else {
            for (let i of episodes) {
                i.classList.remove('None')
                i.classList.remove('EpsShadow')
            }
            episodes[0].classList.add('EpsShadow')
            episodes[3].classList.add('EpsShadow')
            episodes[4].classList.add('EpsShadow')
            sub?.classList.add('None')
            wave?.classList.remove('None')
        }
    }

    return (
        <div>
            <div className="PDEpisodeContainer">
                <img className="PDEFlash" src={flash} alt="flash" />
                <img className="PDEStars" src={stars} alt="stars" />
                <img className="PDEOrangeLine" src={orangeLineBig} alt="orangeLineBig" />
                <div className="PDEContent">
                    <div className="PDEImg">
                        <img src={perplexed} alt="perplexed" />
                    </div>
                    <div className="PDEText">
                        <div className="PDEFirstRow">
                            <div className="PDEEps1">Episode 1</div>
                            <div className="PDEFeatured">FEATURED EPISODE</div>
                        </div>
                        <div className="PDESub">Are you a Perplexed Mind Person?</div>
                        <div className="PDELine"></div>
                        <div className="PDEPar">
                            Unable to grasp something clearly or to think logically 
                            and decisively about something is a sign of a lack of understanding 
                            or mental clarity.
                        </div>
                        <div className="PDEHosted">
                            <div className="PDEAuthor">
                                <div className="PDEAImg"><img src={janedoe} alt="janedoe" /></div>
                                <div className="PDEAText">Hosted by:&nbsp;</div>
                                <div className="PDEAName">Jane Doe</div>
                            </div>
                            <div className="PDEDate">Sep 22, 2021</div>
                        </div>
                        <div className="PDEBtns">
                            {/* eslint-disable-next-line */}
                            <div className="PDESubscribe" id="/podcast" onClick={handleNavigate}><a id="/podcast">SUBSCRIBE</a></div>
                            <div className="PDEListen">
                                {/* eslint-disable-next-line */}
                                <a>
                                    <img src={play} alt="play" />
                                    <div>LISTEN NOW&nbsp;<span>(46 min)</span></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="PDETags">
                    <div className="PDETText">Tags:</div>
                    <div className="PDETTag">mind-behaviour</div>
                    <div className="PDETTag">health</div>
                </div>
            </div>

            <div className="PDLatestContainer">
                <div className="PDLSub">
                    Latest Episodes
                    <img className="OrangeLines" src={orangeLines} alt="orangeLines" />
                </div>
                <div className="PDLMenu">
                    <div className="PDLMItems">
                        <div id="Item1" className="PDLMItem ActiveItem" onClick={handleItem}>All</div>
                        <div id="Item2" className="PDLMItem" onClick={handleItem}>Business</div>
                        <div id="Item3" className="PDLMItem" onClick={handleItem}>Comedy</div>
                        <div id="Item4" className="PDLMItem" onClick={handleItem}>Education</div>
                        <div id="Item5" className="PDLMItem" onClick={handleItem}>Health</div>
                        <div id="Item6" className="PDLMItem" onClick={handleItem}>News</div>
                        <div id="Item7" className="PDLMItem" onClick={handleItem}>Tech</div>
                    </div>
                    <div className="PDLMLine"></div>
                </div>
                <div className="DetailPodcastEpisodesContainer">
                    <img className="PDBlackWave" src={blackwave} alt="blackwave" />
                    <PodcastEpisodes />
                </div>
                <div className="LineContainer"><div className="OrangeLine"><img src={orangeLine} alt="orangeLine" /></div></div>
            </div>
            <PodcastApp />
        </div>
    );
}
 
export default PodcastDetail;