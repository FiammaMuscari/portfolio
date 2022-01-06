import React,{useState, useEffect} from 'react'
import girl from '../../../src/assets/ContactMe/girlcoding.gif'
import load1 from '../../../src/images/load2.gif'
import axios from 'axios'
import {toast} from 'react-toastify'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import Animations from "../../utilities/Animations";
import Aos from 'aos'
import 'aos/dist/aos.css'

import Typical from 'react-typical'

import './ContactMe.css'



export default function ContactMe(props) {
    
    
    useEffect(() =>{
        Aos.init({duration:1000 });
      }, []);

      let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    
    
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");
      const [banner, setBanner] = useState("");
      const [bool, setBool] = useState(false);
    
      const handleName = (e) => {
        setName(e.target.value);
      };
      const handleEmail = (e) => {
        setEmail(e.target.value);
      };
      const handleMessage = (e) => {
        setMessage(e.target.value);
      };
      console.log(name);
      const submitForm = async (e) => {
        e.preventDefault();
        try {
          let data = {
            name,
            email,
            message,
          };
          setBool(true);
          const res = await axios.post(`/contact`, data);
          if (name.length === 0 || email.length === 0 || message.length === 0) {
            setBanner(res.data.msg);
            toast.error(res.data.msg);
            setBool(false);
          } else if (res.status === 200) {
            setBanner(res.data.msg);
            toast.success(res.data.msg);
            setBool(false);
    
            setName("");
            setEmail("");
            setMessage("");
          }
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div data-aos='fade-up'  className="main-container" id={props.id || ''}>
            <ScreenHeading
            title={'Contacto'}
            />
            <div className="central-form" id='come-here'>
                <div className="col">
                    <h2 className="title">
                            {""}
                            <Typical
                                loop={Infinity}
                                    steps={[
                                        "Manda un mensaje✉️",
                                    1000,
                                    "Ponte en contacto💡",
                                    1000,
                                    
                                ]}
                            />
                    </h2>
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
                <div className="back-form">
                    <div className="img-back">
                        <img src={girl} alt = 'Sin Conexión a Internet'/>
                    </div>
                    <form onSubmit={submitForm}>
                    <h4>Tu mensaje aquí!</h4>
                        <p>{banner}</p>
                        <label htmlFor='name'>Nombre</label>
                        <input type="text"
                        onChange={handleName}
                        value={name}
                        />

                        <label htmlFor='email'>E-Mail</label>
                        <input type="email"
                        onChange={handleEmail}
                        value={email}/>

                        <label htmlFor='message'>Mensaje</label>
                        <textarea type="text"
                        onChange={handleMessage}
                        value={message}/>

                        <div className="send-btn">
                            <button type='submit'>
                                Enviar <i className="fa fa-paper-plane"/>
                                {bool?(<b className="load">
                                    <img src={load1} alt='imagen no responde'/>
                                </b>):('')}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
