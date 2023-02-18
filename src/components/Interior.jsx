import React, { useEffect } from "react";
import './../styles/interior.css'
import logo from './../img/interior/logo.svg'
import loop from './../img/interior/loop.svg'
import banner from './../img/interior/banner.svg'
import arr from './../img/interior/arr.svg'
import create from './../img/interior/create.jpg'
import call from './../img/interior/call.svg'
import photo1 from './../img/interior/photo1.jpg'
import photo2 from './../img/interior/photo2.jpg'
import photo3 from './../img/interior/photo3.jpg'

const Interior = () => {
    useEffect(() => {
        const content = document.querySelector('.Interior-container')
        setTimeout(() => {
            content.classList.add('Show-project')
        }, 1)
        // content.classList.add('Show-project')
    })

    return (
        <div className="Interior-container">
            <header className="Interior-header">
                <div className="Head-I">
                    <div className="Logo-I">
                        <img src={logo} alt="logo" />
                    </div>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Pages</li>
                            <li>Services</li>
                            <li>Project</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li className="Li-loop-I"><img src={loop} alt="loop" /></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="Banner-I">
                <img src={banner} alt="banner" />
                <div className="Banner-text-I">
                    <div className="Subtitle-I">Let Your Home Be Unique</div>
                    <p className="Desc-I">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
                    <button className="Start-I">Get Started <img src={arr} alt="arr" /></button>
                </div>
            </div>
            <div className="Plans-I">
                <div className="Plan-I">
                    <div className="Plan-sub-I">Project Plan</div>
                    <p className="Plan-desc-I">There are many variations of the passages of lorem Ipsum from available, majority.</p>
                    <div className="Read-I">Read More <img src={arr} alt="arr" /></div>
                </div>
                <div className="Plan-I">
                    <div className="Plan-sub-I">Interior Work</div>
                    <p className="Plan-desc-I">There are many variations of the passages of lorem Ipsum from available, majority.</p>
                    <div className="Read-I">Read More <img src={arr} alt="arr" /></div>
                </div>
                <div className="Plan-I">
                    <div className="Plan-sub-I">Realization</div>
                    <p className="Plan-desc-I">There are many variations of the passages of lorem Ipsum from available, majority.</p>
                    <div className="Read-I">Read More <img src={arr} alt="arr" /></div>
                </div>
            </div>
            <div className="Create-I">
                <div className="Create-text-I">
                    <div className="Create-sub-I">We Create The Art Of Stylish Living Stylishly</div>
                    <p className="Create-desc-I">
                        It is a long established fact that a reader will be distracted by the of readable content of a page 
                        when lookings at its layouts the points of using 
                        that it has a more-or-less normal.
                    </p>
                    <div className="Create-call-I">
                        <div className="Phone-I"><img src={call} alt="call" /></div>
                        <div className="Call-text-I">
                            <div className="Num-I">012345678</div>
                            <div className="Call-callus-I">Call Us Anytime</div>
                        </div>
                    </div>
                    <button className="Getfree-I">Get Free Estimate <img src={arr} alt="arr" /></button>
                </div>
                <div className="Create-pic-I"><img src={create} alt="create" /></div>
            </div>
            <div className="Thoughts-I">
                <div className="Thoughts-sub-I">What People Think About Us</div>
                <div className="Thoughts-container-I">
                    <div className="Thought-small-I">
                        <div className="Thought-head-I">
                            <div className="Head-photo-I"><img src={photo1} alt="photo1" /></div>
                            <div className="Head-text-I">
                                <div className="Head-name-I">Nattasha Mith</div>
                                <div className="Head-city-I">Sydney, Australia</div>
                            </div>
                        </div>
                        <div className="Thought-text-I">
                            Lorem Ipsum is simply dummy 
                            text of the typesetting industry. 
                            Ipsum has been.
                        </div>
                    </div>
                    <div className="Thought-small-I">
                        <div className="Thought-head-I">
                            <div className="Head-photo-I"><img src={photo2} alt="photo2" /></div>
                            <div className="Head-text-I">
                                <div className="Head-name-I">Raymond Galario</div>
                                <div className="Head-city-I">Vancouver, Canada</div>
                            </div>
                        </div>
                        <div className="Thought-text-I">
                            Lorem Ipsum is simply dummy 
                            text of the typesetting industry. 
                            Ipsum has been scrambled it 
                            to make a type book.
                        </div>
                    </div>
                    <div className="Thought-small-I">
                        <div className="Thought-head-I">
                            <div className="Head-photo-I"><img src={photo3} alt="photo3" /></div>
                            <div className="Head-text-I">
                                <div className="Head-name-I">Benny Roll</div>
                                <div className="Head-city-I">New York, USA</div>
                            </div>
                        </div>
                        <div className="Thought-text-I">
                            Lorem Ipsum is simply dummy 
                            text of the typesetting industry. 
                            Ipsum has been scrambled.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Interior;