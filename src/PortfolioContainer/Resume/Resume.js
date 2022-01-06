import React, {useState, useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Animations from "../../utilities/Animations"
import {SiHtml5, SiCss3, SiJavascript, SiReact, SiMysql, SiPhp, SiBootstrap, SiExpress} from "react-icons/si";
import { DiNodejs, DiMongodb}from "react-icons/di"
import Aos from 'aos'
import 'aos/dist/aos.css';
import "./Resume.css";


export default function Resume(props) {

    useEffect(() =>{
        Aos.init({duration:2000 });
    }, []);

    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});


    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    };

    const ResumeHeading = (props) => {
        return(
            <div  className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                    <div className="heading-date">
                        {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
                </div>
            );
    };


const style = { width: '100%', height: '3em'}
    const resumeBullets=[
        {label:"Educación", logoSrc: "education.svg"},
        {label:"Habilidades de programación", logoSrc:"programming-skills.svg"},
        {label:"Intereses", logoSrc:"interests.svg"}
    ];

const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"UTNRRe, Argentina"}
                subHeading={"Diplomatura Full Stack Developer"}
                fromDate={"2021"}
                toDate={"2022"}
            />
        
            <ResumeHeading
                heading={"UNMdP"}
                subHeading={"Contador Público"}
                fromDate={"2017"}
                toDate={"2020"}
            />
            <ResumeHeading
                heading={"Dr. Albert Schweitzer"}
                subHeading={"Bachillerato en Ciencias Sociales"}
                fromDate={"2002"}
                toDate={"2014"}
            />
            </div>,

        <div className='resume-screen-container programming-skills-container' key='programming-skills'>
            <div className="resume-skills-container">
                    <button className="btn-skills">
                        <a id="html" href="https://developer.mozilla.org/es/docs/Glossary/HTML5" target="_blank" ><SiHtml5 style={style} /> <span className="enlaces">HTML5</span> </a>
                    </button>
                    <button className="btn-skills">
                        <a id="css" href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" ><SiCss3 style={style}/> <span className="enlaces">CSS3</span> </a>
                    </button>
                    <button className="btn-skills">
                        <a id="javascript" href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" ><SiJavascript style={style}/> <span className="enlaces">JavaScript</span> </a>
                    </button>
                    <button className="btn-skills">
                        <a id="react" href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" ><SiReact style={style}/> <span className="enlaces">ReactJs</span> </a>
                    </button>
                    <button className="btn-skills">
                        <a id="mysql" href="https://www.mysql.com" target="_blank" ><SiMysql style={style}/> <span className="enlaces">MySQL</span> </a>
                    </button>
                    <button className="btn-skills">
                        <a id="php" href="https://www.php.net" target="_blank" ><SiPhp style={style}/> <span className="enlaces">PHP</span> </a>
                    </button>
                    <button className="btn-skills">
                        <a id="bootstrap" href="https://getbootstrap.com" target="_blank" ><SiBootstrap style={style}/> <span className="enlaces">Bootstrap</span> </a>
                    </button>
                    <button className="btn-skills">
                        <a id="express" href="https://expressjs.com" target="_blank" ><SiExpress style={style}/> <span className="enlaces">Express</span> </a>
                    </button>
                    <button className="btn-skills">
                        <a id="nodejs" href="https://nodejs.dev" target="_blank" ><DiNodejs style={style}/> <span className="enlaces">NodeJs</span> </a>
                    </button>
                    <button className="btn-skills">
                        <a id="mongodb" href="https://www.mongodb.com/cloud/atlas/lp/try2" target="_blank" ><DiMongodb style={style}/> <span className="enlaces">MongoDB</span> </a>
                    </button>
                </div>
            </div>,

        <div className="resume-screen-container" key='interests'>
                <ResumeHeading
                    heading='Estudiar'
                    description="Me gusta buscar siempre nuevas formas para programar y aprender algo nuevo día a día, me gusta sentir que estoy informada y cambiar opiniones con mis compañeros."/>
                <ResumeHeading
                    heading='Tocar el teclado'
                    description="Lo mejor de escuchar música definitivamente es componerla!"/>
                <ResumeHeading
                    heading='Cuidar a mi hija'
                    description="Algo importante en la vida es poder tener tiempo para quienes amamos y mi hija es a quien más amo en este mundo."/>
        </div>
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
    
        let newCarousalOffset = {
          style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
    
        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
            return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
            >
                <img
                className="bullet-logo"
                src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
                alt="ups, parece que no hay conexión a internet"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
            ));
        };

        const getResumeScreens = () => {
            return (
                <div
                    style={carousalOffsetStyle.style}
                    className="resume-details-carousal"
                >
                    {resumeDetails.map((ResumeDetail) => ResumeDetail)}
                </div>
                );
        };
        
        

            return (
                <div data-aos='fade-right' className="resume-container screen-container " id={props.id || ""}>
                  <div className="resume-content">
                    <ScreenHeading title={"Resumen"} />
                    <div className="resume-card">
                      <div className="resume-bullets">
                        <div className="bullet-container">
                          <div className="bullet-icons"></div>
                          <div className="bullets">{getBullets()}</div>
                        </div>
                      </div>
            
                      <div className="resume-bullet-details">{getResumeScreens()}</div>
                    </div>
                  </div>
                </div>
              );
            };
