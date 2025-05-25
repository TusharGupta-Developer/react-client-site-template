import React from 'react'
import './Home.css'
import profileImg from '../assets/img/Profile.png'; 
// import { profileImg } from 'src\assets\Profile.png';

function Home() {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">

          <img src={profileImg} alt="Profile" className="home__img"/>

            <div className="home__data">
              <h1 className="home__name"> Healing Starts here  </h1>
              <h4 className="home__profession"> You're not alone — therapy can help you heal, grow, and rediscover peace within yourself.</h4>
            </div>


            {/* .home__scroll-text|| Recent Works  */}
            <a href="#work" className="home__scroll">
              <div className="home__scroll--box">
                <i className="ri-arrow-down-line"></i>
              </div>

              <span className="home__scroll-text">Recent Works
              </span>
            </a>

        </div>


      </section>
    </>
  )
}

export default Home