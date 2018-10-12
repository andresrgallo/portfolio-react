import React, {Component} from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  My Works
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>{' '}
            {/* end #nav */}
          </nav>{' '}
          {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1>I am {resumeData.name}</h1>
              <h3>
                I am a <span>{resumeData.role}</span> in the making. I'm very{' '}
                <span>passionate</span> about <span>learning, </span>
                <span>very creative</span> and a proven <span>achiever</span>.
                Let's{' '}
                <a className="smoothscroll" href="#about">
                  start scrolling{' '}
                </a>
                and learn more{' '}
                <a className="smoothscroll" href="#about">
                  about me
                </a>
                .
              </h3>
              <hr />
              <ul className="social">
                <li>
                  <a
                    href="https://www.facebook.com/andres.r.gallo"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/andres-rodriguez-9a2bab15b/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/andresrgallo"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa fa-github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
