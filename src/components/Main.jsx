import React, { useEffect } from "react";
import './../styles/main.css'
import me from './../img/memoji.PNG'
import ework from './../img/E-work.png'
import cards from './../img/500cards.png'
import podcast from './../img/Podcast.png'
import vk from './../img/vk.svg'
import git from './../img/gitHub.svg'
import Contact from "./Contact";

const Main = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        const ruElems = document.getElementsByClassName('Ru')
        const enElems = document.getElementsByClassName('En')
        const ruLang = document.querySelector('.LangRu')
        const enLang = document.querySelector('.LangEn')
        const lang = localStorage.getItem('Lang')
        const language = document.querySelector('.Lang')
        const eng = document.querySelector('.Eng')
        const rus = document.querySelector('.Rus')
        console.log(lang)
        if (lang === 'russian') {
            for (let i of ruElems){
                i.classList.remove('Invis')
            }
            for (let i of enElems) {
                i.classList.add('Invis')
            }
            for (let i of enElems) {
                i.classList.add('Invis')
            }
            enLang.classList.remove('ThisLang')
            ruLang.classList.add('ThisLang')
            language.textContent = 'Русский'
            eng.textContent = 'Английский'
            rus.textContent = 'Русский'
        }
        else {
            for (let i of ruElems){
                i.classList.add('Invis')
            }
            for (let i of enElems) {
                i.classList.remove('Invis')
            }
            ruLang.classList.remove('ThisLang')
            enLang.classList.add('ThisLang')
            language.textContent = 'English'
            eng.textContent = 'English'
            rus.textContent = 'Russian'
        }
        let options = { threshold: [0.0] }
        let observer = new IntersectionObserver(onEntry, options)
        let elements = document.querySelectorAll('.Animation')
        for (let i of elements) {
            observer.observe(i)
        }
    })

    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('AnimationShow')
            }
            else change.target.classList.remove('AnimationShow')
        })
    }

    const changeLang = (e) => {
        const ruElems = document.getElementsByClassName('Ru')
        const enElems = document.getElementsByClassName('En')
        const ruLang = document.querySelector('.LangRu')
        const enLang = document.querySelector('.LangEn')
        const language = document.querySelector('.Lang')
        const eng = document.querySelector('.Eng')
        const rus = document.querySelector('.Rus')
        switch (e.target.id) {
            case 'en':
                language.textContent = 'English'
                eng.textContent = 'English'
                rus.textContent = 'Russian'
                for (let i of ruElems) {
                    i.classList.add('Invis')
                }
                for (let i of enElems) {
                    i.classList.remove('Invis')
                }
                ruLang.classList.remove('ThisLang')
                enLang.classList.add('ThisLang')
                localStorage.setItem('Lang', 'english')
                break;
            case 'ru':
                language.textContent = 'Русский'
                eng.textContent = 'Английский'
                rus.textContent = 'Русский'
                for (let i of ruElems) {
                    i.classList.remove('Invis')
                }
                for (let i of enElems) {
                    i.classList.add('Invis')
                }
                enLang.classList.remove('ThisLang')
                ruLang.classList.add('ThisLang')
                localStorage.setItem('Lang', 'russian')
                break
            default:
                break;
        }


        const langBtn = document.querySelector('.Lang-btn')
        if (langBtn.classList.contains('Down')) {
            langBtn.classList.remove('Down')
            langBtn.classList.add('Up')
        }
        else {
            langBtn.classList.remove('Up')
            langBtn.classList.add('Down')
        }
        window.addEventListener('click', e => {
            const target = e.target
            if (!target.closest('.LanguageSetter')) {
                if (langBtn.classList.contains('Up')) {
                    langBtn.classList.remove('Up')
                    langBtn.classList.add('Down')
                    for (let i of vars) {
                        i.classList.remove('VarUp')
                        i.classList.add('VarDown')
                    }
                }
            }
        })
        const vars = document.getElementsByClassName('Var')
        for (let i of vars) {
            if (langBtn.classList.contains('Up')) {
                i.classList.remove('VarDown')
                i.classList.add('VarUp')
            }
            else {
                i.classList.remove('VarUp')
                i.classList.add('VarDown')
            }
        }
    } 

    return (
        <div>
            <header className="Header">
                <div className="HeaderRow">
                    <div className="Logo">
                        <img className="LogoImg" src={me} alt="me" />
                        <div className="Name">
                            <div className="LogoName"><a href="#home">Anastasia Batyrova</a></div>
                            <div className="LogoWork">Frontend Developer</div>
                        </div>
                    </div>
                    <div className="HeaderGit">
                        <a href="https://github.com/nutsea" rel="noreferrer" target="blank">@nutsea</a>
                    </div>
                </div>
                <div className="Language">
                    <button className="LangEn ThisLang" id="en" onClick={changeLang}>EN</button>
                    <span className="LangSpan">&nbsp;/&nbsp;</span>
                    <button className="LangRu" id="ru" onClick={changeLang}>RU</button>
                </div>
            </header>
            <div className="MainContainer">
                <div className="MainContent">
                    <div id="home" className="Home Animation">
                        <div className="HomeText En">
                            This is my portfolio. It has been made to 
                            show my skills, education and what I can 
                            do on the web page, or just to inspire you. 
                            So I hope you will enjoy the exploration!
                        </div>
                        <a className="ReadMore En" href="#speciality">EXPLORE</a>
                        <div className="HomeText Ru Invis">
                            Это моё портфолио. Оно было создано для того, 
                            чтобы показать мои навыки, образование и то, что 
                            я могу создать на веб-странице, или просто 
                            чтобы вдохновить вас. Наслаждайтесь его изучением!
                        </div>
                        <a className="ReadMore Ru Invis" href="#speciality">ДАЛЕЕ</a>
                    </div>
                    <div id="speciality" className="ContentContainer">
                        <div className="ContentName En">SPECIALITY</div>
                        <div className="ContentName Ru">СПЕЦИАЛЬНОСТЬ</div>
                        <div className="ContentDesc">
                            <div className="ContentText En Animation">
                                I am a student of Kazan Federal University. My 
                                speciality is Applied Mathematics and Informatics. 
                                I'm very interested in programming so I'm not limited 
                                by the curriculum and get progress in it by myself too.
                            </div>
                            <div className="ContentText En Animation">
                                I started my way from learning C++ in the institute. 
                                Some time later I mastered these technologies of 
                                web development: HTML, CSS, SCSS, JS, ES6, React, 
                                Node JS, Socket.io and some JS libraries. Also I learnt how git 
                                and npm work.
                            </div>
                            <div className="ContentText En Animation">
                                After a few months of practice I understood that I 
                                want to work in a company and use my skills there. 
                                So I made this portfolio to present myself.
                            </div>
                            <div className="ContentText Ru Invis Animation">
                                Я учусь в Казанском Федеральном Университете, моя 
                                специальность - прикладная математика и информатика. 
                                Я очень заинтересована в программировании и помимо 
                                учебной программы я развиваюсь самостоятельно.
                            </div>
                            <div className="ContentText Ru Invis Animation">
                                Я начала свой путь с изучения C++ в институте. Спустя 
                                некоторое время я освоила технологии веб-разработки: 
                                HTML, CSS, SCSS, JS, ES6, React, Node JS, Socket.io и некоторые 
                                библиотеки JS. Также я узнала, как работает git и npm.
                            </div>
                            <div className="ContentText Ru Invis Animation">
                                Спустя несколько месяцев практики я поняла, что хочу 
                                работать в компании и применять свои навыки. Поэтому я 
                                создала это портфолио, чтобы рассказать о себе.
                            </div>
                        </div>
                    </div>
                    <div id="works" className="ContentContainer">
                        <div className="ContentName En">WORKS</div>
                        <div className="ContentName Ru Invis">РАБОТЫ</div>
                        <div className="ContentWorks">
                            <div className="Work Animation">
                                <div className="ImgLinkContainer"><a href="/e-learning" rel="noreferrer" target="blank" className="ImgLink"><img src={ework} alt="ework" /></a></div>
                                <div className="WorkName"><a href="/e-learning" rel="noreferrer" target="blank">E-learning Platform</a></div>
                                <div className="WorkTech">
                                    <div>React</div>
                                    <div>JavaScript</div>
                                    <div>CSS</div>
                                    <div>Chart.js</div>
                                </div>
                                <div className="WorkDesc En">A platform for learning english with games and statistics of progress. Design template was taken from Figma.</div>
                                <div className="WorkDesc Ru Invis">Платформа для изучения английского языка с играми и статистикой прогресса. Дизайн-макет был взят из Figma.</div>
                            </div>
                            {/* <div className="Work Animation">
                                <img src={cards} alt="cards" />
                                <div className="WorkName">500 cards</div>
                                <div className="WorkTech">
                                    <div>React</div>
                                    <div>JavaScript</div>
                                    <div>CSS</div>
                                    <div>Node.js</div>
                                    <div>Socket.io</div>
                                </div>
                                <div className="WorkDesc En">Online game like board game "500 angry cards". Except frontend part I made a server part using Socket.io to connect clients.</div>
                                <div className="WorkDesc Ru Invis">Онлайн игра наподобие настольной игры "500 злобных карт". Помимо фронтенд-части я реализовала серверную часть для связи клиентов с помощью Socket.io.</div>
                            </div> */}
                            <div className="Work Animation">
                                <div className="ImgLinkContainer"><a href="/podcast" rel="noreferrer" target="blank" className="ImgLink"><img src={podcast} alt="podcast" /></a></div>
                                <div className="WorkName"><a href="/podcast" rel="noreferrer" target="blank">Pod of Cast</a></div>
                                <div className="WorkTech">
                                    <div>React</div>
                                    <div>TypeScript</div>
                                    <div>SCSS</div>
                                    <div>Swiper.js</div>
                                </div>
                                <div className="WorkDesc En">Online Podcast. Design template was taken from Figma</div>
                                <div className="WorkDesc Ru Invis">Онлайн-подкаст. Дизайн-макет был взят из Figma.</div>
                            </div>
                        </div>
                    </div>
                    <div id="contacts" className="ContentContainer">
                        <div className="ContentName En">CONTACTS</div>
                        <div className="ContentName Ru Invis">КОНТАКТЫ</div>
                        <div className="EmailForm Animation">
                            <Contact />
                        </div>
                        <div className="Message-sent SentAlert Good-sent Hide">
                            <span className="En">Message was sent</span>
                            <span className="Ru Invis">Отправлено</span>
                            <div className="CloseAlert"></div>
                        </div>
                        <div className="Message-sent SentAlert Error Error-sent Hide">
                            <span className="En">No internet connection</span>
                            <span className="Ru Invis">Нет соединения</span>
                            <div className="CloseAlert Error"></div>
                        </div>
                    </div>
                    <div id="language" className="ContentContainer LanguageContainer">
                        <div className="ContentName En">LANGUAGE</div>
                        <div className="ContentName Ru Invis">ЯЗЫК</div>
                        <div className="LangSetterContainer Animation">
                            <div className="LanguageSetter" onClick={changeLang}>
                                <div className="Lang">English</div>
                                <div className="Lang-btn Down"></div>
                            </div>
                            <div className="LangList">
                                    <div className="LanguageSetter Var VarDown Eng" id="en" onClick={changeLang}>English</div>
                                    <div className="LanguageSetter Var VarDown Rus" id="ru" onClick={changeLang}>Russian</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="Footer">
                <div className="FooterRow Animation">
                    <div className="FooterLinks">
                        <div className="FooterAdresses">
                            <div className="City En">Kazan, Russia</div>
                            <div className="City Ru Invis">Казань, Россия</div>
                            <div className="Phone"><a href="tel:+79172682101">+7 (917) 268 21 01</a></div>
                            <div className="Email"><a href="mailto:batyrova.n@icloud.com">batyrova.n@icloud.com</a></div>
                        </div>
                        <div className="SocialMedia">
                            <ul>
                                <li className="SocialItem Vk"><a href="https://vk.com/anastasiabatyrova" rel="noreferrer" target="blank"><img src={vk} alt="Link" /></a></li>
                                <li className="SocialItem"><a href="https://github.com/nutsea" rel="noreferrer" target="blank"><img src={git} alt="Link" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="FooterCopyright">© 2023 nutsea.ru</div>
                </div>
            </footer>
        </div>
    );
}
 
export default Main;