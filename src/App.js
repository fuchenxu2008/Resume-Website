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
import avatar from './data/avatar.jpg';
import './App.css';

const ExpHeading = ({ title, time }) => (
  <div className="exp-heading-box">
    <div className="pub-title">{title}</div>
    <span>{time}</span>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="detail-list">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const Chart = ({ language, proficiency }) => (
  <div className="chart-item">
    <div className="chart-proficiency">
      <div className="chart-bar">
        <span style={{ width: proficiency }} />
      </div>
      <span>
        {proficiency >= 90
          ? '非常熟练'
          : proficiency >= 80
            ? '较为熟练'
            : proficiency >= 70
              ? '熟练'
              : proficiency >= 50
                ? '熟悉'
                : ''}
      </span>
    </div>
    <div>{language}</div>
  </div>
);

const ExpDetail = ({ detail }) => (
  <div className="pub-list">
    <ExpHeading title={detail.title} time={detail.time} />
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
      {avatar && <img src={avatar} alt="avatar" className="avatar-img" />}
      <ul className="contact-detail">
        <li>
          <h1>
            {name} {en_name}
          </h1>
        </li>
        <li>
          <i className="iconfont icon-youxiang" />
          <span>邮件: &nbsp;</span>
          {email}
        </li>
        <li>
          <i className="iconfont icon-phone" />
          <span>电话: &nbsp;</span>
          {tel}
        </li>
        {github && (
          <li>
            <i className="iconfont icon-github" />
            <span>Github: &nbsp;</span>
            <a href={github}>{github}</a>
          </li>
        )}
      </ul>
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
    <ExpHeading
      title={`${education.school} ${education.major}`}
      time={education.time}
    />
    <BulletList items={education.notes} />
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
    <BulletList items={skills.descriptions} />
    <div className="chart-list">
      {skills.charts.map((chart, i) => (
        <Chart
          key={i}
          language={chart.language}
          proficiency={chart.proficiency}
        />
      ))}
    </div>
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
          {workExperiences.length > 0 && <Work />}
          <br />
          {personalProjects.length > 0 && <Personal />}
          {extracurricular.length > 0 && <Extra />}
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;
