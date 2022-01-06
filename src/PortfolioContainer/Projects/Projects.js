import React, {useEffect}from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import Animations from "../../utilities/Animations";


import pokedex from "../../assets/Projects/pokedex.png";
import peliculas from "../../assets/Projects/movieapp.png";
import mario from "../../assets/Projects/mario.png";
import alquileres from "../../assets/Projects/alquileres.png";
import clima from "../../assets/Projects/clima.png";
import calendario from "../../assets/Projects/calendario.png";
import quizz from "../../assets/Projects/quizzapp.png";
import todolist from "../../assets/Projects/todolist.png";

import Aos from 'aos'
import 'aos/dist/aos.css';

import "./Projects.css";

export default function Projects(props) {

  useEffect(() =>{
    Aos.init({duration:2000 });
  }, []);

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1200,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div id={props.id || ""}>
    <div data-aos='fade-up'  >
      <ScreenHeading title={"Projectos"} />
      <section  className="project-section" >
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <a href="http://pokedex-rho-green.vercel.app">
                        <img src={pokedex} alt="no internet connection"></img>
                    </a>
                  </div>
                  <div className="client-info">
                    <h5>Pokedex</h5>
                  </div>
                </div>
              </div>



              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <a href="https://wikipelis.vercel.app">
                        <img src={peliculas} alt="no internet connection"></img>
                    </a>
                  </div>
                  <div className="client-info">
                    <h5>Peliculas</h5>
                  </div>
                </div>
              </div>


              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <a href="https://mario90sgame.vercel.app">
                        <img src={mario} alt="no internet connection"></img>
                    </a>
                  </div>
                  <div className="client-info">
                    <h5>Mario</h5>
                  </div>
                </div>
              </div>


              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <a href="http://alquilermdp.vercel.app" target="_blank">
                        <img src={alquileres} alt="no internet connection"></img>
                    </a>
                  </div>
                  <div className="client-info">
                    <h5>Alquileres</h5>
                  </div>
                </div>
              </div>


              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <a href="http://the-city-weather.netlify.app">
                        <img src={clima} alt="no internet connection"></img>
                    </a>
                  </div>
                  <div className="client-info">
                    <h5>Clima</h5>
                  </div>
                </div>
              </div>


              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <a href="http://calendario-psi.vercel.app">
                        <img src={calendario} alt="no internet connection"></img>
                    </a>
                  </div>
                  <div className="client-info">
                    <h5>Calendario</h5>
                  </div>
                </div>
              </div>


              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <a href="http://mythologist.vercel.app">
                        <img src={quizz} alt="no internet connection"></img>
                    </a>
                  </div>
                  <div className="client-info">
                    <h5>Quizz App</h5>
                  </div>
                </div>
              </div>


              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <a href="http://listadetareas-woad.vercel.app">
                        <img src={todolist} alt="no internet connection"></img>
                    </a>
                  </div>
                  <div className="client-info">
                    <h5>To Do List</h5>
                  </div>
                </div>
              </div>


            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
