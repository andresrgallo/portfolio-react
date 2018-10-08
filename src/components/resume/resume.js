import React, {Component} from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume">
          {/* Education
      ----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Coder Academy</h3>
                  <p className="info">
                    Diploma of Information Technology - Coding Bootcamp{' '}
                    <em className="date">February 2018</em>
                  </p>
                </div>
              </div>{' '}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Sydney Institute of ERP</h3>
                  <p className="info">
                    {' '}
                    SAP Process Integration TERP course{' '}
                    <em className="date">February 2012</em>
                  </p>
                </div>
              </div>{' '}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>University of Sydney</h3>
                  <p className="info">
                    Master degree of Commerce{' '}
                    <em className="date">February 2001</em>
                  </p>
                </div>
              </div>{' '}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Pontificia Universidad Javeriana</h3>
                  <p className="info">
                    Degree of Process Engineering{' '}
                    <em className="date">February 1993</em>
                  </p>
                </div>
              </div>{' '}
              {/* item end */}
            </div>{' '}
            {/* main-col end */}
          </div>{' '}
          {/* End Education */}
          {/* Work
      ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>JobReady</h3>
                  <p className="info">
                    Junior Developer Intern{' '}
                    <em className="date">August 2018</em>
                  </p>
                  <p>
                    Helped built a Ruby Gem to accept data from databases, csv
                    or json files and 'anonymize' the data, keeping its original
                    form and shape.
                  </p>
                </div>
              </div>{' '}
              {/* item end */}
            </div>{' '}
            {/* main-col end */}
          </div>{' '}
          {/* End Work */}
          {/* Skills
      ----------------------------------------------- */}
          <div className="row skill">
            <div className="two columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="ten columns main-col">
              <div class="main-skills">
                <ul class="skills-ul">
                  <li className="js--wp-2">
                    <img src="icons/html1.png" alt="HTML Icon" />
                  </li>
                  <li>
                    <img
                      src="icons/css.png"
                      alt="CSS Icon"
                      className="js--wp-2"
                    />
                  </li>
                  <li>
                    <img
                      src="icons/ruby.png"
                      alt="Ruby on Rails Icon"
                      className="js--wp-2"
                    />
                  </li>
                  <li>
                    <img
                      src="icons/if_Ruby_on_Rails_2_282804.png"
                      alt="Ruby on Rails Icon"
                      className="js--wp-2"
                    />
                  </li>
                  <li>
                    <img
                      src="icons/js.png"
                      alt="Javascript Icon"
                      className="js--wp-1"
                    />
                  </li>
                  <li>
                    <img
                      src="icons/nodejs.png"
                      alt="Nodejs Icon"
                      className="js--wp-1"
                    />
                  </li>
                  <li>
                    <img
                      src="icons/react.png"
                      alt="React Icon"
                      className="js--wp-1"
                    />
                  </li>
                </ul>
              </div>
              {/* end skill-bars */}
            </div>{' '}
            {/* main-col end */}
          </div>{' '}
          {/* End skills */}
        </section>
      </React.Fragment>
    );
  }
}
