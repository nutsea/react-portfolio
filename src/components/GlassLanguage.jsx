import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './../styles/glass.css'
import vk from './../img/glass/vk.svg'
import git from './../img/glass/gitHub.svg'

const GlassLanguage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const ruElems = document.getElementsByClassName('Ru')
        const enElems = document.getElementsByClassName('En')
        const lang = localStorage.getItem('glassLang')
        const eng = document.querySelector('.Eng')
        const rus = document.querySelector('.Rus')
        console.log(lang)
        if (lang === 'russian') {
            const language = document.querySelector('.Lang')
            language.textContent = 'Русский'
            eng.textContent = 'Английский'
            rus.textContent = 'Русский'
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

    const changeLang = (e) => {
        const langBtn = document.querySelector('.Lang-btn')
        if (langBtn.classList.contains('Down')) {
            langBtn.classList.remove('Down')
            langBtn.classList.add('Up')
        }
        else {
            langBtn.classList.remove('Up')
            langBtn.classList.add('Down')
        }
        window.addEventListener('click', e => { // при клике в любом месте окна браузера
            const target = e.target // находим элемент, на котором был клик
            if (!target.closest('.Language-setter')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
                if (langBtn.classList.contains('Up')) {
                    langBtn.classList.remove('Up') // то закрываем окно навигации, удаляя активный класс
                    langBtn.classList.add('Down')
                    for (let i of vars) {
                        i.classList.remove('Var-up')
                        i.classList.add('Var-down')
                    }
                }
            }
        })
        const vars = document.getElementsByClassName('Var')
        for (let i of vars) {
            if (langBtn.classList.contains('Up')) {
                i.classList.remove('Var-down')
                i.classList.add('Var-up')
            }
            else {
                i.classList.remove('Var-up')
                i.classList.add('Var-down')
            }
        }
        const lang = document.querySelector('.Lang')
        const eng = document.querySelector('.Eng')
        const rus = document.querySelector('.Rus')
        const ruElems = document.getElementsByClassName('Ru')
        const enElems = document.getElementsByClassName('En')
        switch (e.target.id) {
            case 'en':
                lang.textContent = 'English'
                eng.textContent = 'English'
                rus.textContent = 'Russian'
                for (let i of ruElems) {
                    i.classList.add('Invis')
                }
                for (let i of enElems) {
                    i.classList.remove('Invis')
                }
                localStorage.setItem('glassLang', 'english')
                break;
            case 'ru':
                lang.textContent = 'Русский'
                eng.textContent = 'Английский'
                rus.textContent = 'Русский'
                for (let i of ruElems) {
                    i.classList.remove('Invis')
                }
                for (let i of enElems) {
                    i.classList.add('Invis')
                }
                localStorage.setItem('glassLang', 'russian')
                break
            default:
                break;
        }
    } 

    return (
        <div className="Glass-global">
            <div className="Glass-container">
                <div className="Glass-plast-container">
                    <div className="Glass-plast New">
                        <div className="Glass-content">
                            <div className="Glass-header">
                                <div className="Glass-logo"><button id="/">nutsea</button></div>
                                <div className="Glass-nav">
                                    <ul className="En">
                                        <li><button id="/" onClick={handleNavigate}>HOME</button></li>
                                        <span className="Glass-slash"></span>
                                        <li><button id="/speciality" onClick={handleNavigate}>SPECIALITY</button></li>
                                        <span className="Glass-slash"></span>
                                        <li><button id="/works" onClick={handleNavigate}>WORKS</button></li>
                                        <span className="Glass-slash"></span>
                                        <li><button id="/contacts" onClick={handleNavigate}>CONTACTS</button></li>
                                        <span className="Glass-slash"></span>
                                        <li className="Link-line"><button id="/language">LANGUAGE</button></li>
                                    </ul>
                                    <ul className="Ru Invis">
                                        <li><button id="/" onClick={handleNavigate}>ГЛАВНАЯ</button></li>
                                        <span className="Glass-slash"></span>
                                        <li><button id="/speciality" onClick={handleNavigate}>СПЕЦИАЛЬНОСТЬ</button></li>
                                        <span className="Glass-slash"></span>
                                        <li><button id="/works" onClick={handleNavigate}>ПРОЕКТЫ</button></li>
                                        <span className="Glass-slash"></span>
                                        <li><button id="/contacts" onClick={handleNavigate}>КОНТАКТЫ</button></li>
                                        <span className="Glass-slash"></span>
                                        <li className="Link-line"><button id="/language">ЯЗЫК</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Glass-body Centered">
                                <div className="Language-text En">Change language</div>
                                <div className="Language-text Ru Invis">Сменить язык</div>
                                <div className="Language-setter" onClick={changeLang}>
                                    <div className="Lang">English</div>
                                    <div className="Lang-btn Down"></div>
                                </div>
                                <div className="Lang-list">
                                        <div className="Language-setter Var Var-down Eng" id="en" onClick={changeLang}>English</div>
                                        <div className="Language-setter Var Var-down Rus" id="ru" onClick={changeLang}>Russian</div>
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
 
export default GlassLanguage;