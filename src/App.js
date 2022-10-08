import React, { Component, Fragment } from 'react';
import {
  contact,
  education,
  workExperiences,
  personalProjects,
  extracurricular,
  skills,
  github,
} from './data/info.json';
// import avatar from './data/avatar.jpg';
import './App.css';

const ExpHeading = ({ company, position, time }) => (
  <>
    <div className="exp-heading-box">
      <div className="pub-title">{company}</div>
      <span>{time}</span>
    </div>
    {position && <div className="pub-position">{position}</div>}
  </>
);

const BulletList = ({ items }) => (
  <ul className="detail-list">
    {items.map((item, i) => (
      <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
    ))}
  </ul>
);

const ExpDetail = ({ detail }) => (
  <div className="pub-list">
    <ExpHeading
      company={detail.company}
      position={detail.position}
      time={detail.time}
    />
    <div className="pub-detail">
      <BulletList items={detail.efforts} />
      {detail.img && <img src={detail.img} alt="" />}
    </div>
  </div>
);

/**
 * Contact Info
 */
const Contact = () => {
  const { name, en_name, email, tel } = contact;
  return (
    <div className="contact">
      <h1 className="contact-name">
        {name} {en_name}
      </h1>
      <div className="contact-detail">
        <div>
          <i className="iconfont icon-youxiang" />
          {/* <span>邮件: &nbsp;</span> */}
          {email}
        </div>
        <div>
          <i className="iconfont icon-phone" />
          {/* <span>电话: &nbsp;</span> */}
          {tel}
        </div>
        {github && (
          <div>
            <i className="iconfont icon-github" />
            {/* <span>Github: &nbsp;</span> */}
            <a href={github}>{github}</a>
          </div>
        )}
      </div>
    </div>
  );
};
/**
 * Education
 */
const Education = () => (
  <Fragment>
    <h2 className="resume-heading" id="education">
      教育背景
    </h2>
    {education.map((edu) => (
      <div key={edu.school}>
        <ExpHeading company={`${edu.school} ${edu.major}`} time={edu.time} />
        <BulletList items={edu.notes} />
      </div>
    ))}
  </Fragment>
);

/**
 * Work Experiences
 */
const Work = () => (
  <Fragment>
    <h2 className="resume-heading" id="work">
      工作经历
    </h2>
    {workExperiences.map((data, i) => (
      <ExpDetail detail={data} key={i} />
    ))}
  </Fragment>
);

/**
 * Personal Projects
 */
const Personal = () => (
  <Fragment>
    <h2 className="resume-heading" id="personal">
      个人项目
    </h2>
    {personalProjects.map((data, i) => (
      <ExpDetail detail={data} key={i} />
    ))}
  </Fragment>
);

/**
 * Extracurricular
 */
const Extra = () => (
  <Fragment>
    <h2 className="resume-heading" id="extra">
      其他经历
    </h2>
    {extracurricular.map((data, i) => (
      <ExpDetail detail={data} key={i} />
    ))}
  </Fragment>
);

/**
 * Skills
 */
const Skills = () => (
  <Fragment>
    <h2 className="resume-heading" id="skill">
      技能
    </h2>
    {Object.entries(skills).map(([key, value], i) => (
      <div className="skill-item" key={i}>
        <div className="pub-title">{key}：</div>
        <div className="skill-detail">{value}</div>
      </div>
    ))}
  </Fragment>
);

class App extends Component {
  state = { openNav: false };

  switchNav = () => {
    this.setState((prevState) => ({
      openNav: !prevState.openNav,
    }));
  };

  render() {
    return (
      <div>
        <Contact />
        <div className="App">
          <Education />
          <Skills />
          {workExperiences.length > 0 && <Work />}
          {personalProjects.length > 0 && <Personal />}
          {extracurricular.length > 0 && <Extra />}
        </div>
      </div>
    );
  }
}

export default App;
