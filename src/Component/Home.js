import React from "react";
import { Link } from "react-router-dom";
import Type from './Type';
import Tilt from "react-parallax-tilt";
import Avatar from '../images/Avatar.png';
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hello there!</h1>
          <h1>
            I'M <b>GAYATHIRI E</b>
          </h1>
          <Type />
          <Link to="/About">
            <button>
              About Me
              <BsPerson />
            </button>
          </Link>
          <Tilt>
          <img src={Avatar} alt="Avatar" />
          </Tilt>
          <Link to="/Contact">
            <center>
            <button>Contact<CgPhone /></button>
            </center>
          </Link>
          </div>
        
      </div>
    </div>
  );
};

export default Home;