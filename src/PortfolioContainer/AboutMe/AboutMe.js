import React, {useEffect} from 'react'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading"
import Animations from "../../utilities/Animations"
import Aos from 'aos'
import ScrollService from "../../utilities/ScrollService";
import 'aos/dist/aos.css';
import "./AboutMe.css";

export default function AboutMe(props) {

    
    useEffect(() =>{
        Aos.init({duration:1500 });
    }, []);

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInscreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
        };
    
        const SCREEN_CONSTSANTS = {
            description: "Desarrolladora web y móvil con conocimientos básicos MERN y habilidad para crear aplicaciones con gran eficiencia. Profesional dispuesta y activa en trabajar con las mejores aptitudes dentro de una organización.",
            highlights:{
                bullets:[
                        "Desarrollo web y móvil Full Stack",
                        "Interfaz interactiva según el diseño",
                        "React & React native",
                        "Gestión de la base de datos Mongodb & MySQL",
                ],
                heading: "Puntos destacados:"
            }
        }
        const renderHighlight = () => {
            return(
                SCREEN_CONSTSANTS.highlights.bullets.map((value, i)=>(
                    <div className="highlight" key={i}>
                        <div className="highlight-blob"></div>
                        <span>{value}</span>
                    </div>
                ))
            )
        }

        return (
        <div id={props.id || ""}>
        <div data-aos='fade-up' className="about-me-container screen-container" >
            <div className="about-me-parent">
                <ScreenHeading title={"Sobre Mí"} />
                    <div className="about-me-card">
                        <div className="about-me-profile"></div>
                            <div className="about-me-details">
                                <span className="about-me-description">
                                {SCREEN_CONSTSANTS.description}</span>
                                <div className="about-me-highlights">
                                    <div className="highlight-heading">
                                        <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                                    </div>
                                    {renderHighlight()}
                                </div>
                                <div className="about-me-options">
                                    <button className="btn primary-btn" 
                                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                                    > Contratar </button>
                                    <a href="MuscariFiammaCV.pdf" download='Muscari Fiamma.pdf'>
                                    <button className="btn highlighted-btn">Descargar CV</button>
                                    </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
                    );
                    }