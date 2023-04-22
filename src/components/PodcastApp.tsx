import React from "react";
import './../styles/podcastApp.scss'

import available from './../img/podcast/icons/Available.png'
import availablePhone1 from './../img/podcast/pictures/phones/AvailablePhone1.png'
import availablePhone2 from './../img/podcast/pictures/phones/AvailablePhone2.png'
import availableBlack from './../img/podcast/scribbles/AvailableBlack.png'
import orangeSparkle from './../img/podcast/scribbles/OrangeSparkle.png'

const PodcastApp = () => {
    return (
        <div className="PApp">
            <div className="AvailableGroup1">
                <div className="AvGroupImgs">
                    <img className="Sparkle1" src={orangeSparkle} alt="orangeSparkle" />
                    <img className="Sparkle2" src={orangeSparkle} alt="orangeSparkle" />
                    <img className="Sparkle3" src={orangeSparkle} alt="orangeSparkle" />
                    <img className="AvailPhone1" src={availablePhone1} alt="availablePhone1" />
                </div>
            </div>
            <div className="AvailableGroup2">
                <div className="AvGroupImgs">
                    <img className="AvailBlack" src={availableBlack} alt="availableBlack" />
                    <img className="AvailPhone2" src={availablePhone2} alt="availablePhone2" />
                </div>
            </div>
            <div className="PAppBeta">BETA</div>
            <div className="PAppSub">Available now Pod of Cast App</div>
            <div className="PAppPar">We just launched our podcast app!</div>
            <div className="PDownloadBtn">DOWNLOAD NOW</div>
            <div className="PAlsoAvail">Content also available on:</div>
            <img className="PAlsoAvailImg" src={available} alt="available" />
        </div>
    );
}
 
export default PodcastApp;