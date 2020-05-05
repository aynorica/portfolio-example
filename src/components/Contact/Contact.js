import React from 'react';
import instaLogo from './instagram.svg';
import gmailLogo from './gmail.svg';
import soundcloudLogo from './soundcloud.svg';
import telegramLogo from './telegram.svg';
import whatsappLogo from './whatsapp.svg';

const Contact = () => {
  return (
    <div>
      <ul id="contact" className="animated fadeIn ">
        <li className="animated bounceInLeft custom-delay-li-5">
          <a href="https://www.instagram.com/__mohammadkarami/">
            <img src={instaLogo} alt="instagram-logo"/>
            </a>
        </li>
        <li className="animated bounceInLeft custom-delay-li-4">
          <a href="https://www.instagram.com/__mohammadkarami/">
            <img src={gmailLogo} alt="gmail-logo"/>
          </a>
        </li>
        <li className="animated bounceInLeft custom-delay-li-3">
          <a href="https://www.instagram.com/__mohammadkarami/">
            <img src={soundcloudLogo} alt="soundcloud-logo"/>
          </a>
        </li>
        <li className="animated bounceInLeft custom-delay-li-2">
          <a href="https://www.instagram.com/__mohammadkarami/">
            <img src={telegramLogo} alt="telegram-logo"/>
          </a>
        </li>
        <li className="animated bounceInLeft custom-delay-li-1">
          <a href="https://wa.me/989923891864">
            <img src={whatsappLogo} alt="whatsapp-logo"/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact;
