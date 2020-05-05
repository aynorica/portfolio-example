import React from 'react';
import ArticlePic from './Article-pic.jpeg';
import Arrow from './arrow.svg';

const ArrowEvent = (index) => {
  let article = document.getElementsByClassName("article")[index].classList;
  if(article[1]){
    article.remove("arrow-event")
  } else {
    article.add("arrow-event")
  }
}


const Card = ({ title, content, preType}) => {
  return (
    <div className="article">
      <img src={ArticlePic} alt="article-pic" className="animated zoomIn"/>
      <div className="article-presentation">
        <h1 className="animated zoomIn">{title}</h1>
        <p className="animated zoomIn paragraph">
          {content}
        </p>
        <pre></pre>
      </div>
      <a className="animated slideInDown"  onClick={() => ArrowEvent(0)}>
        <img src={Arrow} alt="arrow-down"/>
      </a>
    </div>
  )
}

export default Card;
//
