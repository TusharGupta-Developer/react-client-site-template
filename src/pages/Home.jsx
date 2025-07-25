import React from 'react'
import './Home.css'
import profileImg from '../assets/img/hero.jpg'; 
// import { profileImg } from 'src\assets\Profile.png';
import useScrollReveal from '../hooks/useScrollReveal';

function Home() {
  useScrollReveal();
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">

          <img src={profileImg} alt="Profile" className="home__img"/>
          {/* <img className="hero" src={profileImg} alt="Profile" /> */}

            <div className="home__data">
              <h1 className="home__name"> Healing Starts here...  </h1>
              <h4 className="home__profession"> You're not alone — therapy can help you heal, grow, and rediscover peace within yourself.</h4>
            </div>

            
            <a href="#about" className="home__scroll">
              <div className="home__scroll--box">
                <i className="ri-arrow-down-line"></i>
              </div>

              <span className="home__scroll-text">About Me
              </span>
            </a>
        </div>
            {/* .home__scroll-text|| Recent Works  */}
            



      </section>
    </>
  )
}

export default Home