import React, { Component } from 'react';
import { contact, about, publications, research, internship, extracurricular } from './data/info.json';
import avatar from './data/avatar.jpg';
import CV from './data/CV.pdf';
import github from './github.png';
import './App.css';

const ExpDetail = ({detail}) => (
  <div className="pub-list">
    <div className="exp-heading-box">
      <div className="pub-title">{detail.title}</div>
      <span>{detail.time}</span>
    </div>
    <ul className="detail-list">
      {detail.efforts.map((effort, i) => (
        <li key={i}>
          {effort}
        </li>
      ))}
    </ul>
  </div>
)

class App extends Component {
  state = { openNav: false };

  switchNav = () => {
    this.setState((prevState) => ({
      openNav: !prevState.openNav
    }))
  }

  render() {
    /**
     * Navbar
     */
    const navbar = (
      <div className="navbar">
        {CV && <a href={CV} target="_blank" rel="noopener noreferrer">Resume/CV</a>}
        { //eslint-disable-next-line
          <a className="expand-btn iconfont icon-menu" onClick={this.switchNav}></a>
        }
        <nav className={this.state.openNav ? "show-nav" : "hide-nav"}>
          {publications.length > 0 && <a href="#pub">Publications</a>}
          {research.length > 0 && <a href="#res">Research</a>}
          {internship.length > 0 && <a href="#intern">Internship</a>}
          {extracurricular.length > 0 && <a href="#extra">Extracurricular</a>}
        </nav>
      </div>
    )
    /**
     * Contact Info
     */
    const {name, en_name, email, tel, address, birthday} = contact;
    const self = (
      <div className="contact">
        {avatar && <img src={avatar} alt="avatar" className="avatar-img" />}
        <ul className="contact-detail">
          <li><b>{name} ({en_name})</b></li>
          <li><span>Birthday: </span>{birthday}</li>
          <li><span>Email: </span>{email}</li>
          <li><span>Phone: </span>{tel}</li>
          <li><span>Address: </span>{address}</li>
        </ul>
      </div>
    )
    /**
     * Publications
     */
    const pubs = publications.map((pub, i) => (
      <div className="pub-list" key={i}>
        <div>{pub.publisher}</div>
        <div className="pub-title">{pub.title}</div>
        <div dangerouslySetInnerHTML={{__html: pub.author}}></div>
      </div>
    ))
    /**
     * Researches
     */
    const researches = research.map((data, i) => <ExpDetail detail={data} key={i}/>)
    /**
     * Internship
     */
    const interns = internship.map((data, i) => <ExpDetail detail={data} key={i} />)
    /**
     * Extracurricular
     */
    const extras = extracurricular.map((data, i) => <ExpDetail detail={data} key={i} />)

    return (
      <div>
        <div className="App">
          <h1 className="resume-name" id="top">{name} / {en_name}</h1>
          {navbar}
          {self}
          <p>{about}</p>
          {publications.length > 0 && <h2 className="resume-heading" id="pub">SELECTED PUBLICATIONS</h2>}
          {pubs}
          {research.length > 0 && <h2 className="resume-heading" id="res">RESEARCH</h2>}
          {researches}
          {internship.length > 0 && <h2 className="resume-heading" id="intern">INTERNSHIP</h2>}
          {interns}
          {extracurricular.length > 0 && <h2 className="resume-heading" id="extra">EXTRACURRICULAR EXPERIENCES</h2>}
          {extras}
        </div>
        <footer>
          <div>
            @{en_name}'s Personal HomePage.&nbsp;
            <a href="#top">Back to Top</a>
          </div>
          <a href="https://github.com/fuchenxu2008/Resume-Website"><img src={github} alt="" /></a>
        </footer>
      </div>
    );
  }
}

export default App;
