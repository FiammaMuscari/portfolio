import React from "react";
import Profile from "./Profile/Profile";
import Header from "./Header/Header";
import Animations from "../../utilities/Animations"
import "./Home.css";

export default function Home(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
    };

  return (
    <div className="home-container" id={props.id || ''}>
      <Header />
      <Profile />
    </div>
  );
}
