import React from 'react';
import ProPic from './HomePic.jpg';
import Contact from '../Contact/Contact';


const Home = () => {
  return(
    <div id="home-component">
      <div className="info">
        <div className="carousel animated bounceInLeft custom-delay-li-3">
          <h1>محمد کرمی</h1>
          <p>اینجا توضیحاتی که مورد نظر خودت هست رو می نویسیم</p>
        </div>
        <Contact />
      </div>
      <img className="animated fadeInLeft" src={ProPic} alt="owner-pic"/>

    </div>
  )
}

export default Home;
