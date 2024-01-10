import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate()

    const handleNavigate = (e) => {
        navigate(`${e.target.id}`)
    }
    return (
        <div>
            <div className="ErrorContainer">
                <div className="ErrorSub">Страницы не существует</div>
                <div className="ErrorNavigate" id="/" onClick={handleNavigate}>На главную</div>
            </div>
        </div>
    );
}
 
export default Error;