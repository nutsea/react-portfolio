import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()
    const form2 = useRef()

    const handleChangeName = () => {
        const name = document.querySelector('.Name-en')
        const nameError = document.querySelector('.Name-error')
        if (name.value.length !== 0) {
            name.classList.remove('Empty')
            nameError.innerText = ''
        }
        else {
            nameError.innerText = 'Incorrect name'
            name.classList.add('Empty')
        }
    }

    const handleChangeNameRu = () => {
        const name = document.querySelector('.Name-ru')
        const nameError = document.querySelector('.Name-error-ru')
        if (name.value.length !== 0) {
            name.classList.remove('Empty')
            nameError.innerText = ''
        }
        else {
            nameError.innerText = 'Введите имя'
            name.classList.add('Empty')
        }
    }

    const handleChangeEmail = () => {
        const email = document.querySelector('.Email-en')
        const emailError = document.querySelector('.Email-error')
        if (emailValidation(email.value)) {
            email.classList.remove('Empty')
            emailError.innerText = ''
        }
        else {
            email.classList.add('Empty')
            emailError.innerText = 'Incorrect email'
        }
    }

    const handleChangeEmailRu = () => {
        const email = document.querySelector('.Email-ru')
        const emailError = document.querySelector('.Email-error-ru')
        if (emailValidation(email.value)) {
            email.classList.remove('Empty')
            emailError.innerText = ''
        }
        else {
            email.classList.add('Empty')
            emailError.innerText = 'Некорректный email'
        }
    }

    const handleChangeMessage = () => {
        const message = document.querySelector('.Message-en')
        const messageError = document.querySelector('.Message-error')
        if (message.value.length !== 0) {
            message.classList.remove('Empty')
            messageError.innerText = ''
        }
        else {
            message.classList.add('Empty')
            messageError.innerText = 'Enter message'
        }
    }

    const handleChangeMessageRu = () => {
        const message = document.querySelector('.Message-ru')
        const messageError = document.querySelector('.Message-error-ru')
        if (message.value.length !== 0) {
            message.classList.remove('Empty')
            messageError.innerText = ''
        }
        else {
            message.classList.add('Empty')
            messageError.innerText = 'Введите сообщение'
        }
    }

    function emailValidation(value) {
        // DO NOT DELETE NEXT LINE!!!
        // eslint-disable-next-line
        let txt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return txt.test(value);
    }

    const sendEmail = (e) => {
        e.preventDefault()
        const lang = localStorage.getItem('Lang')
        const name = document.querySelector('.Contact-name')
        const email = document.querySelector('.Contact-email')
        const message = document.querySelector('.Message-area')
        const nameRu = document.querySelector('.Name-ru')
        const emailRu = document.querySelector('.Email-ru')
        const messageRu = document.querySelector('.Message-ru')
        const sent = document.querySelector('.Good-sent')
        const sentError = document.querySelector('.Error-sent')
        const sending = document.querySelector('.Sending-en')
        const sendingRu = document.querySelector('.Sending-ru')
        const close = document.getElementsByClassName('CloseAlert')
        const sentM = document.getElementsByClassName('SentAlert')
        if (lang === 'russian') {
            if (nameRu.value.length !== 0 && emailValidation(emailRu.value) && messageRu.value.length !== 0) {
                sendingRu.setAttribute('style', `opacity: 1; transform: translateX(600px)`)
                setTimeout(() => {
                    sendingRu.setAttribute('style', `opacity: 0; transform: translateX(-100px)`)
                }, 1200)
                emailjs
                    .sendForm(
                        'service_ue4mlvh', 
                        'template_wt2rbik', 
                        form2.current, 
                        'c085dHDMMvWkl3EwT'
                    )
                    .then(
                        (result) => {
                        console.log(result.text)
                        sent.classList.remove('Hide')
                        const Closer = setTimeout(() => {
                            sent.classList.add('Hide')
                        }, 4000)
                        for (let i = 0; i < close.length; i++) {
                            close[i].addEventListener('click', function() {
                                sentM[i].classList.add('Hide')
                                clearTimeout(Closer)
                            })
                        }
                        nameRu.value = ''
                        emailRu.value = ''
                        messageRu.value = ''
                    }, 
                    (error) => {
                        console.log(error.text)
                        sentError.classList.remove('Hide')
                        const Closer = setTimeout(() => {
                            sentError.classList.add('Hide')
                        }, 4000)
                        for (let i = 0; i < close.length; i++) {
                            close[i].addEventListener('click', function() {
                                sentM[i].classList.add('Hide')
                                clearTimeout(Closer)
                            })
                        }
                    }
                    )
            }
            else {
                handleChangeNameRu()
                handleChangeEmailRu()
                handleChangeMessageRu()
            }
        }
        else {
            if (name.value.length !== 0 && emailValidation(email.value) && message.value.length !== 0) {
                sending.setAttribute('style', `opacity: 1; transform: translateX(600px)`)
                setTimeout(() => {
                    sending.setAttribute('style', `opacity: 0; transform: translateX(-100px)`)
                }, 1200)
                emailjs
                    .sendForm(
                        'service_ue4mlvh', 
                        'template_wt2rbik', 
                        form.current, 
                        'c085dHDMMvWkl3EwT'
                    )
                    .then(
                        (result) => {
                        console.log(result.text)
                        sent.classList.remove('Hide')

                        const Closer = setTimeout(() => {
                            console.log('hide')
                            sent.classList.add('Hide')
                        }, 4000)
                        for (let i = 0; i < close.length; i++) {
                            close[i].addEventListener('click', function() {
                                sentM[i].classList.add('Hide')
                                clearTimeout(Closer)
                            })
                        }
                        name.value = ''
                        email.value = ''
                        message.value = ''
                    }, 
                    (error) => {
                        console.log(error.text)
                        sentError.classList.remove('Hide')

                        const Closer = setTimeout(() => {
                            sentError.classList.add('Hide')
                        }, 4000)
                        for (let i = 0; i < close.length; i++) {
                            close[i].addEventListener('click', function() {
                                sentM[i].classList.add('Hide')
                                clearTimeout(Closer)
                            })
                        }
                    }
                    )
            }
            else {
                handleChangeName()
                handleChangeEmail()
                handleChangeMessage()
            }
        }
    }

    useEffect (() => {
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
    })

    return (
        <div className="Contact-container">
            <form ref={form} onSubmit={sendEmail} className="Contact-form En">
                <input 
                    className='Contacts-input Contact-name Name-en En' 
                    type="text" 
                    name="user_name" 
                    placeholder='Name' 
                    onChange={handleChangeName}
                />
                <span className='Name-error'></span>
                <input 
                    className='Contacts-input Contact-email Email-en En' 
                    type="mail" 
                    name="user_email" 
                    placeholder='Email' 
                    onChange={handleChangeEmail}
                />
                <span className='Email-error'></span>
                <textarea className='Message-area Message-en En' name="message" placeholder='Message' onChange={handleChangeMessage} />
                <span className='Message-error'></span>
                <div className='Sending-container'><div className='Sending Sending-en'></div></div>
                <div className="center-send">
                    <button className="btn-send En" type="submit" value="Send">SEND</button>
                </div>
            </form>
            
            <form ref={form2} onSubmit={sendEmail} className="Contact-form Ru Invis">
                <input 
                    className='Contacts-input Contact-name Name-ru Ru Invis' 
                    type="text" 
                    name="user_name" 
                    placeholder='Имя' 
                    onChange={handleChangeNameRu}
                />
                <span className='Name-error Name-error-ru'></span>
                <input 
                    className='Contacts-input Contact-email Email-ru Ru Invis' 
                    type="mail" 
                    name="user_email" 
                    placeholder='Электронная почта' 
                    onChange={handleChangeEmailRu}
                />
                <span className='Email-error Email-error-ru'></span>
                <textarea className='Message-area Message-ru Ru Invis' name="message" placeholder='Сообщение' onChange={handleChangeMessageRu} />
                <span className='Message-error Message-error-ru'></span>
                <div className='Sending-container'><div className='Sending Sending-ru'></div></div>
                <div className="center-send">
                    <button className="btn-send Ru Invis" type="submit" value="Send">ОТПРАВИТЬ</button>
                </div>
            </form>
        </div>
    );
}
 
export default Contact;