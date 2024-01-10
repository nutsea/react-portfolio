import React from "react"
import { Routes, Route } from "react-router-dom"
import ELearning from "./ELearning";
import ETextbook from "./ETextbook";
import EStatistics from "./EStatistics";
import ESprint from "./ESprint";
import EAudio from "./EAudio";
import EAbout from "./EAbout";
import Main from "./Main";
import Podcast from "./Podcast.tsx";
import Error from "./Error";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element = { <Main /> } />
            <Route path="/e-learning" element = { <ELearning /> } />
            <Route path="/e-textbook" element = { <ETextbook /> } />
            <Route path="/e-statistics" element = { <EStatistics /> } />
            <Route path="/e-sprint" element = { <ESprint /> } />
            <Route path="/e-audio" element = { <EAudio /> } />
            <Route path="/e-about" element = { <EAbout /> } />
            <Route path="/podcast/*" element = { <Podcast /> } />
            <Route path="*" element = { <Error /> } />
        </Routes>
    );
}
 
export default AppRoutes;