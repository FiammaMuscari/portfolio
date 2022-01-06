
import React from 'react'
import ScrollService from "../../../utilities/ScrollService";
import Typical from 'react-typical'
import './Profile.css'
import Footer from './../../Home/footer/Footer'


export default function Profile() {
    return (
        <div className="profile-container noselect">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://www.facebook.com/Muscari.Fiamma">
                                <i className="fa fa-facebook-square" />
                            </a>
                            <a href="https://www.github.com/FiammaMuscari">
                                <i className="fa fa-github" />
                            </a>
                            <a href="https://www.instagram.com/inversatil/">
                                <i className="fa fa-instagram" />
                            </a>
                            <a href="https://www.linkedin.com/in/fiamma-muscari">
                                <i className="fa fa-linkedin" />
                            </a>
                            <a href="https://twitter.com/_ninfuwu">
                                <i className="fa fa-twitter" />
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name ">
                        <span className="primary-text">
                            {""}
                            Hola, soy <span className="highlighted-text" > Fiamma </span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {""}
                            <h1>
                                {""}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Full Stack Dev 💻",
                                        1000,
                                        "Multiplataforma 📱",
                                        1000,
                                        "Entusiasta 😄",
                                        1000,
                                        "React/React Native⚛",
                                        1000,
                                    ]}
                                />
                            </h1>
                        </span>
                        <span className="profile-role-tagline">
                        Habilidad construyendo aplicaciones con BackEnd y FrontEnd.
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn"
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >
                            Contratar
                        </button>
                        <a href="MuscariFiammaCV.pdf" download='Muscari Fiamma.pdf'>
                            <button className="btn highlighted-btn">Descargar CV</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}