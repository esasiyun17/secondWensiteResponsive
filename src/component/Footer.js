import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer className="footer-foot">
          <div>
            <ul className="social">
              <li className="social-li">
                <a href="https://www.linkedin.com/in/yunus-fidan-1161291b6/">
                  <i class="bi bi-linkedin footer-icon"></i>
                </a>
              </li>
              <li className="social-li">
                <a href="https://github.com/esasiyun17">
                  <i class="bi bi-github footer-icon"></i>
                </a>
              </li>
              <li className="social-li">
                <a href="https://www.instagram.com/yns.fdn/">
                  <i class="bi bi-instagram footer-icon"></i>
                </a>
              </li>
            </ul>
            <p className="paragraf">
              © Created By <strong>Yunus Fidan </strong> with ReactJS
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
