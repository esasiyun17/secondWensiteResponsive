import React, { Component } from "react";

export default class Intro extends Component {
  render() {
    return (
      <div className="introduction">
        <div className="circle"></div>
        <div className="arrow-right"></div>
        <div className="description">
          <h5 className="header">Frontend Developer</h5>
          <h3 className="sub-header">
            Based in Turkey . I'm a front-end developer
          </h3>
          <p className="paragraf">Creating apps with React.</p>
          <p className="intro-contact">
            <strong>P</strong> : +90 537 856 7335{" "}
          </p>
          <p className="intro-contact">
            <strong>E</strong> : yunusfidann@outlook.com
          </p>
        </div>
        <div className="name-surname">
          <h1 className="name">Yunus</h1>
          <h1 className="surname">Fidan</h1>
        </div>
      </div>
    );
  }
}
