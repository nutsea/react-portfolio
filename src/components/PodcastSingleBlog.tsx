import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './../styles/podcastSingleBlog.scss'

import flash from './../img/podcast/daily/Flash.png'
import stars from './../img/podcast/daily/Stars.png'
import backbtn from './../img/podcast/singleblog/BackBtn.png'
import twitter from './../img/podcast/footer/FTwitter.png'
import inst from './../img/podcast/footer/FInst.png'
import tiktok from './../img/podcast/footer/FTikTok.png'
import article from './../img/podcast/pictures/news/Article.png'
import johnSmith from './../img/podcast/pictures/inspire/JohnSmith.png'
import orangeLineBig from './../img/podcast/scribbles/OrangeLineBig.png'
import blackstar from './../img/podcast/scribbles/BlackStar.png'
import blueFounder from './../img/podcast/scribbles/BlueFounder.png'
import pic1 from './../img/podcast/singleblog/Picture1.png'
import pic2 from './../img/podcast/singleblog/Picture2.png'
import blackstarThin from './../img/podcast/scribbles/BlackStarThin.png'
import membership from './../img/podcast/scribbles/Membership.png'
import article1 from './../img/podcast/pictures/news/Article1.png'
import article2 from './../img/podcast/pictures/news/Article2.png'
import orangeLine from './../img/podcast/scribbles/OrangeLine.png'

import PodcastApp from "./PodcastApp.tsx";

const PodcastSingleBlog = () => {
    const navigate = useNavigate();

    const handleNavigate = (e) => {
        navigate(`${e.target.id}`)
    }

    useEffect(() => {
        window.scroll(0, 0)
    })

    return (
        <div>
            <div className="PSBNameContainer">
                <img className="PSBFlash" src={flash} alt="flash" />
                <img className="PSBStars" src={stars} alt="stars" />
                <div className="PSBNFirstRow">
                    <div className="PSBBackBtn" id="/podcast/blog" onClick={handleNavigate}>
                        <img id="/podcast/blog" src={backbtn} alt="backbtn" />
                        <div id="/podcast/blog">Back to articles</div>
                    </div>
                    <div className="PSBDate">Sep 12, 2021</div>
                </div>
                <div className="PSBNType">TIPS & TRICKS</div>
                <div className="PSBNSub">Doodle Artwork 101</div>
                <div className="PSBNTags">
                    <div className="PSBNTag">art</div>
                    <div className="PSBNTag">tips and tricks</div>
                    <div className="PSBNTag">creative</div>
                </div>
                <div className="PSBNSocial">
                    <img src={twitter} alt="twitter" />
                    <img src={inst} alt="inst" />
                    <img src={tiktok} alt="tiktok" />
                </div>
            </div>

            <div className="PSBContentContainer">
                <img className="PSBCArticleImg" src={article} alt="article" />
                <div className="PSBCSub">
                    Doodle for our podcast background room
                    <img src={blueFounder} alt="blueFounder" />
                </div>
                <div className="PSBCText">
                    <div className="PSBCPar">
                        <p>
                            Lorem ipsum dolor sit amet,&nbsp;<strong>consectetur adipiscing&nbsp;</strong>elit. 
                            Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. 
                            Sit vulputate et integer in.
                        </p>
                        <p>
                            Sit vel, senectus iaculis morbi.&nbsp;
                            <strong>Amet&nbsp;</strong>interdum imperdiet laoreet&nbsp;<strong>morbi&nbsp;</strong>tincidunt fermentum, libero. 
                            Ante enim eget viverra at porttitor accumsan.&nbsp;<span>Orci non here</span>
                        </p>
                    </div>
                    <div className="PSBCPar">
                        Quis dictum cursus faucibus mattis dignissim. Pellentes
                        que purus in sed sodales in mauris molestie. Eleifend est cons
                        ctetur interdum eu in auctor. Gravida leo et.
                    </div>
                </div>
                <div className="PSBCLine"></div>
                <div className="PSBBestContainer">
                    <div className="PBestCommas">“</div>
                    <div className="PBestSub">Quote example goes in here...</div>
                    <img className="JohnSmith" src={johnSmith} alt="johnSmith" />
                    <img className="OrangeLineBig" src={orangeLineBig} alt="orangeLineBig" />
                    <img className="BlackStar" src={blackstar} alt="blackstar" />
                </div>
                <div className="PSBCLists">
                    <div className="PSBCList">
                        <div className="PSBCLSub">Bullet list example:</div>
                        <div className="PSBCItem">
                            <div className="PSBCItemBullet">●</div>
                            <div className="PSBCItemText">
                                Lorem ipsum dolor sit amet,&nbsp;<strong>consectetur adipiscing&nbsp;</strong>elit. 
                                Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. 
                                Sit vulputate et integer in.
                            </div>
                        </div>
                        <div className="PSBCItem">
                            <div className="PSBCItemBullet">●</div>
                            <div className="PSBCItemText">
                                Sit vel, senectus iaculis morbi.&nbsp;
                                <strong>Amet&nbsp;</strong>interdum imperdiet laoreet&nbsp;<strong>morbi&nbsp;</strong>tincidunt fermentum, libero. 
                                Ante enim eget viverra at porttitor accumsan.&nbsp;<span>Orci non here</span>
                            </div>
                        </div>
                        <div className="PSBCItem">
                            <div className="PSBCItemBullet">●</div>
                            <div className="PSBCItemText">
                                Quis dictum cursus faucibus mattis dignissim. 
                                Pellent que&nbsp;<strong>purus in sed&nbsp;</strong>sodales in mauris molestie. 
                                Eleifend est consctetur interdum eu in auctor. Gravida leo et.
                            </div>
                        </div>
                    </div>
                    <div className="PSBCList">
                        <div className="PSBCLSub">Number list example:</div>
                        <div className="PSBCItem">
                            <div className="PSBCItemBullet">1.</div>
                            <div className="PSBCItemText">
                                Lorem ipsum dolor sit amet,&nbsp;<strong>consectetur adipiscing&nbsp;</strong>elit. 
                                Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. 
                                Sit vulputate et integer in.
                            </div>
                        </div>
                        <div className="PSBCItem">
                            <div className="PSBCItemBullet">2.</div>
                            <div className="PSBCItemText">
                                Sit vel, senectus iaculis morbi.&nbsp;
                                <strong>Amet&nbsp;</strong>interdum imperdiet laoreet&nbsp;<strong>morbi&nbsp;</strong>tincidunt fermentum, libero. 
                                Ante enim eget viverra at porttitor accumsan.&nbsp;<span>Orci non here</span>
                            </div>
                        </div>
                        <div className="PSBCItem">
                            <div className="PSBCItemBullet">3.</div>
                            <div className="PSBCItemText">
                                Quis dictum cursus faucibus mattis dignissim. 
                                Pellent que&nbsp;<strong>purus in sed&nbsp;</strong>sodales in mauris molestie. 
                                Eleifend est consctetur interdum eu in auctor. Gravida leo et.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="PSBCPictures">
                    <div className="PSBCPic">
                        <img src={pic1} alt="pic1" />
                        <div className="PSBCLabel">this is an image with a caption example</div>
                    </div>
                    <div className="PSBCPic">
                        <img src={pic2} alt="pic2" />
                        <div className="PSBCLink">download here</div>
                    </div>
                </div>
            </div>

            <div className="PSBRelatedContainer">
                <div className="PSBRSub">Related Article</div>
                <div className="PSBRPar">News, Tips, Tricks and more</div>
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
 
export default PodcastSingleBlog;