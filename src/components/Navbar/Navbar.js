import React from 'react';
import './Navbar.css';

const Navbar = ({activeNav}) => {
  return (
    <nav className="navbar is-active">
      <h1 className="animated bounceInLeft custom-delay-li-7 navbar-h1">
        لوگو
      </h1>
      <ul className="navbar-ul">
        <li className="animated bounceInLeft custom-delay-li-6" id="about" onClick={() => activeNav("about")}>درباره من</li>
        <li className="animated bounceInLeft custom-delay-li-5" id="musics" onClick={() => activeNav("musics")}>آهنگ ها</li>
        <li className="animated bounceInLeft custom-delay-li-4" id="comment" onClick={() => activeNav("comment")}>دلنوشته</li>
        <li className="animated bounceInLeft custom-delay-li-3" id="poems" onClick={() => activeNav("poems")}>اشعار</li>
        <li className="animated bounceInLeft custom-delay-li-2" id="lyrics" onClick={() => activeNav("lyrics")}>ترانه ها </li>
        <li className="animated bounceInLeft custom-delay-li-1" id="home" className="active" onClick={() => activeNav("home")}>خانه</li>
      </ul>
    </nav>
  )
}

export default Navbar;
