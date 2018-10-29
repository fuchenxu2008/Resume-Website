import React, { Component } from 'react';
import { contact, about, publications } from './data/info.json';
import avatar from './data/avatar.jpg';
import CV from './data/CV.pdf';
import './App.css';

class App extends Component {
  render() {
    const { name, en_name, address, email, tel } = contact;
    const pubs = publications.map((pub, i) => (
      <div className="pub-list" key={i}>
        <div>{pub.publisher}</div>
        <div className="pub-title">{pub.title}</div>
        <div dangerouslySetInnerHTML={{__html: pub.author}}></div>
      </div>
    ))
    return (
      <div>
        <div className="App">
          <h1 className="resume-name">{name} / {en_name}</h1>
          <div className="navbar">
            <a href="#">Home</a>
            <a href={CV} target="_blank">Resume/CV</a>
          </div>
          <div className="contact">
            <div>
              <img src={avatar} alt="avatar" className="avatar-img"/>
            </div>
            <ul className="contact-detail">
              <li><b>{name} ({en_name})</b></li>
              <li><span>Email: </span>{email}</li>
              <li><span>Phone: </span>{tel}</li>
              <li><span>Address: </span>{address}</li>
            </ul>
          </div>
          <p>{about}</p>
          <h2 className="resume-heading">SELECTED PUBLICATIONS</h2>
          {pubs}
        </div>
        <footer>@{en_name}'s Personal HomePage.</footer>
      </div>
    );
  }
}

export default App;
