import React from "react";
import { useNavigate } from "react-router-dom";


import hosted from './../img/podcast/pictures/episodes/Hosted.png'
import eps1 from './../img/podcast/pictures/episodes/Eps1.png'
import eps2 from './../img/podcast/pictures/episodes/Eps2.png'
import eps3 from './../img/podcast/pictures/episodes/Eps3.png'
import eps4 from './../img/podcast/pictures/episodes/Eps4.png'
import eps5 from './../img/podcast/pictures/episodes/Eps5.png'
import eps6 from './../img/podcast/pictures/episodes/Eps6.png'

const PodcastEpisodes = () => {
    const navigate = useNavigate();

    const handleNavigate = (e) => {
        navigate(`${e.target.id}`)
    }

    return (
        <div className="PEpsContainer">
            <div className="PEpsSubNotYet None">There are no episodes in this category yet</div>
            <div className="PEps EpsShadow" id="health">
                <div className="EpsContent">
                    <div className="EpsImage"><img src={eps6} alt="eps6" /></div>
                    <div className="EpsText">
                        <div className="EpsNum">Eps. 6</div>
                        <div className="EpsSub" id="/podcast/detail" onClick={handleNavigate}>Pandemic Becoming Endemic</div>
                        <div className="EpsSlash"></div>
                        <div className="EpsPar">A Nature survey shows many scientists expect the virus that causes COVID-19 to become...</div>
                    </div>
                </div>
                <div className="EpsTags">
                    <div className="EpsThemes">
                        <div className="EpsTheme">covid-19</div>
                        <div className="EpsTheme">health</div>
                    </div>
                    <div className="EpsHost">
                        <div className="EpsHostText">Hosted by:</div>
                        <div className="EpsHostImg"><img src={hosted} alt="hosted" /></div>
                    </div>
                </div>
            </div>
            <div className="PEps" id="tech">
                <div className="EpsContent">
                    <div className="EpsImage"><img src={eps5} alt="eps5" /></div>
                    <div className="EpsText">
                        <div className="EpsNum">Eps. 5</div>
                        <div className="EpsSub" id="/podcast/detail" onClick={handleNavigate}>Tesla Autopilot Controversy</div>
                        <div className="EpsSlash"></div>
                        <div className="EpsPar">Tesla's vehicles boast 'Full-Self-Driving' (FSD), but current regulations do not allow for fully...</div>
                    </div>
                </div>
                <div className="EpsTags">
                    <div className="EpsThemes">
                        <div className="EpsTheme">automation</div>
                        <div className="EpsTheme">tech</div>
                    </div>
                    <div className="EpsHost">
                        <div className="EpsHostText">Hosted by:</div>
                        <div className="EpsHostImg"><img src={hosted} alt="hosted" /></div>
                    </div>
                </div>
            </div>
            <div className="PEps" id="news">
                <div className="EpsContent">
                    <div className="EpsImage"><img src={eps4} alt="eps4" /></div>
                    <div className="EpsText">
                        <div className="EpsNum">Eps. 4</div>
                        <div className="EpsSub" id="/podcast/detail" onClick={handleNavigate}>Women's Rights? Is it alright?</div>
                        <div className="EpsSlash"></div>
                        <div className="EpsPar">A look back at history shows that women have made great strides in the fight for equality...</div>
                    </div>
                </div>
                <div className="EpsTags">
                    <div className="EpsThemes">
                        <div className="EpsTheme">women's rights</div>
                    </div>
                    <div className="EpsHost">
                        <div className="EpsHostText">Hosted by:</div>
                        <div className="EpsHostImg"><img src={hosted} alt="hosted" /></div>
                    </div>
                </div>
            </div>
            <div className="PEps EpsShadow" id="health">
                <div className="EpsContent">
                    <div className="EpsImage"><img src={eps3} alt="eps3" /></div>
                    <div className="EpsText">
                        <div className="EpsNum">Eps. 3</div>
                        <div className="EpsSub" id="/podcast/detail" onClick={handleNavigate}>How to Deal with Self–Confidence</div>
                        <div className="EpsSlash"></div>
                        <div className="EpsPar">We have a therapist expert as our guest, Krista Gordon is will share her experience...</div>
                    </div>
                </div>
                <div className="EpsTags">
                    <div className="EpsThemes">
                        <div className="EpsTheme">self-esteem</div>
                        <div className="EpsTheme">health</div>
                    </div>
                    <div className="EpsHost">
                        <div className="EpsHostText">Hosted by:</div>
                        <div className="EpsHostImg"><img src={hosted} alt="hosted" /></div>
                    </div>
                </div>
            </div>
            <div className="PEps EpsShadow" id="business">
                <div className="EpsContent">
                    <div className="EpsImage"><img src={eps2} alt="eps2" /></div>
                    <div className="EpsText">
                        <div className="EpsNum">Eps. 2</div>
                        <div className="EpsSub" id="/podcast/detail" onClick={handleNavigate}>Type of Social Classes of People</div>
                        <div className="EpsSlash"></div>
                        <div className="EpsPar">Social class refers to a group of people with similar levels of wealth, influence, and...</div>
                    </div>
                </div>
                <div className="EpsTags">
                    <div className="EpsThemes">
                        <div className="EpsTheme">social class</div>
                        <div className="EpsTheme">wealth</div>
                    </div>
                    <div className="EpsHost">
                        <div className="EpsHostText">Hosted by:</div>
                        <div className="EpsHostImg"><img src={hosted} alt="hosted" /></div>
                    </div>
                </div>
            </div>
            <div className="PEps" id="health">
                <div className="EpsContent">
                    <div className="EpsImage"><img src={eps1} alt="eps1" /></div>
                    <div className="EpsText">
                        <div className="EpsNum">Eps. 1</div>
                        <div className="EpsSub" id="/podcast/detail" onClick={handleNavigate}>Are you a Perplexed Mind Person?</div>
                        <div className="EpsSlash"></div>
                        <div className="EpsPar">Unable to grasp something clearly or to think logically and decisively about something...</div>
                    </div>
                </div>
                <div className="EpsTags">
                    <div className="EpsThemes">
                        <div className="EpsTheme">mind-behaviour</div>
                        <div className="EpsTheme">health</div>
                    </div>
                    <div className="EpsHost">
                        <div className="EpsHostText">Hosted by:</div>
                        <div className="EpsHostImg"><img src={hosted} alt="hosted" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PodcastEpisodes;