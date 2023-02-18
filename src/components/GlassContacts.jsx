import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './../styles/glass.css'
import vk from './../img/glass/vk.svg'
import git from './../img/glass/gitHub.svg'
import Contact from "./Contact";

const Glass = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const ruElems = document.getElementsByClassName('Ru')
        const enElems = document.getElementsByClassName('En')
        const lang = localStorage.getItem('glassLang')
        console.log(lang)
        if (lang === 'russian') {
            for (let i of ruElems){
                i.classList.remove('Invis')
            }
            for (let i of enElems) {
                i.classList.add('Invis')
            }
        }
        else {
            for (let i of ruElems){
                i.classList.add('Invis')
            }
            for (let i of enElems) {
                i.classList.remove('Invis')
            }
        }
        const showNew = document.getElementsByClassName('New')
        setTimeout(() => {
            for (let i of showNew) {
                i.classList.add('ShowNew')
            }
        }, 1)
    })

    const handleNavigate = (e) => {
        const showNew = document.getElementsByClassName('New')
        for (let i of showNew) {
            i.classList.add('Close')
        }
        setTimeout(() => {
            navigate(`${e.target.id}`)
        }, 300)
    }

    return (
        <div className="Glass-global">
            <div className="Glass-container">
                <div className="Glass-plast-container">
                    <div className="Glass-plast New">
                        <div className="Glass-content">
                                <div className="Glass-header">
                                    <div className="Glass-logo"><button id="/" onClick={handleNavigate}>nutsea</button></div>
                                    <div className="Glass-nav">
                                        <ul className="En">
                                            <li><button id="/" onClick={handleNavigate}>HOME</button></li>
                                            <span className="Glass-slash"></span>
                                            <li><button id="/speciality" onClick={handleNavigate}>SPECIALITY</button></li>
                                            <span className="Glass-slash"></span>
                                            <li><button id="/works" onClick={handleNavigate}>WORKS</button></li>
                                            <span className="Glass-slash"></span>
                                            <li className="Link-line"><button id="/contacts">CONTACTS</button></li>
                                            <span className="Glass-slash"></span>
                                            <li><button id="/language" onClick={handleNavigate}>LANGUAGE</button></li>
                                        </ul>
                                        <ul className="Ru Invis">
                                            <li><button id="/" onClick={handleNavigate}>ГЛАВНАЯ</button></li>
                                            <span className="Glass-slash"></span>
                                            <li><button id="/speciality" onClick={handleNavigate}>СПЕЦИАЛЬНОСТЬ</button></li>
                                            <span className="Glass-slash"></span>
                                            <li><button id="/works" onClick={handleNavigate}>ПРОЕКТЫ</button></li>
                                            <span className="Glass-slash"></span>
                                            <li className="Link-line"><button id="/contacts">КОНТАКТЫ</button></li>
                                            <span className="Glass-slash"></span>
                                            <li><button id="/language" onClick={handleNavigate}>ЯЗЫК</button></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="Glass-body Centered">
                                    <div className="Email">
                                        <p className="Contact-subtitle En">Write me</p>
                                        <p className="Contact-subtitle Ru Invis">Напишите мне</p>
                                        <Contact />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="Footer">
                    <div className="Footer-plast">
                        <div className="Footer-links">
                            <div className="Adresses">
                                <div className="En">Kazan, Russia</div>
                                <div className="Ru Invis">Казань, Россия</div>
                                <div><a href="tel:+79172682101">+7 917 268 21 01</a></div>
                                <div><a href="mailto:batyrova.n@icloud.com">batyrova.n@icloud.com</a></div>
                            </div>
                            <div className="Social-media">
                                <ul>
                                    <li className="Social-item Vk"><a href="https://vk.com/anastasiabatyrova" rel="noreferrer" target="blank"><img src={vk} alt="Link" /></a></li>
                                    <li className="Social-item"><a href="https://github.com/nutsea" rel="noreferrer" target="blank"><img src={git} alt="Link" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Copyright">© 2023 nutsea.ru</div>
                    </div>
                </div>
                <div className="Message-sent Good-sent Hide">
                    <span className="En">Message sent</span>
                    <span className="Ru Invis">Отправлено</span>
                    <div className="CloseAlert"></div>
                </div>
                <div className="Message-sent Error Error-sent Hide">
                    <span className="En">No internet connection</span>
                    <span className="Ru Invis">Нет соединения</span>
                    <div className="CloseAlert Error"></div>
                </div>
            </div>
        </div>
    );
}
 
export default Glass;