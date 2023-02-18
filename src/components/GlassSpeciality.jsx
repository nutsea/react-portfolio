import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './../styles/glass.css'
import vk from './../img/glass/vk.svg'
import git from './../img/glass/gitHub.svg'

const GlassSpeciality = () => {
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
                                            <li className="Link-line"><button id="/speciality">SPECIALITY</button></li>
                                            <span className="Glass-slash"></span>
                                            <li><button id="/works" onClick={handleNavigate}>WORKS</button></li>
                                            <span className="Glass-slash"></span>
                                            <li><button id="/contacts" onClick={handleNavigate}>CONTACTS</button></li>
                                            <span className="Glass-slash"></span>
                                            <li><button id="/language" onClick={handleNavigate}>LANGUAGE</button></li>
                                        </ul>
                                        <ul className="Ru Invis">
                                            <li><button id="/" onClick={handleNavigate}>ГЛАВНАЯ</button></li>
                                            <span className="Glass-slash"></span>
                                            <li className="Link-line"><button id="/speciality">СПЕЦИАЛЬНОСТЬ</button></li>
                                            <span className="Glass-slash"></span>
                                            <li><button id="/works" onClick={handleNavigate}>ПРОЕКТЫ</button></li>
                                            <span className="Glass-slash"></span>
                                            <li><button id="/contacts" onClick={handleNavigate}>КОНТАКТЫ</button></li>
                                            <span className="Glass-slash"></span>
                                            <li><button id="/language" onClick={handleNavigate}>ЯЗЫК</button></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="Glass-body Center">
                                    <div className="Centered">
                                    <div className="Glass-special-text En">
                                        I am a student of Kazan Federal University. My 
                                        speciality is Applied Mathematics and Informatics. 
                                        I'm very interested in programming so I'm not limited 
                                        by the curriculum and get progress in it by myself too.
                                    </div>
                                    <div className="Glass-special-text En">
                                        I started my way from learning C++ in the institute. 
                                        Some time later I mastered these technologies of 
                                        web development: HTML, CSS, SCSS, JS, ES6, React, 
                                        Node JS and some JS libraries. Also I learnt how git 
                                        and npm work.
                                    </div>
                                    <div className="Glass-special-text En">
                                        After a few months of practice I understood that I 
                                        want to work in a company and use my skills there. 
                                        So I made this portfolio to present myself.
                                    </div>
                                    <button id="/works" className="Glass-read-more En" onClick={handleNavigate}>MY WORKS</button>
                                    <div className="Glass-special-text Ru Invis">
                                        Я учусь в Казанском Федеральном Университете, моя 
                                        специальность - прикладная математика и информатика. 
                                        Я очень заинтересована в программировании и помимо 
                                        учебной программы я развиваюсь самостоятельно.
                                    </div>
                                    <div className="Glass-special-text Ru Invis">
                                        Я начала свой путь с изучения C++ в институте. Спустя 
                                        некоторое время я освоила технологии веб-разработки: 
                                        HTML, CSS, SCSS, JS, ES6, React, Node JS и некоторые 
                                        библиотеки JS. Также я узнала, как работает git и npm.
                                    </div>
                                    <div className="Glass-special-text Ru Invis">
                                        Спустя несколько месяцев практики я поняла, что хочу 
                                        работать в компании и применять свои навыки. Поэтому я 
                                        создала это портфолио, чтобы рассказать о себе.
                                    </div>
                                    <button id="/works" className="Glass-read-more Ru Invis" onClick={handleNavigate}>МОИ ПРОЕКТЫ</button>
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
            </div>
        </div>
    );
}
 
export default GlassSpeciality;