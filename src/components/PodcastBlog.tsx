import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './../styles/podcastBlog.scss'

import loop from './../img/podcast/blog/Loop.png'
import article1 from './../img/podcast/pictures/news/Article1.png'
import article2 from './../img/podcast/pictures/news/Article2.png'
import article3 from './../img/podcast/pictures/news/Article3.png'
import article4 from './../img/podcast/pictures/news/Article4.png'
import orangeLine from './../img/podcast/scribbles/OrangeLine.png'
import flash from './../img/podcast/daily/Flash.png'
import stars from './../img/podcast/daily/Stars.png'
import orangeLines from './../img/podcast/scribbles/OrangeLines.png'

import PodcastApp from "./PodcastApp.tsx";

const PodcastBlog = () => {
    const navigate = useNavigate();

    const handleNavigate = (e) => {
        navigate(`${e.target.id}`)
    }

    useEffect(() => {
        window.scroll(0, 0)
    })

    const handleItem = (e: any) => {
        const sub = document.querySelector('.PBNewsSubNotYet')
        const thisItem = document.getElementById(`${e.target.id}`)
        const items = document.getElementsByClassName('PDPMItem')
        for (let i of items) {
            i.classList.remove('ActiveItem')
        }
        thisItem?.classList.add('ActiveItem')
        const posts = document.getElementsByClassName('PBArticle')
        let visiblePosts = []
        for (let i of posts) {
            i.classList.remove('PBArtShadow')
            if (!i.classList.contains(`${e.target.id}`)) {
                i.classList.add('None')
            }
            else {
                i.classList.remove('None')
                visiblePosts.push(i.id)
            }
        }
        const post1 = document.getElementById(`${visiblePosts[0]}`)
        post1?.classList.add('PBArtShadow')
        if (visiblePosts.length > 0) {
            sub?.classList.add('None')
        }
        else {
            sub?.classList.remove('None')
        }
    }

    return (
        <div>
            <div className="PBArticleContainer">
                <img className="PBAFlash" src={flash} alt="flash" />
                <img className="PBAStars" src={stars} alt="stars" />
                <div className="PBASub">Article and&nbsp;<span>News</span></div>
                <div className="PBAPar">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.
                </div>
                <div className="PBASearchContainer">
                    <div className="PBASearch">
                        <img src={loop} alt="loop" />
                        <input 
                            className='PBAInput' 
                            type="text" 
                            name="search" 
                            placeholder='Search...' 
                        />
                    </div>
                </div>
            </div>
            <div className="PBPostsContainer">
                <div className="PBPSub">
                    Latest Posts
                    <img className="OrangeLines" src={orangeLines} alt="orangeLines" />
                </div>
                <div className="PDPMenu">
                    <div className="PDPMItems">
                        <div id="All" className="PDPMItem ActiveItem" onClick={handleItem}>All</div>
                        <div id="Business" className="PDPMItem" onClick={handleItem}>Business</div>
                        <div id="News" className="PDPMItem" onClick={handleItem}>News</div>
                        <div id="TipsTricks" className="PDPMItem" onClick={handleItem}>Tips & Tricks</div>
                        <div id="Podcast" className="PDPMItem" onClick={handleItem}>Podcast</div>
                        <div id="Productivity" className="PDPMItem" onClick={handleItem}>Productivity</div>
                    </div>
                    <div className="PDPMLine"></div>
                </div>
                <div className="PBNewsContainer">
                    <div className="PBNewsSubNotYet None">There are no posts in this category yet</div>
                    <div id="PBA1" className="PBArticle PBArtShadow Business Productivity All">
                        <img src={article1} alt="article1" />
                        <div className="PBArtType">PODCAST</div>
                        <div className="PBArtSub" id="/podcast/singleblog" onClick={handleNavigate}>Setup your own podcast</div>
                        <div className="PBArtPar">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minimvel iam, quis nostrud exercitation 
                            ullamco laboris...
                        </div>
                        <div className="PBArtSlash"></div>
                        <div className="PBArtChar">
                            <div className="PBArtThemes">
                                <div className="PBArtTheme">business</div>
                                <div className="PBArtTheme">startup</div>
                            </div>
                            <div className="PBArtData">Sep 14, 2021</div>
                        </div>
                    </div>
                    <div id="PBA2" className="PBArticle TipsTricks All">
                        <img src={article2} alt="article2" />
                        <div className="PBArtType">TIPS & TRICKS</div>
                        <div className="PBArtSub" id="/podcast/singleblog" onClick={handleNavigate}>Doodle artwork 101</div>
                        <div className="PBArtPar">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minimvel iam, quis nostrud exercitation 
                            ullamco laboris...
                        </div>
                        <div className="PBArtSlash"></div>
                        <div className="PBArtChar">
                            <div className="PBArtThemes">
                                <div className="PBArtTheme">art</div>
                                <div className="PBArtTheme">creative</div>
                                <div className="PBArtTheme">tips and tricks</div>
                            </div>
                            <div className="PBArtData">Sep 12, 2021</div>
                        </div>
                    </div>
                    <div id="PBA3" className="PBArticle News All">
                        <img src={article3} alt="article3" />
                        <div className="PBArtType">NEWS</div>
                        <div className="PBArtSub" id="/podcast/singleblog" onClick={handleNavigate}>Mother Nature Taking Over</div>
                        <div className="PBArtPar">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minimvel iam, quis nostrud exercitation 
                            ullamco laboris...
                        </div>
                        <div className="PBArtSlash"></div>
                        <div className="PBArtChar">
                            <div className="PBArtThemes">
                                <div className="PBArtTheme">news</div>
                                <div className="PBArtTheme">nature</div>
                            </div>
                            <div className="PBArtData">Sep 10, 2021</div>
                        </div>
                    </div>
                    <div id="PBA4" className="PBArticle Productivity All">
                        <img src={article4} alt="article4" />
                        <div className="PBArtType">PRODUCTIVITY</div>
                        <div className="PBArtSub" id="/podcast/singleblog" onClick={handleNavigate}>How to Be Productive</div>
                        <div className="PBArtPar">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minimvel iam, quis nostrud exercitation 
                            ullamco laboris...
                        </div>
                        <div className="PBArtSlash"></div>
                        <div className="PBArtChar">
                            <div className="PBArtThemes">
                                <div className="PBArtTheme">productivity</div>
                                <div className="PBArtTheme">mindset</div>
                            </div>
                            <div className="PBArtData">Sep 8, 2021</div>
                        </div>
                    </div>
                </div>
                <div className="LineContainer"><div className="OrangeLine"><img src={orangeLine} alt="orangeLine" /></div></div>
            </div>
            <PodcastApp />
        </div>
    );
}
 
export default PodcastBlog;