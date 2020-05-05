import React from 'react';
import downloadIcon from './arrows.svg';

const Music = ({title, content}) => {
  return (
    <div id="music-card">
      <img src="https://wallpaperaccess.com/full/1129041.jpg" className="animated fadeIn custom-delay-li-1" alt="music"/>
      <div className="album-container" className="animated fadeIn custom-delay-li-2">
        <p className="album">آلبوم</p>
        <p className="album">:</p>
        <h3 className="album">{title}</h3>
      </div>
      <div>
        <h1 className="animated fadeIn custom-delay-li-3">{title}</h1>
        <p className="animated fadeIn custom-delay-li-4">{content}</p>
      <a className="animated fadeIn custom-delay-li-5" href="#"><img src={downloadIcon} alt="donwload icon" className="download-icon"/></a>
      </div>
    </div>
  )
}

export default Music;
