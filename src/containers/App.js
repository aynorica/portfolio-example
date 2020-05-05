import React, {Component, Suspense} from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import 'animate.css/animate.min.css';
import Database from '../data';


class App extends Component {
  constructor () {
    super();
    this.state ={
      route: "home"
    }
  }

  activeNav = (id) => {
    const prevActive = document.getElementsByClassName("active");
    const nextActive = document.getElementById(id);
    const navbar = document.getElementsByClassName("navbar")[0].classList;
    prevActive[0].classList.remove("active");
    nextActive.classList.add("active");
    this.setState({route: id})
    if(id === "home") {
      navbar.add('is-active');
    } else {
      navbar.remove('is-active')
    }
  }


  loadedComponent = (path) => {
    const Lyrics = React.lazy(() => import('../components/CardList/CardList'));
    if(path === "home") {
      return <Home context={Database.home}/>
    }
    if(path === "lyrics") {
      return (
        <Suspense fallback={''}>
          <Lyrics name={path} context={Database.lyrics}/>
        </Suspense>
      )
    }
    if(path === "poems") {
      return (
        <Suspense fallback={''}>
          <Lyrics name={path} context={Database.poems}/>
        </Suspense>
      )
    }
    if(path === "comment") {
      return (
        <Suspense fallback={''}>
          <Lyrics name={path} context={Database.comment}/>
        </Suspense>
      )
    }
    if(path === "musics") {
      return (
        <Suspense fallback={''}>
          <Lyrics name={path} context={Database.musics}/>
        </Suspense>
      )
    }
    if(path  === "about") {
      return (
        <Suspense fallback={''}>
          <Lyrics name={path} context={Database.about}/>
        </Suspense>
      )
    }
  }

  render(){
    return (
      <div>
        <img className="background-pic" src="https://www.wallpapermaiden.com/image/2017/02/22/bulb-think-minimalistic-others-13596.png" alt="background"/>
        <Navbar activeNav={this.activeNav} isActive={this.IsActive} />
        {this.loadedComponent(this.state.route)}
      </div>
    );
  }
}

export default App;
