import React, { useEffect } from "react";
import './../styles/main.css'

import me from './../img/memoji.PNG'
import ework from './../img/E-work.png'
import podcast from './../img/Podcast.png'
import pudra from './../img/Pudra.png'
import inno from './../img/Inno.png'
import calc from './../img/Calc.png'
import vk from './../img/vk.svg'
import git from './../img/gitHub.svg'
import Contact from "./Contact";
import comp from './../img/comp3d.png'

const Main = () => {
    useEffect(() => {
        const ruElems = document.getElementsByClassName('Ru')
        const enElems = document.getElementsByClassName('En')
        const ruLang = document.querySelector('.LangRu')
        const enLang = document.querySelector('.LangEn')
        const lang = localStorage.getItem('Lang')
        const language = document.querySelector('.Lang')
        const eng = document.querySelector('.Eng')
        const rus = document.querySelector('.Rus')
        console.log(lang)
        if (lang === 'russian' || lang !== 'english') {
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
    })

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

    const scroll = (e) => {
        let scroller = document.getElementById(`scrollTo${e.target.id}`)
        e.preventDefault();
        scroller && scroller.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div>
            <header className="Header">
                <div className="HeaderRow">
                    <div className="Logo">
                        <img className="LogoImg" src={me} alt="me" />
                        <div className="Name">
                            <div className="LogoName"><div id="Home" onClick={scroll}>Anastasia Batyrova</div></div>
                            <div className="LogoWork">Web Developer</div>
                        </div>
                    </div>
                    <div className="HeaderGit">
                        <a href="https://github.com/nutsea" rel="noreferrer" target="blank">@nutsea</a>
                    </div>
                </div>
                <div className="Language">
                    <button className="LangEn" id="en" onClick={changeLang}>EN</button>
                    <span className="LangSpan">&nbsp;/&nbsp;</span>
                    <button className="LangRu ThisLang" id="ru" onClick={changeLang}>RU</button>
                </div>
            </header>
            <div className="MainContainer">
                <div className="MainContent">
                    <div id="scrollToHome" className="Home Animation">
                        <div className="HomeContent">
                            <div className="HomeText En">
                                My name is Anastasia, I'm a web developer. 
                                Here I will talk about my skills and education. 
                                Enjoy the exploration!
                            </div>
                            <div className="ReadMore En" id="Speciality" onClick={scroll}>EXPLORE</div>
                            <div className="HomeText Ru Invis">
                                Меня зовут Анастасия, я веб-разработчик.
                                Здесь я расскажу о своих навыках и образовании. 
                                Наслаждайтесь просмотром!
                            </div>
                            <div className="ReadMore Ru Invis" id="Speciality" onClick={scroll}>ДАЛЕЕ</div>
                        </div>
                        <div className="CompContainer">
                            <img src={comp} alt="" />
                        </div>
                    </div>
                    <div id="scrollToSpeciality" className="ContentContainer">
                        <div className="ContentName En">SPECIALITY</div>
                        <div className="ContentName Ru">СПЕЦИАЛЬНОСТЬ</div>
                        <div className="ContentDesc">
                            <div className="ContentText En Animation">
                                I am a student of Kazan Federal University. My 
                                speciality is Applied Mathematics and Informatics. 
                                In addition to the program at the university, I study on my own.
                            </div>
                            <div className="ContentText En Animation">
                                I started my way from learning C++ in the institute. 
                                After a while, I moved into the field of web development and studied these technologies:
                                React.js, MobX, SCSS, Node.js, PostgreSQL, Socket.io and some JS libraries. I also started working with github.
                            </div>
                            <div className="ContentText En Animation">
                                For more than a year I have been training and gaining experience 
                                and now I am ready to work in the company and apply my skills in commercial projects. 
                                My works will be presented below.
                            </div>
                            <div className="ContentText Ru Invis Animation">
                                Я учусь в Казанском Федеральном Университете на 
                                специальности «Прикладная математика и информатика». 
                                Помимо программы в ВУЗе я обучаюсь самостоятельно.
                            </div>
                            <div className="ContentText Ru Invis Animation">
                                Мой путь начался с изучения C++ в институте. Спустя 
                                некоторое время я перешла в сферу веб-разработки и изучила данные технологии:    
                                React.js, MobX, SCSS, Node.js, PostgreSQL, Socket.io и некоторые 
                                библиотеки JS. Также я начала работать с github.
                            </div>
                            <div className="ContentText Ru Invis Animation">
                                Уже более года я тренируюсь и набираюсь опыта и теперь готова 
                                работать в компании и применять свои навыки в коммерческих проектах. 
                                Далее будут представлены мои работы.
                            </div>
                        </div>
                    </div>
                    <div id="works" className="ContentContainer">
                        <div className="ContentName En">WORKS</div>
                        <div className="ContentName Ru Invis">РАБОТЫ</div>
                        <div className="ContentWorks">
                            <div className="Work Animation">
                                <div className="ImgLinkContainer">
                                    <a href="https://stalwart-marshmallow-e1a45e.netlify.app/" rel="noreferrer" target="_blank" className="ImgLink">
                                        <img src={inno} alt="inno" />
                                    </a>
                                </div>
                                <div className="WorkName">
                                    <a href="https://stalwart-marshmallow-e1a45e.netlify.app/" rel="noreferrer" target="_blank">Innosphere</a>
                                    <div>fullstack</div>
                                </div>
                                <div className="WorkTech">
                                    <div>React.js</div>
                                    <div>MobX</div>
                                    <div>SCSS</div>
                                    <div>Node.js</div>
                                    <div>PostgreSQL</div>
                                </div>
                                <div className="WorkDesc En">
                                    Website of the scientific and developmental children's center "Innosphere".
                                    The website has access to services, prices, information about various events of the center.
                                </div>
                                <div className="WorkDesc Ru">
                                    Веб-сайт научно-развивающего центр «Инносфера». На сайте есть доступ к услугам, ценам
                                    и информации о разных мероприятиях центра.
                                </div>
                            </div>
                            <div className="Work Animation">
                                <div className="ImgLinkContainer">
                                    <a href="https://pudrazagar.ru" rel="noreferrer" target="_blank" className="ImgLink">
                                        <img src={pudra} alt="pudra" />
                                    </a>
                                </div>
                                <div className="WorkName">
                                    <a href="https://pudrazagar.ru" rel="noreferrer" target="_blank">Pudrazagar</a>
                                    <div>fullstack</div>
                                </div>
                                <div className="WorkTech">
                                    <div>React.js</div>
                                    <div>MobX</div>
                                    <div>SCSS</div>
                                    <div>Node.js</div>
                                    <div>PostgreSQL</div>
                                </div>
                                <div className="WorkDesc En">
                                    Website of the Pudra tanning studio. The site was created to inform 
                                    about services and promotions, as well as to record customers.
                                </div>
                                <div className="WorkDesc Ru">
                                    Веб-сайт студии загара Pudra. Сайт создан для информирования 
                                    об услугах и акциях, а также для записи клиентов.
                                </div>
                            </div>
                            <div className="Work Animation">
                                <div className="ImgLinkContainer">
                                    <a href="https://main--dancing-cheesecake-968061.netlify.app" rel="noreferrer" target="blank" className="ImgLink">
                                        <img src={calc} alt="calc" />
                                    </a>
                                </div>
                                <div className="WorkName">
                                    <a href="https://main--dancing-cheesecake-968061.netlify.app" rel="noreferrer" target="blank">Wear Poizon</a>
                                    <div>fullstack</div>
                                </div>
                                <div className="WorkTech">
                                    <div>React.js</div>
                                    <div>SCSS</div>
                                    <div>Node.js</div>
                                    <div>PostgreSQL</div>
                                </div>
                                <div className="WorkDesc En">
                                    Website with a delivery cost calculator and order tracking by track number.
                                </div>
                                <div className="WorkDesc Ru">
                                    Сайт с калькулятором стоимости доставки и отслеживанием заказа по трек-номеру.
                                </div>
                            </div>
                            <div className="Work Animation">
                                <div className="ImgLinkContainer">
                                    <a href="/e-learning" rel="noreferrer" target="blank" className="ImgLink">
                                        <img src={ework} alt="ework" />
                                    </a>
                                </div>
                                <div className="WorkName">
                                    <a href="/e-learning" rel="noreferrer" target="blank">E-learning Platform</a>
                                    <div>frontend</div>
                                </div>
                                <div className="WorkTech">
                                    <div>React.js</div>
                                    <div>CSS</div>
                                </div>
                                <div className="WorkDesc En">A platform for learning english with games and statistics of progress. Design template was taken from Figma.</div>
                                <div className="WorkDesc Ru Invis">Платформа для изучения английского языка с играми и статистикой прогресса. Дизайн-макет был взят из Figma.</div>
                            </div>
                            <div className="Work Animation">
                                <div className="ImgLinkContainer"><a href="/podcast" rel="noreferrer" target="blank" className="ImgLink"><img src={podcast} alt="podcast" /></a></div>
                                <div className="WorkName">
                                    <a href="/podcast" rel="noreferrer" target="blank">Pod of Cast</a>
                                    <div>frontend</div>
                                </div>
                                <div className="WorkTech">
                                    <div>React.js</div>
                                    <div>TypeScript</div>
                                    <div>SCSS</div>
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
                                <div className="LanguageSetter Setter2 Var VarDown Eng" id="en" onClick={changeLang}>English</div>
                                <div className="LanguageSetter Setter2 Var VarDown Rus" id="ru" onClick={changeLang}>Russian</div>
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
                    <div className="FooterCopyright">© 2023 anastasiabatyrova.ru</div>
                </div>
            </footer>
        </div>
    );
}
 
export default Main;
