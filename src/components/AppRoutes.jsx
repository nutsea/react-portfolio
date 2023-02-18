import React from "react"
import { Routes, Route } from "react-router-dom"
import Cards from "./Cards";
import Chat from "./Chat";
import Glass from "./Glass";
import GlassSpeciality from "./GlassSpeciality";
import GlassWorks from "./GlassWorks";
import GlassContacts from "./GlassContacts";
import Interior from "./Interior";
import Slider from "./Slider";
import GlassLanguage from "./GlassLanguage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element = { <Glass /> } />
            <Route path="/speciality" element = { <GlassSpeciality /> } />
            <Route path="/works" element = { <GlassWorks /> } />
            <Route path="/contacts" element = { <GlassContacts /> } />
            <Route path="/language" element = { <GlassLanguage /> } />
            <Route path="/chat" element = { <Chat /> } />
            <Route path="/cards" element = { <Cards /> } />
            <Route path="/slider" element = { <Slider /> } />
            <Route path="/interior" element = { <Interior /> } />
        </Routes>
    );
}
 
export default AppRoutes;