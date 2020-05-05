import React from 'react';
import Card from '../Card/Card';
import Music from '../Musics/Music';
import About from '../About/About';

const contextProvider = (name , contexts) => {
  if(name === "comment") {
    let content = contexts.map((context,index) => {
      return <Card key={index} title={context.title} content={context.content} preType={false}/>
    });
    return content;
  } else if(name === "musics") {
    let content = contexts.map((context,index) => {
      return <Music key={index} title={context.title} content={context.content}/>
    })
    return content;
  }else if(name === "about"){
    let content = contexts.map((context,index) => {
      return <About key={index} content={context.content}/>
    })
    return content;
  }else if(name === "lyrics" || name === "poems") {
    let content = contexts.map((context,index) => {
      return <Card key={index} title={context.title} content={context.content} preType={true}/>
    })
    return content;
  }
}

const CardList = ({name,context}) => {
  return (
    <div className="cardList">
      {contextProvider(name , context)}
    </div>
  )
}

export default CardList;
